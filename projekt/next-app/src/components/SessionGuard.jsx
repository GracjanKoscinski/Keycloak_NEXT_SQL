"use client";
import { signIn, useSession } from "next-auth/react";
import { useEffect } from "react";

export default function SessionGuard({ children }) {
  const { data } = useSession();
  useEffect(() => {
    if (data?.error === "RefreshAccessTokenError") {
      signIn("keycloak");
    }
  }, [data]);

  return <>{children}</>;
}