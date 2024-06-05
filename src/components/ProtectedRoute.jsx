import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function ProtectedRoute({ children }) {
  const { user } = useAuth();

  if (!user) {
    alert("You need to be logged in to view this page.");
    return <Navigate to="/login?next=trails" replace={true}/>;
  }

  return children;
}

export default ProtectedRoute;
