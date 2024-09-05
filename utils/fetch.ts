const URL = process.env.NEXT_PUBLIC_API;

export function fetchWithBaseUrl(url: string, options?: RequestInit) {
  const baseUrl = URL || "";
  return fetch(baseUrl + url, { ...options, cache: "no-cache" });
}
