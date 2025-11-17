import { NextResponse } from 'next/server';

const locales = ['hu', 'en'];
const defaultLocale = 'hu';

function getLocale(request) {
    const pathname = request.nextUrl.pathname;

    // Check if pathname already has a locale
    const pathnameHasLocale = locales.some(
        locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    );

    if (pathnameHasLocale) {
        return locales.find(locale => pathname.startsWith(`/${locale}`));
    }

    return defaultLocale;
}

export function middleware(request) {
    const { pathname } = request.nextUrl;

    // Redirect root to /hu
    if (pathname === '/') {
        return NextResponse.redirect(new URL('/hu', request.url));
    }

    // Skip middleware for static files and API routes
    if (
        pathname.startsWith('/_next') ||
        pathname.startsWith('/api') ||
        pathname.includes('.') // files like favicon.ico, images, etc.
    ) {
        return NextResponse.next();
    }

    // Check if locale is in pathname
    const pathnameHasLocale = locales.some(
        locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    );

    if (!pathnameHasLocale) {
        // Redirect to default locale (hu)
        const locale = defaultLocale;
        const newUrl = new URL(`/${locale}${pathname}`, request.url);
        return NextResponse.redirect(newUrl);
    }

    return NextResponse.next();
}
