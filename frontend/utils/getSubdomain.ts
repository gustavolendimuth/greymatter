export default function getSubdomain(url: string) {
  url ||= window.location.href;
  const parsedUrl = new URL(url);
  const domain = parsedUrl.hostname;
  const domainParts = domain.split('.');

  if (domainParts.length >= 3) {
    const subdomain = domainParts.slice(0, -2).join('.');
    return subdomain;
  }

  return null;
}
