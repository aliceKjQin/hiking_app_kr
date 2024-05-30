import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const SignoutPage = () => {
  const { signOut } = useAuth();
  const navigate = useNavigate();
  const handleSignout = () => {
    signOut();
    navigate("/");
  };
  return (
    <>
      <h1>Are you sure to sign out?</h1>
      <button
        onClick={() => {
          handleSignout();
        }}
      >
        Sign out
      </button>
      <button>Go back</button>
    </>
  );
};

export default SignoutPage;
