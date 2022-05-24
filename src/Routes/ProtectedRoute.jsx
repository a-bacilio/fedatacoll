import { Navigate } from "react-router-dom";
import jsCookie from "js-cookie";
import { useSelector } from "react-redux";
import { tokenSelector } from "../redux/slices/auth/authSelectors";

export function ProtectedRoute({ children }) {
  return (
    <>{!useSelector(tokenSelector) ? <Navigate to="/" replace /> : children}</>
  );
}
