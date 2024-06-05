import { useEffect } from "react";
import { useNavigate, useSearchParams, useLocation } from "react-router-dom";
import supabase from "../../utils/supabase";

// handle sign in process
const ConfirmEmailPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const token_hash = searchParams.get("token_hash");
  const type = searchParams.get("type");
  console.log(token_hash, type);
  
  useEffect(() => {
    const verifyEmail = async () => {
      const { error } = await supabase.auth.verifyOtp({ token_hash, type });
      // try and catch
      try {
        if (error) {
          console.error("Error verifying email:", error.message);
          alert("Error verifying email. Please try again.");
          navigate("/login"); // Redirect to login page on error
        } else  {
            navigate('/trails'); // Navigate the user to trails page on success
          } 
      } catch (error) {
        console.log(error);
      }
    };

    verifyEmail();
  }, []);

  return <div>ConfirmEmailPage</div>;
};

export default ConfirmEmailPage;
