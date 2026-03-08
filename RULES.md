# RULES.md — Quigley's Concrete

> **Review this file before brainstorming, planning, or implementing anything in this project.**

---

## 🔍 Pre-Work Checklist

Before touching any code:
- [ ] Read this file top to bottom
- [ ] Confirm GitHub Actions secrets are still set (`VERCEL_TOKEN`, `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID`)
- [ ] Run `npm audit` before adding any new dependencies
- [ ] Never run `npm audit fix --force` — see gotchas below

---

## 🐛 Issues Log

### Resolved

| # | Issue | Root Cause | Fix | Commit |
|---|-------|-----------|-----|--------|
| 1 | "Foundations" copy incorrect | Wrong service label on site | Changed to "Concrete Slabs" | — |
| 2 | CI/CD not deploying | GitHub Actions secrets not configured | Added `VERCEL_TOKEN`, `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID` | — |
| 3 | ESLint dev dependency vulnerabilities (`glob`, `minimatch`) | Outdated transitive dev deps | Documented — NOT auto-fixed; zero production risk | — |

---

## 🔒 Security Rules

1. **No secrets in code** — all env vars via Vercel dashboard or `vercel env add`.
2. **`npm audit fix --force` is banned** — the `glob`/`minimatch` vulnerabilities are dev-only (ESLint toolchain) and fixing them requires breaking changes. They never ship in the production bundle. Document them, don't force-fix.
3. **Production bundle is audited separately** — only `dependencies` (not `devDependencies`) matter for production security. Run `npm audit --omit=dev` to check production exposure.
4. **No user data collected** — this is a brochure site. No forms, no DB, no auth. Keep it that way unless explicitly requested.

---

## ⚠️ Known Gotchas

- **`npm audit fix --force` will break the build** — `glob` and `minimatch` fixes require major version bumps that break ESLint. Verified zero production risk; leave them alone.
- **Vercel project ID**: `prj_DfRGWxfLici3Ykr3InbyFnWDttkq`
- **Deploy branch**: `master`

---

## 🏗️ Architecture Reminders

- **Stack**: Next.js on Vercel
- **Deploy**: push `master` → GitHub Actions → `vercel deploy --prod`
- **Repo**: `rickyhowcroft-dot/quigleys-concrete`, `master` branch
- **Nature of site**: brochure/marketing only — no backend, no DB, no user accounts
