import { Button, Input } from "@nextui-org/react";
import Link from "next/link";
import { login } from "./actions";

export default function LoginPage() {
  return (
    <span className="flex justify-center items-center h-screen">
      <div className="w-full max-w-md p-8 shadow-lg rounded-lg">
        <h3 className="text-center mb-6">Log in</h3>

        <form action={login} className="space-y-4">
          <Input
            label="Email"
            name="email"
            type="email"
            fullWidth
            isRequired
            aria-label="Email"
            clearable
            bordered
            placeholder="Enter your email"
          />

          <Input
            label="Password"
            name="password"
            type="password"
            fullWidth
            isRequired
            aria-label="Password"
            clearable
            bordered
            placeholder="Enter your password"
          />

          <Button type="submit" fullWidth color="primary" className="mt-4">
            Log in
          </Button>
        </form>

        <div className="mt-6 text-center">
          <span className="mr-2">{"Don't"} have an account?</span>
          <Link href="/auth/signup">
            <span className="text-blue-500 hover:underline cursor-pointer">
              Sign up
            </span>
          </Link>

          <div className="mt-2">
            <span className="mr-2">Forgot your password?</span>
            <Link href="/auth/forgot-password">
              <span className="text-blue-500 hover:underline cursor-pointer">
                Reset here
              </span>
            </Link>
          </div>
        </div>
      </div>
    </span>
  );
}
