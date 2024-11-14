'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'
import { stringToBase64URL } from '@supabase/ssr'

export async function login(formData) {
  const supabase = await createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get('email'),
    password: formData.get('password'),
  }

  const { error } = await supabase.auth.signInWithPassword(data)
  const errWithMsg = {...error, message: error.message};
  if (error)
    redirect(`/error?error=${stringToBase64URL(JSON.stringify(errWithMsg))}`);

  revalidatePath('/', 'layout')
  redirect('/')
}