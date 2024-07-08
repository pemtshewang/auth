"use client";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { LoaderCircle, EyeIcon,EyeOffIcon } from "lucide-react";
import Link from "next/link";
import {Toast} from "@/components/ui/sonner"

type Credentials = {
  username: string;
  password: string;
  confirmPassword: string;
};
export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [credentials, setCredentials] = useState<Credentials>({
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const handleLoginSubmit = async() => {
    setIsLoading(true);
    const submitCred = await fetch("http://localhost:3000/api/auth/login",
    {
      body:JSON.stringify(credentials),
    }
    );
  };
  return (
    <div>
      <div>
        <h1 className="font-bold antialiased text-center my-5">
          Just Register
        </h1>
      </div>
      <form>
        <Card className="flex-col space-y-4 p-9 max-w-md mx-auto">
          <div>
            <Input
              required
              onChange={(text) =>
                setCredentials({
                  ...credentials,
                  username: text.currentTarget.value,
                })
              }
              placeholder="Username"
            />
          </div>
          <div className="relative">
            <div onClick={()=>setShowPassword(!showPassword)}> {
                showPassword ?
            <EyeIcon 
            className="absolute right-0 bottom-1/2 top-1/4 mr-1"
            />:
            <EyeOffIcon 
            className="absolute right-0 bottom-1/2 top-1/4 mr-1"
            />
              }
            </div>
            <Input
              required
              type={
                showPassword ? "text":"password"
              }
              placeholder="Password"
              onChange={(text) =>
                setCredentials({
                  ...credentials,
                  password: text.currentTarget.value,
                })
              }
            />
          </div>
          <div className="relative">
            <div onClick={()=>setShowPassword(!showPassword)}>
              {
                showPassword ?
            <EyeIcon 
            className="absolute right-0 bottom-1/2 top-1/4 mr-1"
            />:
            <EyeOffIcon 
            className="absolute right-0 bottom-1/2 top-1/4 mr-1"
            />
              }
            </div>
            <Input
              required
              type={
                showPassword ? "text":"password"
              }
              placeholder="Confirm Password"
              onChange={(text) =>
                setCredentials({
                  ...credentials,
                  confirmPassword: text.currentTarget.value,
                })
              }
            />
          </div>
          <div className="flex flex-col items-center  space-y-5 ustify-center">
            <Button
              type="submit"
              onClick={handleLoginSubmit}
              className="mx-auto min-w-9"
            >
              {isLoading ? (
                <LoaderCircle className="animate-spin w-5 h-5" />
              ) : (
                "Register"
              )}
            </Button>
            <Link className="underline" href="/">
              Login Instead
            </Link>
          </div>
        </Card>
      </form>
    </div>
  );
}
