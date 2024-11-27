"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import { stringToBase64URL } from "@supabase/ssr";

export async function signup(formData) {
  const supabase = await createClient();

  const data = {
    email: formData.get("email"),
    password: formData.get("password"),
    confirmPassword: formData.get("confirmPassword"),
  };

  const { error } = await supabase.auth.signUp(data);
  if (error) {
    const errWithMsg = { ...error, message: error.message };
    redirect(`/error?error=${stringToBase64URL(JSON.stringify(errWithMsg))}`);
  }

  revalidatePath("/", "layout");
  redirect("/");
}
