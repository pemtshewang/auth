"use client";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LoaderCircle } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

type Credentials = {
  username: string;
  password: string;
};
export default function LoginPage() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [credentials, setCredentials] = useState<Credentials>({
    username: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const handleLoginSubmit = () => {
    setIsLoading(true);
    console.log(credentials);
    setIsLoading(false);
  };
  return (
    <div>
      <div>
        <h1 className="font-bold antialiased text-center my-5">Just Login</h1>
      </div>
      <Card className="flex-col space-y-4 p-9">
        <div>
          <Input
            onChange={(text) =>
              setCredentials({
                ...credentials,
                username: text.currentTarget.value,
              })
            }
            placeholder="Username"
          />
        </div>
        <div>
          <Input
            type="password"
            placeholder="Password"
            onChange={(text) =>
              setCredentials({
                ...credentials,
                password: text.currentTarget.value,
              })
            }
          />
        </div>
        <div className="flex flex-col justify-center items-center space-y-5">
          <Button onClick={handleLoginSubmit} className="mx-auto min-w-9">
            {isLoading ? (
              <LoaderCircle className="animate-spin w-5 h-5" />
            ) : (
              "Login"
            )}
          </Button>
          <Link className="underline" href="/auth/register">
            Sign Up!
          </Link>
        </div>
      </Card>
    </div>
  );
}
