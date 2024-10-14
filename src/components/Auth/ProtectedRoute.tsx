import { useAppSelector } from "@store/hooks";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { accessToken } = useAppSelector((state) => state.auth);
  if (accessToken) {
    return <>{children}</>;
  }
  return <Navigate to="/login?message=login_required" />;
};

export default ProtectedRoute;
