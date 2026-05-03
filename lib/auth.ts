const ACCESS_TOKEN_KEY = "alkhis_access_token";

export function getAccessToken(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(ACCESS_TOKEN_KEY);
}

export function setAccessToken(token: string) {
  localStorage.setItem(ACCESS_TOKEN_KEY, token);
}

export function clearAccessToken() {
  localStorage.removeItem(ACCESS_TOKEN_KEY);
}

export function isLoggedIn(): boolean {
  return !!getAccessToken();
}

export async function login(email: string, password: string): Promise<{ ok: boolean; message?: string }> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-client-type": "web",
      },
      credentials: "include",
      body: JSON.stringify({ email, password }),
    });

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      return { ok: false, message: err.message ?? "Invalid credentials" };
    }

    const { data } = await res.json();

    setAccessToken(data.accessToken);
    return { ok: true };
  } catch {
    return { ok: false, message: "Network error. Please try again." };
  }
}

export async function logout() {
  try {
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/logout`, {
      method: "POST",
      headers: { "x-client-type": "web" },
      credentials: "include",
    });
  } finally {
    clearAccessToken();
  }
}

export async function refreshAccessToken(): Promise<string | null> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/refresh`, {
      method: "POST",
      headers: { "x-client-type": "web" },
      credentials: "include",
    });


    if (!res.ok) {
      clearAccessToken();
      return null;
    }

    const { data } = await res.json();
    setAccessToken(data.accessToken);
    return data.accessToken;
  } catch {
    clearAccessToken();
    return null;
  }
}
