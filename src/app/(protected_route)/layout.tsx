"use client";
import React, { ReactNode, useEffect, useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/context/auth-context";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const router = useRouter();
  const authContext = useContext(AuthContext);
  const [result, setResult] = useState(false);

  useEffect(() => {
    authContext?.isUserAuthenticated()
      ? () => {
          setResult(true);
          router.push("/dashboard");
        }
      : router.push("/auth/login");
  }, []);

  return <>{result ? children : null}</>;
};

export default Layout;
