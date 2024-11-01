"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Register = () => {
  const [error, setError] = useState("");
  const router = useRouter();

  const isValidEmail = (email: string) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    const { email, password, confirmPassword } = data;

    if (!isValidEmail(email as string)) {
      setError("Invalid email format");
      return;
    }

    if (!password || (password as string).length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (res.status === 400) {
        setError("The email is already registered!");
      } else if (res.ok) {
        setError("");
        router.push("/login");
      }
    } catch (error) {
      setError("Error, please try again later!");
      console.error(error);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>
          <h2 className="text-2xl font-bold text-center text-orange-400">
            Register
          </h2>
        </CardTitle>
        <CardDescription className="text-1xl text-center pb-2">
          Enter your details to register.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex space-x-2">
            <div className="space-y-2 flex-1">
              <Label htmlFor="firstName">First Name</Label>
              <Input id="firstName" name="firstName" type="text" required />
            </div>
            <div className="space-y-2 flex-1">
              <Label htmlFor="lastName">Last Name</Label>
              <Input id="lastName" name="lastName" type="text" required />
            </div>
            <div className="space-y-2 flex-initial w-20">
              <Label htmlFor="middleInitial">M.I.</Label>
              <Input
                id="middleInitial"
                name="middleInitial"
                type="text"
                required
              />
            </div>
          </div>
          <div className="flex space-x-2">
            <div className="space-y-2 flex-1">
              <Label htmlFor="address">Address</Label>
              <Input id="address" name="address" type="text" required />
            </div>
            <div className="space-y-2 flex-initial w-40">
              <Label htmlFor="contactNo">Contact No.</Label>
              <Input id="contactNo" name="contactNo" type="text" required />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input id="username" name="username" type="text" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" name="password" type="password" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              required
            />
          </div>
          <Button type="submit" className="w-full bg-orange-400">
            Register
          </Button>
          <p className="text-red-600 text-[16px] mb-4">{error && error}</p>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col items-center">
        <p className="text-sm text-muted-foreground">
          Already have an account?
        </p>
        <Link href="/login" className="text-primary hover:underline">
          Login
        </Link>
      </CardFooter>
    </Card>
  );
};

export default Register;
