# Kyoto 2027 private gateway

Private HTML gateway for the Kyoto 2027 trip.

## Architecture

```
Google Drive (private HTML source of truth)
        ↓ Google Drive API / read-only service account
Cloudflare Worker
        ↓ HTTP Basic Auth
private workers.dev site
```

The GitHub repository contains **Worker code only**. Private ledger/control HTML stays in Google Drive.

## Current deployment

- Repository: `wesleychen310/osaka2026`
- Worker source: `cloudflare/kyoto-private/`
- Cloudflare Worker: `kyoto-2027-private`
- Worker URL: `https://kyoto-2027-private.cyc690310.workers.dev/`
- Production branch: `main`
- Root directory: `cloudflare/kyoto-private`
- Deploy command: `npx wrangler deploy`

Cloudflare Git integration automatically deploys commits to `main`.

## Current routes

| Route | Google Drive source |
|---|---|
| `/` | Worker-generated private home page |
| `/ledger` | `2027花見京旅帳本.html` — file ID `19iny4GXWrzgZug-ag4z7_5DHamr0T-m1` |
| `/control` | `2027花見京旅行前事務本.html` — file ID `1XVIMkPdvqccbW7i-y4_QrW8h8VcGj3lY` |
| `/health` | health check |

Drive folder:
`https://drive.google.com/drive/folders/1vKwNEbpC79mnJzEbK1mfIhuvD9lxiUgA`

## Google Cloud / Service Account

- Google Cloud project name: `Gemini API`
- Project ID: `gen-lang-client-0469855556`
- Google Drive API: enabled
- Service account name: `kyoto-2027-drive-reader`
- Service account email:
  `id-kyoto-2027-drive-reader@gen-lang-client-0469855556.iam.gserviceaccount.com`

The service account email is intentionally recorded here because it is needed when sharing future Drive HTML files.

**The service-account private key / JSON is intentionally NOT stored in GitHub.**

## Cloudflare runtime secrets

Production runtime secrets currently expected by `src/index.js`:

- `AUTH_USERS`
- `GOOGLE_SERVICE_ACCOUNT_JSON`

Never commit their values.

`AUTH_USERS` accepts one user per line:

```text
email@example.com|password
another@example.com|another-password
```

The current authentication method is Worker-level **HTTP Basic Auth**, not Cloudflare Access / Google SSO.

## Adding another private HTML page

1. Keep the HTML file in Google Drive.
2. Share that file as **Viewer** with:
   `id-kyoto-2027-drive-reader@gen-lang-client-0469855556.iam.gserviceaccount.com`
3. Record the new Drive file ID.
4. Update `src/index.js` with a new file ID constant and route.
5. Add a home-page card if needed.
6. Commit to `main`.
7. Cloudflare deploys automatically.
8. Test the new route.

Normally there is **no need** to recreate the Google Cloud project, Drive API, service account, JSON key, or runtime secrets.

## Security rules

This directory is inside a **public GitHub repository**.

Safe to store here:
- Worker code
- service account email
- Google Cloud project ID
- Drive file IDs
- routes
- Worker URL
- secret names

Do **not** commit or paste into chat:
- Google service-account JSON
- `private_key`
- `private_key_id`
- `AUTH_USERS` values
- passwords
- OAuth client secrets
- Cloudflare API token values
- recovery / 2FA codes
- booking or ledger data

If the service-account JSON key is ever exposed, delete that key in Google Cloud, create a new JSON key, and replace the Cloudflare `GOOGLE_SERVICE_ACCOUNT_JSON` secret.

## Full reusable setup record

Read:

`cloudflare/kyoto-private/SETUP_RECORD.txt`

That file contains the complete reusable setup sequence, troubleshooting notes, current IDs, security boundaries, and the shortest workflow for adding future private HTML pages.

## Handoff to a new ChatGPT conversation

Use:

> 看 `wesleychen310/osaka2026` 裡的 `cloudflare/kyoto-private`，繼續我的 Google Drive 私人 HTML 網站。先讀 `README.md`、`SETUP_RECORD.txt` 和 `src/index.js`。

That is enough to reconstruct the architecture without repeating the setup.

## Local files

- `src/index.js` — auth, Google JWT/OAuth, Drive fetch, routes, home page
- `wrangler.jsonc` — Worker config
- `package.json` — Wrangler deploy scripts
- `README.md` — quick handoff
- `SETUP_RECORD.txt` — full reusable build record
