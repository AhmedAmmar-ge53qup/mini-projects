import { Button, Input } from "@nextui-org/react"; // Import NextUI components
import Link from "next/link";
import { signup } from "./actions";
import SignupFormSubmit from "./SIgnupFormSubmit";

export default function SignUpPage() {
  return (
    <div className="flex justify-center items-center h-scree">
      <div className="w-full max-w-md p-8 shadow-lg rounded-lg">
        <h3 className="text-center mb-6">Sign Up</h3>

        <form action={signup} className="space-y-4">
          <Input
            label="Email"
            type="email"
            name="email"
            fullWidth
            isRequired
            aria-label="Email"
            clearable
            bordered
            placeholder="Enter your email"
          />

          <Input
            label="Password"
            type="password"
            name="password"
            fullWidth
            isRequired
            aria-label="Password"
            clearable
            bordered
            placeholder="Enter your password"
          />

          <Input
            label="Confirm Password"
            type="password"
            name="confirmPassword"
            fullWidth
            isRequired
            aria-label="Confirm Password"
            clearable
            bordered
            placeholder="Confirm your password"
          />

          <SignupFormSubmit />
        </form>

        <div className="mt-6 text-center">
          <span className="mr-2">Already have an account?</span>
          <Link href="/auth/login" passHref>
            <span className="text-blue-500 hover:underline cursor-pointer">
              Log in
            </span>
          </Link>

          <div className="mt-2">
            <span className="mr-2">Forgot your password?</span>
            <Link href="/auth/forgot-password" passHref>
              <span className="text-blue-500 hover:underline cursor-pointer">
                Reset here
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
