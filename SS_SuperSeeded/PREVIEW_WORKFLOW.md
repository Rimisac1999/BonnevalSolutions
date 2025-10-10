# Preview Environment Workflow (Superseded)

**Status**: Superseded - This logic was replaced with tools subdomain detection  
**Date Archived**: October 2025  
**Reason**: Preview branches added unnecessary complexity for minimal benefit

## Original Preview Environment Logic

### How It Worked

The preview environment system used Git branch detection to show different branding:

- **Main Branch** (`main`): Production branding "Bonneval Solutions"
- **Test/Preview Branches** (any non-main): Preview branding "Preview Bonneval Solutions"

### Configuration Detection

```typescript
// Old logic from config/company.ts
const commitRef = process.env.VERCEL_GIT_COMMIT_REF
const isMainBranch = commitRef ? commitRef === 'main' : true
const isPreview = !isMainBranch

export const companyConfig = {
  name: isPreview ? 'Preview Bonneval Solutions' : 'Bonneval Solutions',
  // ... rest of config
}
```

### Vercel Configuration

The `vercel.json` file contained rewrites for preview subdomains:

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/tools-domain/$1",
      "has": [{ "type": "host", "value": "preview-tools.bonnevalsolutions.com" }]
    },
    {
      "source": "/(.*)",
      "destination": "/$1",
      "has": [{ "type": "host", "value": "preview.bonnevalsolutions.com" }]
    }
  ]
}
```

### Routing Detection

The `utils/routing.ts` file checked for preview hostnames:

```typescript
if (hostname === 'preview.bonnevalsolutions.com') {
  return {
    main: 'preview.bonnevalsolutions.com',
    tools: 'preview-tools.bonnevalsolutions.com',
    isProduction: false
  }
}
```

## Why It Was Removed

1. **Unnecessary Complexity**: Managing separate preview subdomains added configuration overhead
2. **Minimal Value**: Vercel already provides preview deployments with auto-generated URLs
3. **Better Use Case**: The environment detection logic is now repurposed for tools subdomain branding
4. **Maintenance Burden**: Keeping track of preview vs production was more hassle than benefit

## New Approach

The same environment detection pattern is now used to distinguish between:

- **Main Site**: `bonnevalsolutions.com` → "Bonneval Solutions"
- **Tools Subdomain**: `tools.bonnevalsolutions.com` → "Tools Bonneval Solutions"

This provides actual value by differentiating the branding based on which subdomain the user is on.

## Migration Notes

If you need to restore preview environment functionality:

1. Restore the `VERCEL_GIT_COMMIT_REF` detection in `config/company.ts`
2. Add back preview subdomain rewrites to `vercel.json`
3. Update `utils/routing.ts` to handle preview hostnames
4. Configure DNS for `preview.*` and `preview-tools.*` subdomains

## Related Files

- **config/company.ts** - Company configuration (now uses tools subdomain detection)
- **utils/routing.ts** - Routing utilities (simplified)
- **middleware.ts** - Subdomain routing middleware
- **vercel.json** - Vercel deployment configuration

