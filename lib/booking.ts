import { site } from "./site";

type PrivateBooking = {
  embedUrl: string | null;
  linkUrl: string | null;
};

export function parseBookingUrl(url: string | null): PrivateBooking {
  if (!url?.trim()) return { embedUrl: null, linkUrl: null };

  const iframeSrc = url.trim().match(/<iframe\b[^>]*\bsrc\s*=\s*(["'])(.*?)\1/i);
  const linkUrl = iframeSrc ? iframeSrc[2].replace(/&amp;/gi, "&").trim() : url.trim();

  let parsedUrl: URL;
  try {
    parsedUrl = new URL(linkUrl);
  } catch {
    return { embedUrl: null, linkUrl: null };
  }

  if (parsedUrl.protocol !== "https:" || !parsedUrl.host) {
    return { embedUrl: null, linkUrl: null };
  }

  if (
    parsedUrl.host !== "calendar.google.com" ||
    !parsedUrl.pathname.startsWith("/calendar/appointments/")
  ) {
    return { embedUrl: null, linkUrl };
  }

  parsedUrl.searchParams.set("gv", "true");
  return { embedUrl: parsedUrl.toString(), linkUrl };
}

export function getBooking(): PrivateBooking {
  const embedBooking = parseBookingUrl(site.booking.embedSrc);
  const publicBooking = parseBookingUrl(site.booking.url);

  return {
    embedUrl: embedBooking.embedUrl,
    linkUrl: publicBooking.linkUrl ?? embedBooking.linkUrl,
  };
}
