import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl
  const hasEditMode = searchParams.get('editMode') === 'true'
  const isAdminRoute = pathname.startsWith('/admin') || pathname.startsWith('/api/admin')
  
  if (isAdminRoute || hasEditMode) {
    const adminToken = request.cookies.get('admin_token')
    
    if (!adminToken || adminToken.value !== 'authenticated') {
      // If requesting an API route, return 401
      if (pathname.startsWith('/api/')) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
      }
      
      // Otherwise redirect to login page
      const loginUrl = new URL('/login', request.url)
      return NextResponse.redirect(loginUrl)
    }
  }
  
  return NextResponse.next()
}
 
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - images/ (public images)
     */
    '/((?!_next/static|_next/image|favicon.ico|images/).*)',
  ],
}
