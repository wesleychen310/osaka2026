# Private Learning Hub

Private study-site gateway for ISLP / PA / ATPA materials.

## Architecture

```
Google Drive (private study HTML / source files)
        ↓ Google Drive API / read-only service account
Cloudflare Worker
        ↓ HTTP Basic Auth
private workers.dev site
```

GitHub stores Worker code only. Study content stays in Google Drive.

## Google Drive content root

- Root folder ID: `1uLenu319fQEQwltPasYv1HH_EL6Swk4q`
- Root folder: https://drive.google.com/drive/folders/1uLenu319fQEQwltPasYv1HH_EL6Swk4q

Current structure:

```
/
├─ islp/
│  ├─ ch03/
│  │  ├─ reading/
│  │  └─ extensions/
│  └─ ch04/
└─ pa-atpa/
   └─ super-notes/
```

## Reused Google service account

For now this project reuses the existing read-only service account:

`id-kyoto-2027-drive-reader@gen-lang-client-0469855556.iam.gserviceaccount.com`

The service-account JSON/private key is NOT stored in GitHub.

## Expected Cloudflare runtime secrets

- `AUTH_USERS`
- `GOOGLE_SERVICE_ACCOUNT_JSON`

These must be configured later in the new Cloudflare Worker project.

## Current migrated content

### ISLP Ch.3 extensions

- `/islp/ch03/extensions/3.6.4` → `ISLP_3.6.4_Multivariate_Goodness_of_Fit.html`
- `/islp/ch03/extensions/3.6.5` → `ISLP_3.6.5_Interaction_Terms.html`
- `/islp/ch03/extensions/3.6.6` → `ISLP_3.6.6_Non_linear_Transformations_of_the_Predictors.html`
- `/islp/ch03/extensions/3.6.7` → `ISLP_3.6.7_Qualitative_Predictors.html`
- `/islp/ch03/extensions/3.7` → `ISLP_3.7_Exercises_Guided_Study.html`

### ISLP Ch.4

- `/islp/ch04/` → `ISLP_Ch4_Deep_Reading_Complete_Batch01-13.html`
- `/islp/ch04/legacy` → `ISLP_Chapter_4.html`

### PA / ATPA super notes

The interactive HTML reading version is now connected:

- Route: `/pa-atpa/super-notes`
- Drive file: `超級筆記.html`
- Drive file ID: `1Gmf5EKGCxqR0iE-MwLfNrZM6DWNVdxTa`

The Worker reads the private HTML from Google Drive at request time. The service account has reader access to this file.

## Still to migrate

The published ChatGPT Sites are not yet available as raw HTML in Drive:

- `islp-ch3-reading-0930.wesley310.chatgpt.site`
- the combined top-level page for `islp-ch3-extensions-0930.wesley310.chatgpt.site`
- Super Notes has been migrated; the old `super-notes-pa-atpa.wesley310.chatgpt.site/progress/` URL can remain only as a legacy reference.

The Drive folder structure is ready for those HTML files when exported/recreated.

## Cloudflare handoff

When ready, create a second Cloudflare Worker/Git deployment using:

- Repository: `wesleychen310/osaka2026`
- Production branch: `main`
- Root directory: `cloudflare/learning-hub`
- Deploy command: `npx wrangler deploy`

Then add the two runtime secrets listed above.
