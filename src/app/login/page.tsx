"use client";

import Link from "next/link";
import { Input } from "../../components/ui/input";
import React, { useState } from "react";
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
const Login = () => {
  const [formData, setFormData] = useState({
    usernameOrEmail: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

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
                value={formData.usernameOrEmail}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

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
