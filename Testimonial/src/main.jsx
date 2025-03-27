import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import AdminPanel from "./pages/AdminPanel";
import Services from "./pages/Services";
import Orders from "./pages/Orders";
import Navbar from "./components/Navbar";
import PrivateRoute from "./components/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";
import "./index.css";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/services" element={<Services />} />
          <Route path="/orders" element={<Orders />} />
          <Route
            path="/dashboard"
            element={<PrivateRoute roles={["user", "admin"]} component={Dashboard} />}
          />
          <Route
            path="/admin"
            element={<PrivateRoute roles={["admin"]} component={AdminPanel} />}
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
