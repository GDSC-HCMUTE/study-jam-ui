"use server";

import { ActionResponse, SignInSchemaType } from "@/common/definitions";
import { createSession } from "@/utils/session";
import { isRedirectError } from "next/dist/client/components/redirect";
import { redirect, RedirectType } from "next/navigation";

export const signIn = async (
  credentials: SignInSchemaType
): Promise<ActionResponse | void> => {
  let shouldRedirect = true;
  try {
    const res = await fetch(`${process.env.BASE_BACKEND_URL}/auth/sign-in`, {
      method: "POST",
      body: JSON.stringify(credentials),
      headers: {
        "content-type": "application/json",
      },
    });
    const data = await res.json();
    if (res.ok) {
      createSession(data.token);
    } else {
      shouldRedirect = false;
      return {
        success: false,
        message: data.message,
      };
    }
  } catch (error) {
    if (!isRedirectError(error)) {
      shouldRedirect = false;
      console.error("===== Authentication Error =====", error);
    }
    throw error;
  } finally {
    if (shouldRedirect) {
      redirect("/", RedirectType.replace);
    }
  }
};
