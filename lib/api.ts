import { getAccessToken, refreshAccessToken } from "./auth";

const BASE = process.env.NEXT_PUBLIC_API_URL;

// One refresh at a time — any other calls wait in this queue
let isRefreshing = false;
let queue: Array<(token: string | null) => void> = [];

function flushQueue(token: string | null) {
  queue.forEach((cb) => cb(token));
  queue = [];
}

async function withRefresh(token: string | null): Promise<string | null> {
  if (isRefreshing) {
    return new Promise((resolve) => {
      queue.push(resolve);
    });
  }

  isRefreshing = true;
  const newToken = await refreshAccessToken();
  flushQueue(newToken);
  isRefreshing = false;
  return newToken;
}

export async function apiFetch<T = unknown>(
  path: string,
  options: RequestInit = {}
): Promise<T> {
  const token = getAccessToken();

  const makeRequest = (t: string | null) =>
    fetch(`${BASE}${path}`, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        "x-client-type": "web",
        ...(t ? { Authorization: `Bearer ${t}` } : {}),
        ...(options.headers ?? {}),
      },
      credentials: "include",
    });

  let res = await makeRequest(token);

  if (res.status === 401 || res.status === 403) {
    const newToken = await withRefresh(token);

    if (!newToken) {
      if (typeof window !== "undefined") {
        window.location.href = "/login";
      }
      throw new Error("Session expired");
    }

    res = await makeRequest(newToken);
  }

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.message ?? "Request failed");
  }

  const parsed = await res.json()
  return parsed.data as Promise<T>;
}

// Convenience methods
export const api = {
  get: <T>(path: string) => apiFetch<T>(path),
  post: <T>(path: string, body: unknown) =>
    apiFetch<T>(path, { method: "POST", body: JSON.stringify(body) }),
  patch: <T>(path: string, body: unknown) =>
    apiFetch<T>(path, { method: "PATCH", body: JSON.stringify(body) }),
  delete: <T>(path: string) => apiFetch<T>(path, { method: "DELETE" }),
};
