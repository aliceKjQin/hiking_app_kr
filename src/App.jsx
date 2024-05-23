import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import TrailsPage from "./pages/TrailsPage";
import NotFoundPage from "./pages/NotFoundPage";
import TrailPage from "./pages/TrailPage";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* // Wrap all routes in the Route that renders MainLayout component to apply the MainLayout to all routes, which has the navbar */}
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/trails" element={<TrailsPage />} />
          <Route path="/trails/:id" element={<TrailPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
