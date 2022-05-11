import { Navigate } from "react-router-dom";
import jsCookie from "js-cookie";

export function ProtectedRoute({
  children,
  role = "hola",
  loginRoute = false,
}) {
  let response = <span>{role}</span>;
  if (!loginRoute) {
    if (!jsCookie.get("DTCUSERID") || !jsCookie.get("DTCTOKEN")) {
      response = <Navigate to="/" replace />;
    } else {
      response = children;
    }
  } else if (!jsCookie.get("DTCUSERID") || !jsCookie.get("DTCTOKEN")) {
    response = <Navigate to="/" replace />;
  } else {
    response = children;
  }
  return response;
}
