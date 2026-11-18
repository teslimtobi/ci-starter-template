# CI starter template

Starter template for new Appnable projects: CI checks, Node version, Dependabot and secret scanning from day one.

## What you get

| File | What it does |
| --- | --- |
| `.github/workflows/ci.yml` | On every pull request and push to `main`: lint, type check, test and build, plus a Gitleaks secret scan |
| `.github/dependabot.yml` | Weekly grouped pull requests for npm packages and GitHub Actions (Mondays, 08:00 Lagos time) |
| `.github/pull_request_template.md` | Asks for the Asana link, a test link and evidence before a task moves to Ready to test |
| `.nvmrc` | The Node version (26), used by developers and by CI |
| `src/app/api/health/route.ts` | A `/api/health` endpoint for uptime monitoring |
| `src/lib/health.test.ts` | An example test with Vitest |

## Start a new project from this template

1. On this repository page, click **Use this template** and then **Create a new repository**.
2. Replace the sample app in `src/` with your project, keeping the `.github` folder and `.nvmrc`.
3. Work through the setup checklist below.

## Setup checklist (GitHub does not copy these settings)

- [ ] **Settings > Code security:** turn on Dependabot alerts and Dependabot security updates.
- [ ] **Settings > Code security:** turn on secret scanning and push protection, where available.
- [ ] **Settings > Rules (or Branches):** protect `main` so changes need a pull request, and require the checks *Lint, type check, test and build* and *Secret scan* to pass.
- [ ] **Add a `CODEOWNERS` file** naming who reviews which parts of the code.
- [ ] **Add project secrets** under Settings > Secrets and variables > Actions. Never put them in code.
- [ ] **Change `.nvmrc`** only if the project needs a different Node version.

## Run the checks on your machine

```bash
npm ci
npm run lint
npm run typecheck
npm test
npm run build
```

## Health check

`GET /api/health` returns `{ "status": "ok", "timestamp": "..." }`. Point uptime monitoring at this address.

## Maintainer

Tobi Teslim (Automation Trainee). Suggestions and pull requests are welcome.
