"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/auth-context";

const layout = ({ children }: any) => {
  const { token, authLoad } = useAuth();
  const router = useRouter();
  useEffect(() => {
    if (!authLoad) {
        if(token) {
          // router.push("/dashboard");
        }

    }
  }, [authLoad]);
  return <>{children}</>;
};

export default layout;
