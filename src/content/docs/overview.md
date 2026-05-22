---
title: Overview
description: Integration API for ERP and IT teams
order: 1
section: integrations
---

Nentropy exposes a **REST API** on the same host as the production app (`/api/*`). Use the **Integrations** area in the app to create tokens and manage connections.

## Intended use

- Sync **suppliers**, **products**, and **batches** with your ERP
- Receive **webhooks** on sync events
- Monitor **sync history** and connection health

## Important

Connector depth varies by deployment. We do not claim out-of-the-box SAP, Oracle, or Dynamics connectors unless explicitly agreed in your contract.

## Health check

```http
GET /api/health
```

Returns service status for monitoring.

## Next steps

1. Log in at [app.joinnentropy.com](https://app.joinnentropy.com/integrations)
2. Create an API token with required scopes
3. Configure webhooks if needed
