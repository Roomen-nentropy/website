# Nentropy — Full Platform Feature Set

**Purpose of this document:** Give a website-building agent (or copywriter) a complete, accurate picture of what the Nentropy product does today, who it serves, and how features connect. Source: Nentropy EUDR monorepo (client + server), May 2026.

**Product one-liner:**  
Nentropy is a compliance workspace for **EU Deforestation Regulation (EUDR)** due diligence and **EU packaging & labelling (Regulation 2025/40 / PPWR-style requirements)**—suppliers, products, batches, declarations, on-site production checks, and consumer traceability in one place.

**Brand / domain:** joinnentropy.com · app at `app.joinnentropy.com`

---

## Table of contents

1. [Product positioning & audiences](#1-product-positioning--audiences)
2. [Business types (personas)](#2-business-types-personas)
3. [Platform modules (main navigation)](#3-platform-modules-main-navigation)
4. [Authentication, billing & team access](#4-authentication-billing--team-access)
5. [Supplier & compliance questionnaires](#5-supplier--compliance-questionnaires)
6. [Products, batches & traceability](#6-products-batches--traceability)
7. [Own goods & manufacturing](#7-own-goods--manufacturing)
8. [Production & on-site operations (HACCP / PRP)](#8-production--on-site-operations-haccp--prp)
9. [Packaging, labels & consumer trace](#9-packaging-labels--consumer-trace)
10. [Declarations (EUDR DDS + EU 2025/40)](#10-declarations-eudr-dds--eu-202540)
11. [Risk assessments](#11-risk-assessments)
12. [Dossiers & document vault](#12-dossiers--document-vault)
13. [Integrations & API](#13-integrations--api)
14. [Public-facing experiences (no login)](#14-public-facing-experiences-no-login)
15. [Export, audit & reporting](#15-export-audit--reporting)
16. [Dashboard & onboarding](#16-dashboard--onboarding)
17. [Regulatory framing for marketing copy](#17-regulatory-framing-for-marketing-copy)
18. [Feature matrix by persona](#18-feature-matrix-by-persona)
19. [Roadmap / honest limitations](#19-roadmap--honest-limitations)
20. [Suggested website structure](#20-suggested-website-structure)
21. [Tone & messaging guidelines](#21-tone--messaging-guidelines)

---

## 1. Product positioning & audiences

### Primary problems solved

| Problem | How Nentropy addresses it |
|--------|---------------------------|
| Collecting supplier due diligence for EUDR | Digital questionnaires, monitoring, risk assessments, document storage |
| Proving geolocation / plot origin for commodities | DDS workflows, supplier surveys with plot questions, geolocation on batches |
| Tracking DDS numbers and batch-level compliance | Product/batch registry, status chips, expiry warnings, EU submission flows |
| Manufacturer traceability (ingredients → finished good) | Own goods, BOM, production batches linked to supplied ingredient lots |
| On-site food safety / PRP documentation | Production module: checklist runs, plants, machines, employees, lab |
| EU packaging waste regulation labelling (2025/40) | Packaging SKUs, label templates, batch labels, conformity declarations, trace QR |
| Multi-user operations with role separation | Team roles, tab-level permissions, shared company workspace |

### Ideal customer profiles (ICP)

- **EU traders** reselling cocoa, coffee, palm, soy, rubber, wood, cattle products without processing  
- **EU importers** bringing non-EU commodities into the EU  
- **EU food manufacturers** transforming imported EUDR ingredients into finished goods  
- **Domestic / EU-only operators** with simplified EU supplier survey paths  
- **Quality / compliance managers** needing audit trails and PDF exports  
- **Packaging / regulatory affairs** staff managing label compliance and batch trace pages  

---

## 2. Business types (personas)

Chosen at first login (welcome flow) and changeable in **Settings**. Drives which menu items appear and which workflows are available.

### Trader

- **Role:** Buys and resells; does not transform goods.  
- **EUDR focus:** **Record** supplier DDS reference numbers; light due diligence.  
- **Surveys:** Micro supplier questionnaires.  
- **Not included:** Create DDS, risk assessments, own goods, production, packaging module.  
- **Retention (workflow):** 2-year data retention context.  
- **Commercial anchor (in-app copy):** ~€35/month, unlimited suppliers.

### Operator — Importer

- **Role:** Imports regulated commodities from outside the EU.  
- **EUDR focus:** Full due diligence — geolocation, **create** DDS, risk assessments.  
- **Surveys:** Non-EU and mini DDS-style supplier surveys.  
- **Geolocation:** Required in workflow configuration.  
- **Retention:** 5-year context.  
- **Pricing tiers (in-app):** ~€100–150/month by supplier count.

### Operator — Manufacturer

- **Role:** Produces finished goods from imported ingredients.  
- **Everything importer has, plus:** Own goods, BOM, production batches, **Production** checklists, **Packaging & labelling**, packaging declarations.  
- **Surveys:** Non-EU + mini.  
- **Strongest fit** for full platform marketing.

### Operator — Domestic / EU-only

- **Role:** Sources only from EU / domestic suppliers.  
- **EUDR focus:** EU supplier surveys, create DDS, risk assessments, own goods; **no** mandatory geolocation in workflow.  
- **Surveys:** EU templates only.  

---

## 3. Platform modules (main navigation)

Authenticated app sidebar (labels from i18n; some items hidden by persona or team role).

| Module | Route | Summary |
|--------|-------|---------|
| **Dashboard** | `/dashboard` | Compliance overview: supplier/product counts, DDS progress, risk assessment status, activity feed, deadlines |
| **Suppliers** | `/suppliers` | Supplier master data, risk level, compliance status, CSV import, link to products |
| **Products** | `/products` | EUDR product catalog (HS codes, relevance, origin); grid and batch-centric views; packaging/label status for distribution products |
| **Own goods** | `/own-goods` | Manufactured SKUs, recipes/BOM, production batches, ingredient lot linkage |
| **Production** | `/production` | Plants, machines, employees, PRP/HACCP checklists, lab attachments, custom questions, history |
| **Packaging & labelling** | `/packaging-labelling` | EU 2025/40: readiness dashboard, packaging setup, label designs, batch labelling |
| **Surveys** | `/surveys` | Send and monitor supplier compliance questionnaires |
| **Risk assessments** | `/risk-assessments` | Post-survey due diligence scoring and documentation |
| **Declarations** | `/dds` | EUDR DDS surveys + EU submissions + EU 2025/40 self-declarations |
| **Chain of custody** | `/supply-chains` | Supply chain visualization (**coming soon** in UI) |
| **Integrations** | `/integrations` | API tokens, ERP-style connections, webhooks, sync history |
| **Settings** | `/settings` | Company profile, business type, language, subscription, team roles & invites |

**Secondary route (not always in sidebar):** `/geolocations` — plot/plantation geolocation management (may be partial or prototype in some builds).

---

## 4. Authentication, billing & team access

### Sign-in & account

- Email/password authentication (Better Auth).  
- Registration with email verification pattern.  
- Password reset via email (Loops transactional email).  
- Session-based access to web app (`localhost:5173` dev, `app.joinnentropy.com` production).

### Subscription & trial

- **7-day free trial** (prominent in onboarding/pricing UI).  
- Subscription states: Trial, Active, Past due, Canceled, Expired.  
- **Trial banner** with countdown while on trial.  
- **Subscription modal** when trial ends — pricing grid by business type, Stripe checkout (client integration).  
- Plans marketed in-app: Trader €35/mo; Operator tiers €100–150/mo (25–50 suppliers); annual discount messaging.

### Team & organization (multi-user)

- One **organization** per company workspace; data owned by org **owner** account, shared across members.  
- **Root admin:** First user; full access; manages roles and invites.  
- **Team roles:** Custom names; permissions = which **main tabs** and **subtabs** are allowed (no field-level restrictions).  
- **Email invites:** `/auth?invite=<token>` — colleague signs up or logs in and joins org with assigned role.  
- **Cross-role workflows:** e.g. one user sets up own goods/packaging links, another completes batch labelling — same underlying data.

**Production subtabs (permissionable):** History, Intake control, Plants & machines, Employees, Production, Lab, Question builder  

**Packaging subtabs (permissionable):** Dashboard, Packaging setup, Label designs, Batch labelling  

**Settings subtabs (permissionable):** Company, Team roles, Members  

---

## 5. Supplier & compliance questionnaires

### Supplier surveys (`/surveys`)

**Purpose:** Collect structured due diligence from suppliers via secure link (no supplier login required).

**Capabilities:**

- Create survey instances from **EU** or **non-EU** compliance templates (auto-matched to supplier origin).  
- Email/link sharing with expiration.  
- Public form: save progress, submit final responses.  
- Optional **EUDR geolocation / plot** questions on survey.  
- Optional **EU 2025/40 packaging** block on survey (good type, technical spec, conformity document upload) — independent of EUDR plots.  
- Monitoring dashboard: status, completion %, responses.  
- **Export:** JSON and PDF (print-ready HTML) for completed instances.  
- Multilingual template support (EN/BG and extensible translations).  
- File uploads per question (certificates, documents) stored securely (S3).

**Survey types by persona:** EU · NON_EU · MICRO · MINI

### DDS supplier surveys (inside Declarations)

**Purpose:** Collect either full **geolocation data** or **existing DDS reference numbers** from suppliers.

**Modes:**

- **Full geolocation** — for operators needing plot evidence.  
- **DDS number only** — simplified path where applicable (e.g. SME traders).  

**Public access:** `/dds-survey/:token` — dedicated supplier-facing form.

---

## 6. Products, batches & traceability

### Products

- Catalog of goods in scope for EUDR (commodity relevance by HS / category).  
- Link products to suppliers.  
- Flag **distribution / resold without processing** (enables packaging/labelling workflow on product grid).  
- Internal and supplier product codes.  
- CSV import at scale (large file support on server).

### Batches (supplied goods)

- Batch numbers per product.  
- **DDS number** and validity tracking per batch.  
- Status indicators: active, expiring, geolocation mismatch warnings.  
- **Intake checklists** on new batch (quality + transport) — open from Products batch UI.  
- Batch-centric view for operations teams.  
- Link batches to declarations and compliance state.

### Batch intake (internal)

- On new batch creation, system can spawn **INTAKE_QUALITY** and **INTAKE_TRANSPORT** checklist runs.  
- Dialog with Quality / Transport tabs (standard questionnaire UI).  
- Transport attachments (files to cloud storage).  
- Outcomes: PASS/FAIL; quality FAIL can flag ERP lock request (integration hook, no external ERP wired by default).

---

## 7. Own goods & manufacturing

**For manufacturers and domestic operators with `canManageOwnGoods`.**

### Own goods registry

- Finished product definitions (name, codes, metadata).  
- **Bill of materials / recipe:** ingredient lines with % and links to **supplied product batches** (ingredient lots).  
- Validation against available ingredient batches when creating production batches.

### Production batches (own goods)

- Batch numbers for manufactured output.  
- Tie each batch to selected ingredient lots (upstream traceability).  
- Link to production orders and technological control checklists where used.  
- Packaging template assignment and label instance per batch (via Products/Own goods grids + Packaging module).

---

## 8. Production & on-site operations (HACCP / PRP)

**Route:** `/production`  
**Audience:** Manufacturers, QA, HACCP coordinators.

### Sub-areas

| Area | What users do |
|------|----------------|
| **History** | View completed and draft checklist runs; filter by section; **export PDF/JSON** for completed runs |
| **Intake control** | Start PRP checklists for incoming goods control (catalog-driven forms) |
| **Plants & machines** | Register plants and machines; open **plant** and **machine dossiers** |
| **Employees** | Register staff; run employee-linked daily hygiene checklists |
| **Production** | Launch catalog of PRP/production checklists (Bulgarian PRP matrix–derived definitions + custom questionnaires) |
| **Lab** | Upload lab files; optional link to own-good batch; lab QC checklist runs |
| **Question builder** | Admins define **custom questions** with tags; assign to category in generic questionnaire or **named questionnaire** |

### Checklist engine (internal)

- Templates per kind: intake quality/transport, machine, floor hygiene, warehouse, employee hygiene, tech control, lab QC, etc.  
- **Runs:** Draft → save responses → complete → locked with PASS/FAIL outcome.  
- **Display IDs** human-readable (product-batch-intake, machine-day-seq, etc.).  
- **Bulchiken-style forms:** Table entry, progressive lock, simple forms — depending on PRP template.  
- File uploads on checklist questions.  
- Immutable **template snapshot** on each run for audit.

### Production master data API

- Plants (code, name, location).  
- Machines (code, model, plant link).  
- Employees (code, name).  
- Production orders (create output batch + ingredient inputs) — API exists; full orders UI may be limited.  
- Lab attachments list + upload.

---

## 9. Packaging, labels & consumer trace

**Route:** `/packaging-labelling`  
**Regulation framing:** EU **2025/40** packaging & labelling requirements (marketing: PPWR / packaging waste labelling compliance).

### Four-step wizard

1. **Dashboard (readiness)**  
   - Checklist: packaging SKU marked, material profile, label template chosen, batch labels done, trace QR generated.  
   - Deep links to fix gaps on Products, Own goods, or batch labelling.

2. **Packaging setup**  
   - Catalog of packaging SKUs.  
   - Mark which products/own goods use which packaging.  
   - **Material profile:** recycled content %, reusable/recyclable flags → feeds regulatory fields on labels.

3. **Label designs**  
   - Create/manage **label templates** (layout + regulatory field bindings).  
   - Upload base artwork; optional **AI assist** to suggest field regions from photo.  
   - Duplicate templates; version for reuse across SKUs.

4. **Batch labelling**  
   - Per **product batch** or **own-good batch:** fill label fields, validate against rules.  
   - Generate **QR code** linking to public trace page.  
   - Export label as **PDF/PNG** into dossier.  
   - Bulk QR operations (API support).

### Cross-page workflow

- **Products** and **Own goods** grids: columns for packaging link + template selection.  
- Deep link from batch row to Packaging → Batch labelling tab with subject pre-selected.

### Public consumer trace

- **`/trace/:token`** — no login.  
- Shows product/batch identity, label fields, linked documents (transparency for end consumers / auditors).  
- QR on physical label points here.

### Packaging declarations (Declarations tab)

- **Self-declaration** workflow for EU 2025/40 conformity per product/own good (rich template).  
- Separate from EUDR DDS tab but same **Declarations** hub in navigation.

---

## 10. Declarations (EUDR DDS + EU 2025/40)

**Route:** `/dds` (labeled **Declarations** in navigation)

### Tab: EUDR DDS

- List **DDS supplier survey** instances (geolocation vs DDS-number modes).  
- Create surveys; copy public links; monitor completion.  
- **Export PDF/JSON** when completed.  
- **EU DDS submissions:** workflows to submit/trace DDS in EU systems (import DDS, own-good DDS, export batch flows — persona-dependent).  
- Links to risk assessments and supplier data.

### Tab: Self Declaration (2025/40)

- EU packaging conformity **self-declaration** documents.  
- Template-driven content per eligible product or own good.  
- Supports regulatory documentation pack alongside physical labels.

---

## 11. Risk assessments

**Route:** `/risk-assessments`

**Purpose:** Formal due diligence record **after** supplier survey completion.

**Capabilities:**

- Create from completed survey data (prefill).  
- Risk score, red flags, structured declarations (deforestation, legality, etc.).  
- Attachments and notes.  
- Detail view + edit flow.  
- **PDF export** (server-generated) and JSON export.  
- List/filter assessments by supplier/product context.

**Availability:** Importer, manufacturer, domestic operators — **not** trader persona.

---

## 12. Dossiers & document vault

**Purpose:** Aggregate compliance documents and run history per business object.

| Dossier type | Access from | Contents (typical) |
|--------------|-------------|-------------------|
| **Product** | Products UI | Batches, checklist summaries, linked docs |
| **Machine** | Production → machines | Checklist history for asset |
| **Plant** | Production → plants | Plant-level compliance context |
| **Own good** | Own goods UI | Recipe, batches, lab files, orders, tech runs |
| **Supplier** | Supplier master data | Geolocations, certs, survey history |

Packaging exports (label PDF/PNG) can land in batch/product dossier context.

---

## 13. Integrations & API

**Route:** `/integrations`

### For IT / ERP teams

- **API tokens** with scopes for programmatic access.  
- Push/pull style integration endpoints for suppliers, products, batches (integration API v1).  
- **Webhooks** and sync history UI.  
- Connection management (pause, error states).  
- Intended for SAP, Dynamics, Oracle, custom ERP — connector depth varies by deployment.

### Health & ops

- `GET /health` on API for monitoring.

---

## 14. Public-facing experiences (no login)

| URL pattern | User | Experience |
|-------------|------|------------|
| `/auth` | Customer | Login, register, accept team invite |
| `/forgot-password`, `/reset-password` | Customer | Account recovery |
| `/survey/:token` | Supplier | Full compliance questionnaire; multilingual; save & submit |
| `/dds-survey/:token` | Supplier | DDS geolocation or DDS number collection |
| `/trace/:token` | Consumer / auditor | Batch trace & documents from QR scan |

**Marketing site** (separate from this app) would typically link to **sign up**, **book demo**, and explain these flows without exposing tokens.

---

## 15. Export, audit & reporting

| Artifact | When available | Format |
|----------|----------------|--------|
| Completed **checklist run** | Production history, run dialog | PDF (print HTML), JSON |
| Completed **supplier survey** | Surveys monitoring | PDF, JSON |
| Completed **DDS survey** | DDS surveys list | PDF, JSON |
| **Risk assessment** | Risk assessment detail | PDF (server), JSON |
| **Batch label** | Packaging batch editor | PDF, PNG |
| **Survey Word export** | Client-side generation | DOCX-style export paths in survey tooling |

**Audit properties:** Completed runs locked; template snapshot preserved; PASS/FAIL outcome; timestamps; display IDs.

---

## 16. Dashboard & onboarding

### Onboarding

- **Welcome dialog** if business type not set — forces persona selection.  
- **Business type selector** with feature lists and pricing hints per card.  
- **Company settings** capture: legal name, registration, VAT, address, contacts, legal representative.  
- **SME classification** modal/flow where applicable for DDS survey modes.  
- Language switcher (EN / BG supported in i18n structure).

### Dashboard widgets (typical)

- Supplier and product counts.  
- DDS completion progress.  
- Risk assessment progress.  
- Recent activity feed.  
- Upcoming deadlines.  
- Quick navigation to incomplete work.

---

## 17. Regulatory framing for marketing copy

### EUDR (EU Deforestation Regulation)

**Commodities in scope (marketing list):** cattle, cocoa, coffee, oil palm, rubber, soy, wood and derived products.

**Message pillars:**

- Due diligence from **supplier questionnaire** → **risk assessment** → **geolocation evidence** → **DDS**.  
- **Batch-level** tracking of DDS validity.  
- **Operator vs trader** paths (create vs record DDS).  
- **Retention** aligned to role (2 vs 5 years in product logic).  
- **Country / forest risk** language in assessments (where implemented in templates).

### EU Regulation 2025/40 (Packaging & packaging waste / labelling)

**Message pillars:**

- Not the same as EUDR — **integrated module** for operators who also place packaged goods on the EU market.  
- **Material composition** on label, **recycled content**, reusability/recyclability.  
- **Declaration of conformity** workflow.  
- **Batch-specific** label data + **QR trace** for transparency.  
- Supplier can upload conformity evidence via **optional survey section**.

### Combined value proposition

> One workspace for **forest-risk due diligence (EUDR)** and **packaging compliance (2025/40)**—from supplier email to consumer QR.

---

## 18. Feature matrix by persona

| Capability | Trader | Importer | Manufacturer | Domestic |
|------------|:------:|:--------:|:------------:|:--------:|
| Suppliers & products | ✓ | ✓ | ✓ | ✓ |
| Batches | ✓ | ✓ | ✓ | ✓ |
| Record DDS | ✓ | — | — | — |
| Create DDS | — | ✓ | ✓ | ✓ |
| Supplier surveys (micro / EU / non-EU) | Micro | Non-EU, Mini | Non-EU, Mini | EU |
| Risk assessments | — | ✓ | ✓ | ✓ |
| DDS supplier surveys | ✓ | ✓ | ✓ | ✓ |
| Own goods & BOM | — | — | ✓ | ✓ |
| Production checklists | — | — | ✓ | ✓ |
| Packaging & labelling | — | — | ✓ | ✓ |
| EU 2025/40 self-declaration | — | — | ✓ | ✓ |
| Geolocation required (workflow) | — | ✓ | ✓ | — |
| Supply chains (UI) | — | Soon | Soon | Soon |
| Team roles | ✓ | ✓ | ✓ | ✓ |
| Integrations | ✓ | ✓ | ✓ | ✓ |

---

## 19. Roadmap / honest limitations

Use these only where transparency helps trust (footer, FAQ, or “coming soon”).

- **Supply chains** navigation marked **Coming soon** — limited or no end-user workflow yet.  
- **Geolocations** standalone page may be incomplete vs supplier master-data geolocation APIs.  
- **Production orders UI** — backend exists; not all production-order features exposed in Production tab.  
- **ERP lock** on failed intake — flag only; no live ERP connector unless integrated.  
- **Global “open checklists” inbox** — runs started from Production; no unified task inbox across all types.  
- **Field-level permissions** — team roles control tabs/subtabs only, not individual fields.  
- **Windows dev:** project path must not contain apostrophe (`n'entropy`); use `C:\nentropy-repo` copy for local Vite.  
- **Stripe billing:** verify production env has payment plugin fully enabled before marketing “subscribe now” as guaranteed.

**Documented UX improvements (internal backlog):** see `docs/UX_IMPROVEMENT_BACKLOG.md` in repo.

---

## 20. Suggested website structure

For an agent building a **marketing site** (separate from the app):

```
Home
├── Product
│   ├── EUDR Due Diligence
│   ├── Packaging & Labelling (EU 2025/40)
│   ├── Production & Quality (HACCP/PRP)
│   └── Traceability & QR
├── Solutions (by persona)
│   ├── Traders
│   ├── Importers
│   ├── Manufacturers
│   └── Domestic / EU-only operators
├── How it works
│   ├── Supplier surveys
│   ├── Risk & DDS
│   └── Labels & consumer trace
├── Pricing
├── Integrations / API
├── Security & compliance (data retention, hosting, GDPR placeholders)
├── About / Contact
└── Login → app.joinnentropy.com
```

### Key pages to wire to real product screenshots

1. Dashboard overview  
2. Supplier survey public form (mock token)  
3. Risk assessment summary  
4. Products + batch DDS status  
5. Own goods BOM  
6. Production checklist history + export  
7. Packaging wizard + label canvas  
8. Trace QR public page  
9. Team roles in Settings  

---

## 21. Tone & messaging guidelines

- **Professional, compliance-first** — buyers are QA, regulatory, and procurement leads.  
- **EU-centric** — “EU regulation”, “due diligence”, “declaration”, not vague “ESG platform”.  
- **Concrete verbs** — send, track, export, declare, label, trace, invite, assess.  
- **Avoid** claiming certification or legal advice — “helps you organize due diligence” not “guarantees EUDR compliance”.  
- **Differentiate** EUDR vs 2025/40 — two modules, one login.  
- **Human workflows** — multi-role teams, handoff from own goods setup to label manager.  

### Sample hero lines (optional)

- *“EUDR due diligence and EU packaging labels—from supplier inbox to consumer QR.”*  
- *“One workspace for forest-risk compliance and batch-level packaging traceability.”*  
- *“Send surveys, assess risk, file DDS, print compliant labels.”*

### Sample feature bullets (homepage)

- Supplier questionnaires with document upload and PDF export  
- Geolocation and DDS workflows for operators  
- Risk assessments prefilled from survey responses  
- Product and batch registry with DDS expiry visibility  
- Own-goods BOM linking ingredient lots to finished batches  
- On-site PRP/HACCP checklists with audit history  
- EU 2025/40 label designer and batch QR trace pages  
- Team roles and email invites for divided responsibilities  
- API and integrations for ERP master data  

---

## Appendix A — Technical reference (for agents implementing integrations)

**Stack:** React (Vite) + MUI client; Node/Express API; PostgreSQL + Prisma; Better Auth; S3 uploads; Loops email; Stripe (client); optional OpenAI for label AI.

**Monorepo layout:**

- Client: `nentropy-eudr-client-main/nentropy-eudr-client-main/`  
- Server: `nentropy-eudr-server-main/nentropy-eudr-server-main/`  
- Docs: `docs/` (LOCAL_DEV, COFOUNDER_IMPLEMENTATION_HANDOFF, UX_IMPROVEMENT_BACKLOG)

**API base (app):** `/api/*` on same host as SPA in production.

---

## Appendix B — Glossary

| Term | Meaning in product |
|------|-------------------|
| **DDS** | Due Diligence Statement (EUDR) |
| **DDS number** | Reference identifier for a filed statement |
| **Own good** | Manufactured finished product in your facility |
| **Supplied batch** | Incoming lot on a purchased product |
| **PRP** | Prerequisite programme (Bulgarian HACCP documentation heritage in checklist catalog) |
| **Checklist run** | One filled instance of an internal questionnaire |
| **Trace token** | Public URL token for consumer batch page |
| **Root admin** | First org user; manages team |
| **Workspace** | Shared org data visible to all members (via owner data scope) |

---

*Document version: May 2026 — aligned with Nentropy EUDR monorepo feature set including organization roles, questionnaire export, and production question builder.*
