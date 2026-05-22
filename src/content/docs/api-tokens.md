---
title: API tokens
description: Scoped programmatic access
order: 2
section: integrations
---

## Creating tokens

In **Settings → Integrations**, create a token and assign scopes for the entities you need (suppliers, products, batches).

Store tokens securely. Rotate if compromised.

## Authentication

Pass the token in the `Authorization` header:

```http
Authorization: Bearer YOUR_TOKEN
```

## Scopes

Scopes limit which endpoints and operations are available. Follow least-privilege: only enable what your integration needs.
