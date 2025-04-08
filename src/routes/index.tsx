import { useEffect, useState } from "react";
import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";

export const RoutesContainer = () => {
  const [email, setEmail] = useState<string | null>("");
  useEffect(() => {
    const email_buscado = localStorage.getItem("email");
    setEmail(email_buscado);
  }, []);
  return <>{email ? <AppRoutes /> : <AuthRoutes />}</>;
};
