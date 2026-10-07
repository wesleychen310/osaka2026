const ROUTES = new Map([
  ["/islp/ch03/extensions/3.6.4", "1Wb1o-ftkCctjI32itxRojt4zIzgh1WB7"],
  ["/islp/ch03/extensions/3.6.5", "1DuBvkuqDvgbNs21ThN9he9QBps87094u"],
  ["/islp/ch03/extensions/3.6.6", "1XjrKno1SZWdZaI7G2GQu2jeo5YOuA_Vu"],
  ["/islp/ch03/extensions/3.6.7", "12NT2teSw2kUy3AO8PYsnunozlo6MHadm"],
  ["/islp/ch03/extensions/3.7", "18k7ahmLOgOYICEuSauWGQhTsLM5ijMyx"],
  ["/islp/ch04", "1FIb_uTyRp11gyrxvHuvbzdL2Nt0H1jox"],
  ["/islp/ch04/legacy", "12mVTwzC379qQBVlv3fu1NRtdXk7Cdnf6"]
]);

function unauthorized() {
  return new Response("Private learning site — login required", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Learning Hub", charset="UTF-8"',
      "Cache-Control": "no-store",
      "X-Content-Type-Options": "nosniff"
    }
  });
}

function parseUsers(secret) {
  const users = new Map();
  for (const raw of (secret || "").split(/\r?\n/)) {
    const line = raw.trim();
    if (!line || line.startsWith("#")) continue;
    const p = line.indexOf("|");
    if (p <= 0) continue;
    const email = line.slice(0, p).trim().toLowerCase();
    const password = line.slice(p + 1);
    if (email && password) users.set(email, password);
  }
  return users;
}

function checkAuth(request, env) {
  const header = request.headers.get("Authorization") || "";
  if (!header.startsWith("Basic ")) return false;

  let decoded = "";
  try {
    decoded = atob(header.slice(6));
  } catch {
    return false;
  }

  const p = decoded.indexOf(":");
  if (p <= 0) return false;

  const email = decoded.slice(0, p).trim().toLowerCase();
  const password = decoded.slice(p + 1);
  const users = parseUsers(env.AUTH_USERS);

  return users.size > 0 && users.get(email) === password;
}

function b64url(bytes) {
  let binary = "";
  const arr = bytes instanceof Uint8Array ? bytes : new Uint8Array(bytes);
  for (const b of arr) binary += String.fromCharCode(b);
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}

function textB64url(text) {
  return b64url(new TextEncoder().encode(text));
}

function pemToArrayBuffer(pem) {
  const body = pem
    .replace(/-----BEGIN PRIVATE KEY-----/g, "")
    .replace(/-----END PRIVATE KEY-----/g, "")
    .replace(/\s+/g, "");
  const binary = atob(body);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  return bytes.buffer;
}

let cachedAccessToken = null;
let cachedAccessTokenExp = 0;

async function getGoogleAccessToken(env) {
  const now = Math.floor(Date.now() / 1000);
  if (cachedAccessToken && now < cachedAccessTokenExp - 60) return cachedAccessToken;

  let sa;
  try {
    sa = JSON.parse(env.GOOGLE_SERVICE_ACCOUNT_JSON);
  } catch {
    throw new Error("GOOGLE_SERVICE_ACCOUNT_JSON is invalid JSON.");
  }

  if (!sa.client_email || !sa.private_key) {
    throw new Error("Service account JSON is missing client_email or private_key.");
  }

  const header = { alg: "RS256", typ: "JWT" };
  const payload = {
    iss: sa.client_email,
    scope: "https://www.googleapis.com/auth/drive.readonly",
    aud: "https://oauth2.googleapis.com/token",
    iat: now,
    exp: now + 3600
  };

  const unsigned = `${textB64url(JSON.stringify(header))}.${textB64url(JSON.stringify(payload))}`;

  const key = await crypto.subtle.importKey(
    "pkcs8",
    pemToArrayBuffer(sa.private_key),
    { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" },
    false,
    ["sign"]
  );

  const sig = await crypto.subtle.sign(
    "RSASSA-PKCS1-v1_5",
    key,
    new TextEncoder().encode(unsigned)
  );

  const assertion = `${unsigned}.${b64url(sig)}`;

  const tokenRes = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion
    })
  });

  if (!tokenRes.ok) {
    throw new Error(`Google OAuth failed: ${tokenRes.status} ${await tokenRes.text()}`);
  }

  const token = await tokenRes.json();
  cachedAccessToken = token.access_token;
  cachedAccessTokenExp = now + (token.expires_in || 3600);
  return cachedAccessToken;
}

async function fetchDriveHtml(fileId, env) {
  const token = await getGoogleAccessToken(env);
  const res = await fetch(
    `https://www.googleapis.com/drive/v3/files/${encodeURIComponent(fileId)}?alt=media`,
    { headers: { Authorization: `Bearer ${token}` } }
  );

  if (!res.ok) {
    throw new Error(`Google Drive read failed: ${res.status} ${await res.text()}`);
  }

  return await res.text();
}

function normalizePath(pathname) {
  if (pathname === "/") return "/";
  return pathname.replace(/\/+$/, "");
}

