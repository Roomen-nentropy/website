---
title: Sync entities
description: Push and pull master data
order: 3
section: integrations
---

## Supported entities (v1)

| Entity | Typical use |
|--------|-------------|
| Suppliers | Master data from ERP |
| Products | Catalog and HS relevance |
| Batches | Incoming lots and DDS references |

## Push / pull

The integration API supports push and pull style operations. Exact endpoints are documented in your deployment handoff or the app integrations UI.

## Errors

Failed syncs surface in **sync history**. Quality intake can flag an ERP lock request (hook only—no live ERP lock unless you wire it).
