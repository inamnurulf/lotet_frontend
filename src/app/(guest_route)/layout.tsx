"use client";
import React, { ReactNode, useEffect, useContext } from "react";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/context/auth-context";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const router = useRouter();
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext?.isUserAuthenticated()
      ? null
      : () => {
        router.push("/dashboard");
      };
  }, []);

  return <>{children}</>;
};

export default Layout;