function htmlResponse(html, status = 200) {
  return new Response(html, {
    status,
    headers: {
      "Content-Type": "text/html; charset=UTF-8",
      "Cache-Control": "no-store",
      "X-Content-Type-Options": "nosniff",
      "Referrer-Policy": "no-referrer"
    }
  });
}

function homePage() {
  return `<!doctype html>
<html lang="zh-Hant-TW">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<title>Learning Hub</title>
<style>
:root{--bg:#f6f7f8;--card:#fff;--text:#1f2328;--muted:#69717a;--line:#e3e7eb;--accent:#335c81;--soft:#eef4f8}
*{box-sizing:border-box}
body{margin:0;font-family:-apple-system,BlinkMacSystemFont,"PingFang TC","Noto Sans TC",sans-serif;background:linear-gradient(180deg,#eef4f8 0,#f6f7f8 260px);color:var(--text)}
main{max-width:840px;margin:auto;padding:42px 18px 72px}
.eyebrow{font-size:12px;font-weight:800;letter-spacing:.1em;color:var(--accent)}
h1{font-size:34px;margin:7px 0 8px}
.lead{margin:0 0 24px;color:var(--muted)}
section{margin-top:26px}
h2{font-size:18px;margin:0 0 10px}
.grid{display:grid;gap:12px}
.card{display:block;text-decoration:none;color:inherit;background:var(--card);border:1px solid var(--line);border-radius:20px;padding:18px;box-shadow:0 8px 24px rgba(31,35,40,.045)}
.card strong{display:block;font-size:18px;margin-bottom:4px}
.card span{display:block;color:var(--muted);font-size:14px;line-height:1.5}
.card .go{margin-top:12px;color:var(--accent);font-weight:750}
.pending{background:var(--soft)}
.links{display:grid;gap:8px}
.links a{color:var(--accent);text-decoration:none;background:#fff;border:1px solid var(--line);padding:12px 14px;border-radius:14px}
.note{font-size:13px;color:var(--muted);margin-top:22px}
@media(min-width:680px){.grid{grid-template-columns:1fr 1fr}}
</style>
</head>
<body>
<main>
<div class="eyebrow">PRIVATE · STUDY</div>
<h1>Learning Hub</h1>
<p class="lead">ISLP · PA · ATPA · actuarial learning notes</p>

<section>
<h2>主要入口</h2>
<div class="grid">
  <div class="card pending"><strong>ISLP Chapter 3｜Reading</strong><span>Drive 目錄已建立；完整 HTML 尚待移植。</span></div>
  <div class="card pending"><strong>ISLP Chapter 3｜Extensions</strong><span>既有分節 HTML 已移入 Drive；整合首頁 HTML 尚待移植。</span></div>
  <div class="card pending"><strong>PA / ATPA｜超級筆記</strong><span>DOCX 主檔已移入新目錄；HTML 閱讀版尚待建立。</span></div>
  <a class="card" href="/islp/ch04"><strong>ISLP Chapter 4</strong><span>目前已有完整 Deep Reading HTML。</span><div class="go">開啟 →</div></a>
</div>
</section>

<section>
<h2>已可直接開啟的 Ch.3 Extensions 分節</h2>
<div class="links">
  <a href="/islp/ch03/extensions/3.6.4">3.6.4 Multivariate Goodness of Fit</a>
  <a href="/islp/ch03/extensions/3.6.5">3.6.5 Interaction Terms</a>
  <a href="/islp/ch03/extensions/3.6.6">3.6.6 Non-linear Transformations</a>
  <a href="/islp/ch03/extensions/3.6.7">3.6.7 Qualitative Predictors</a>
  <a href="/islp/ch03/extensions/3.7">3.7 Exercises Guided Study</a>
</div>
</section>

<p class="note">Google Drive 是內容主檔；GitHub 僅保存 Worker code 與 route mapping。</p>
</main>
</body>
</html>`;
}

function notFoundPage(path) {
  const safePath = path.replace(/[&<>"']/g, c => ({
    "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"
  }[c]));
  return `<!doctype html><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>找不到頁面</title><body style="font-family:-apple-system;padding:32px;background:#f6f7f8;color:#222">
<h1>找不到頁面</h1><p>${safePath}</p><p><a href="/">回 Learning Hub</a></p></body>`;
}

export default {
  async fetch(request, env) {
    if (!checkAuth(request, env)) return unauthorized();

    const url = new URL(request.url);
    const path = normalizePath(url.pathname);

    try {
      if (path === "/health") {
        return new Response("ok", {
          headers: {
            "Content-Type": "text/plain; charset=UTF-8",
            "Cache-Control": "no-store"
          }
        });
      }

      if (path === "/") return htmlResponse(homePage());

      const fileId = ROUTES.get(path);
      if (fileId) return htmlResponse(await fetchDriveHtml(fileId, env));

      return htmlResponse(notFoundPage(path), 404);
    } catch (err) {
      return htmlResponse(`<!doctype html>
<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>載入失敗</title>
<body style="font-family:-apple-system;padding:32px;background:#f6f7f8;color:#222">
<h1>暫時無法載入</h1>
<p>Google Drive 連線尚未完成或權限不足。</p>
<pre style="white-space:pre-wrap;background:#fff;padding:14px;border-radius:12px;border:1px solid #ddd">${String(err && err.message ? err.message : err)}</pre>
</body>`, 502);
    }
  }
};
