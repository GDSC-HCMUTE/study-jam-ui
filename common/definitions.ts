import { z } from "zod";

export interface ActionResponse {
  success: boolean;
  message?: string;
  data?: object;
}

export const SignInSchema = z.object({
  email: z.string().min(1, "Email is required."),
  password: z.string().min(1, "Password is required."),
});

export type SignInSchemaType = z.infer<typeof SignInSchema>;
