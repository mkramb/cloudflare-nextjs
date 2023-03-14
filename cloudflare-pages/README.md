# CloudFlare Pages

### Running locally

Start the watch process:

```
npm run cloudflare:watch
```

And then local development environment using wrangler:

```
npm run cloudflare:dev
```

### Deploying to CloudFlare

First login to your CF account:

```
wrangler login
```

Trigger manual publish via wrangler:

```
CLOUDFLARE_ACCOUNT_ID=<project-id> npx wrangler pages publish .vercel/output/static
```

### Known issues

- We need to use NPM, as next-on-pages relies on it, also doesn't work as part of monorepo setup
- We need to use next version 12.3.2 otherwise cloudflare tooling complains about manifest version