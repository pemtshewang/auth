"use client";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { LoaderCircle } from "lucide-react";
import Link from "next/link";

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
  const handleLoginSubmit = () => {
    setIsLoading(true);
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
          <div>
            <Input
              required
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
          <div>
            <Input
              required
              type="password"
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
