import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

/**
 * SUBDOMAIN ROUTING MIDDLEWARE
 * 
 * Handles routing for the tools subdomain (tools.bonnevalsolutions.com)
 * - Rewrites requests from tools subdomain to /tools-domain/* pages
 * - Keeps main site routing unchanged
 * - Works seamlessly with Next.js App Router
 */

export function middleware(request: NextRequest) {
  const host = request.headers.get('host')?.toLowerCase() || ''
  const { pathname, search } = new URL(request.url)

  // Rewrite tools subdomain to /tools-domain/* pages
  if (host === 'tools.bonnevalsolutions.com') {
    const destinationPath = `/tools-domain${pathname}`
    const url = new URL(destinationPath + search, request.url)
    return NextResponse.rewrite(url)
  }

  // No special handling for main site or other hosts
  return NextResponse.next()
}

// Match all routes except Next.js internals and static files
export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}