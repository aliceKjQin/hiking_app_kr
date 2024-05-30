import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import supabase from "../../utils/supabase";

const ConfirmEmailPage = () => {
  const navigate = useNavigate();
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
        navigate(-1); // Go back to the previous page on success
      }
    };

    verifyEmail();
  }, [navigate, token_hash, type]);

  return <div>ConfirmEmailPage</div>;
};

export default ConfirmEmailPage;
