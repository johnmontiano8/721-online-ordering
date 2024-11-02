"use client";

import Link from "next/link";
import { Input } from "../../components/ui/input";
import React, { useEffect, useState } from "react";
import { Label } from "../../components/ui/label";
import MaxWidthWrapper from "../../components/MaxWidthWrapper";
import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  const [error, setError] = useState("");
  const { status: sessionStatus } = useSession();

  useEffect(() => {
    if (sessionStatus === "authenticated") {
      router.replace("/");
    }
  }, [sessionStatus, router]);

  const isValidEmail = (email: string) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const usernameOrEmail = formData.get("usernameOrEmail") as string;
    const password = formData.get("password") as string;

    if (!usernameOrEmail) {
      setError("Username or Email is required");
      return;
    }

    if (!password || password.length < 8) {
      setError("Password is invalid");
      return;
    }

    const res = await signIn("credentials", {
      redirect: false,
      [isValidEmail(usernameOrEmail) ? "email" : "username"]: usernameOrEmail,
      password,
    });

    if (res?.error) {
      setError("Invalid username/email or password");
    } else {
      setError("");
    }
  };

  if (sessionStatus === "loading") {
    return <h1>Loading...</h1>;
  }

  return (
    <MaxWidthWrapper>
      <Card className="w-full max-w-md mx-auto mt-8 mb-8">
        <CardHeader>
          <CardTitle>
            <div className="text-2xl font-bold text-center text-orange-400">
              Login
            </div>
          </CardTitle>

          <CardDescription className="text-1xl text-center pb-2">
            Enter your credentials to login.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="usernameOrEmail">Username or Email</Label>
              <Input
                id="usernameOrEmail"
                name="usernameOrEmail"
                type="text"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" name="password" type="password" required />
            </div>

            {error && <p className="text-red-500">{error}</p>}
            <Button type="submit" className="w-full bg-orange-400 text-white">
              Login
            </Button>
          </form>
        </CardContent>

        <CardFooter className="flex flex-col items-center">
          <p className="text-sm text-muted-foreground">No account?</p>
          <Link href="/register" className="text-primary hover:underline">
            Register
          </Link>
        </CardFooter>
      </Card>
    </MaxWidthWrapper>
  );
};

export default Login;
