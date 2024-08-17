"use server";

import { cookies } from "next/headers";

export const getCurrentUser = async () => {
  const session = cookies().get("session")?.value;
  if (!session) {
    return null;
  }
  try {
    const res = await fetch(`${process.env.BASE_BACKEND_URL}/users/current`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${session}`,
      },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(
      "===== Error occurred while getting the current user =====",
      error
    );
    return null;
  }
};
