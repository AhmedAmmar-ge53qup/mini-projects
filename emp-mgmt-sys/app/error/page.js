import ErrorComp from "@/components/ErrorComp";
import {stringFromBase64URL } from "@supabase/ssr";

export default async function LoginErrorPage({ searchParams }) {

    const { error } = await searchParams;    

    return <ErrorComp error={JSON.parse(stringFromBase64URL(error))} />
}