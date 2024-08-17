import "server-only";
import { cookies } from "next/headers";

export const createSession = async (jwt: string) => {
  const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000);

  cookies().set("session", jwt, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
    sameSite: "lax",
    path: "/",
  });
};

export const deleteSession = () => {
  cookies().delete("session");
};
