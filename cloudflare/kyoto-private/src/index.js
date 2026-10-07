const LEDGER_FILE_ID = "19iny4GXWrzgZug-ag4z7_5DHamr0T-m1";
const CONTROL_FILE_ID = "1XVIMkPdvqccbW7i-y4_QrW8h8VcGj3lY";

function unauthorized() {
  return new Response("Private site — login required", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Kyoto 2027", charset="UTF-8"',
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
    {
      headers: { Authorization: `Bearer ${token}` }
    }
  );

  if (!res.ok) {
    throw new Error(`Google Drive read failed: ${res.status} ${await res.text()}`);
  }

  return await res.text();
}

function homePage() {
  return `<!doctype html>
<html lang="zh-Hant-TW">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<title>花見京旅 2027</title>
<style>
:root{--bg:#f6f3f0;--card:#fff;--text:#252321;--muted:#77706b;--line:#e7dfda;--accent:#a53f5e}
*{box-sizing:border-box}
body{margin:0;font-family:-apple-system,BlinkMacSystemFont,"PingFang TC",sans-serif;background:radial-gradient(circle at top right,#f7e7ed 0,transparent 35%),var(--bg);color:var(--text)}
main{max-width:720px;margin:auto;padding:48px 18px 70px}
.hero{margin-bottom:20px}.eyebrow{font-size:12px;font-weight:800;color:var(--accent);letter-spacing:.08em}.hero h1{font-size:34px;margin:6px 0 8px}.hero p{margin:0;color:var(--muted)}
.grid{display:grid;gap:12px}
a.card{display:block;text-decoration:none;color:inherit;background:var(--card);border:1px solid var(--line);border-radius:22px;padding:20px;box-shadow:0 10px 30px rgba(0,0,0,.05)}
.card .icon{font-size:26px}.card h2{font-size:20px;margin:8px 0 3px}.card p{margin:0;color:var(--muted);font-size:14px}.go{margin-top:14px;font-weight:800;color:var(--accent)}
@media(min-width:620px){.grid{grid-template-columns:1fr 1fr}}
</style>
</head>
<body>
<main>
<div class="hero">
  <div class="eyebrow">PRIVATE · KYOTO 2027</div>
  <h1>🌸 花見京旅 2027</h1>
  <p>2027/03/27–04/05｜私人旅行資料</p>
</div>
<div class="grid">
  <a class="card" href="/ledger"><div class="icon">💰</div><h2>旅行帳本</h2><p>支出 Dashboard、交易明細與分類統計</p><div class="go">開啟帳本 →</div></a>
  <a class="card" href="/control"><div class="icon">✅</div><h2>行前管理</h2><p>待辦、訂單、Travel Wallet 與重要資訊</p><div class="go">開啟管理本 →</div></a>
</div>
</main>
</body>
</html>`;
}

function htmlResponse(html) {
  return new Response(html, {
    headers: {
      "Content-Type": "text/html; charset=UTF-8",
      "Cache-Control": "no-store",
      "X-Content-Type-Options": "nosniff",
      "Referrer-Policy": "no-referrer"
    }
  });
}

export default {
  async fetch(request, env) {
    if (!checkAuth(request, env)) return unauthorized();

    const url = new URL(request.url);

    try {
      if (url.pathname === "/health") {
        return new Response("ok", {
          headers: {
            "Content-Type": "text/plain; charset=UTF-8",
            "Cache-Control": "no-store"
          }
        });
      }

      if (url.pathname === "/ledger") {
        return htmlResponse(await fetchDriveHtml(LEDGER_FILE_ID, env));
      }

      if (url.pathname === "/control") {
        return htmlResponse(await fetchDriveHtml(CONTROL_FILE_ID, env));
      }

      return htmlResponse(homePage());
    } catch (err) {
      return htmlResponse(`<!doctype html>
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>載入失敗</title>
<body style="font-family:-apple-system;padding:32px;background:#f7f4f1;color:#222">
<h1>暫時無法載入</h1>
<p>Google Drive 連線尚未完成或權限不足。</p>
<pre style="white-space:pre-wrap;background:#fff;padding:14px;border-radius:12px;border:1px solid #ddd">${String(err && err.message ? err.message : err)}</pre>
</body>`, { status: 502 });
    }
  }
};
