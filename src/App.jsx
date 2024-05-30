import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import TrailsPage from "./pages/TrailsPage";
import NotFoundPage from "./pages/NotFoundPage";
import TrailPage from "./pages/TrailPage";
import MyWishlistPage from "./pages/MyWishlistPage";
import ConfirmEmailPage from "./pages/auth/ConfirmEmailPage";
import { WishlistProvider } from "./contexts/WishlistContext";
import { Auth } from "@supabase/auth-ui-react";
import AuthProvider from "./contexts/AuthContext";
import LoginPage from "./pages/auth/LoginPage";
import SignoutPage from "./pages/auth/SignoutPage";

const App = () => {
  return (
    <>
      <AuthProvider>
        <WishlistProvider>
          <Router>
            <Routes>
              <Route path="/" element={<MainLayout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/trails" element={<TrailsPage />} />
                <Route path="/trails/:id" element={<TrailPage />} />
                <Route path="*" element={<NotFoundPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signout" element={<SignoutPage />} />
                <Route path="/wishlist" element={<MyWishlistPage />} />
                <Route path="/auth/confirm" element={<ConfirmEmailPage />} />
              </Route>
            </Routes>
          </Router>
        </WishlistProvider>
      </AuthProvider>
    </>
  );
};

export default App;
