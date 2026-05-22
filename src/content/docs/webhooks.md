---
title: Webhooks
description: Event notifications and sync history
order: 4
section: integrations
---

## Configuration

Register webhook URLs in the Integrations module. Events may include successful syncs, failures, and connection state changes.

## Retry policy

Verify your endpoint returns `2xx` promptly. Implement idempotency on your side for duplicate deliveries.

## Sync history UI

The app lists recent sync runs with status, timestamps, and error messages for support and auditing.
