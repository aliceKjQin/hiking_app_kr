import { useEffect } from "react";
import { useNavigate, useSearchParams, useLocation } from "react-router-dom";
import supabase from "../../utils/supabase";

const ConfirmEmailPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const token_hash = searchParams.get("token_hash");
  console.log(token_hash);
  const type = searchParams.get("type");
  console.log(type);

  useEffect(() => {
    const verifyEmail = async () => {
      const { error } = await supabase.auth.verifyOtp({ type, token_hash });
      if (error) {
        console.error("Error verifying email:", error.message);
        alert("Error verifying email. Please try again.");
        navigate("/login"); // Redirect to login page on error
      } else {
        if (location.state && location.state.from) {
          navigate(location.state.from); // Navigate the user back to the page they were trying to access
        } else {
          navigate("/"); // If location.state is not defined or null (i.e., the user navigated directly to the login page), the user would be redirected to the homepage
        }
      }
    };

    verifyEmail();
  }, [navigate, token_hash, type, location.state]);

  return <div>ConfirmEmailPage</div>;
};

export default ConfirmEmailPage;
