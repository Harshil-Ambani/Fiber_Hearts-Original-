import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminAuthPage from "./AdminAuthPage";
import AdminForgotPassword from "./AdminForgetPassword";
import AdminDashboard from "./AdminDashboard"; // Assuming this is your admin dashboard component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin-login" element={<AdminAuthPage />} />
        <Route path="/admin-signup" element={<AdminAuthPage />} />
        <Route path="/admin-forgot-password" element={<AdminForgotPassword />} />
        <Route path="/admin" element={<AdminDashboard />} /> {/* Admin dashboard */}
      </Routes>
    </Router>
  );
}

export default App;
