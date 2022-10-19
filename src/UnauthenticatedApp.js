import React from "react";
import { Route, Routes } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
export const UnauthenticatedApp = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </>
  );
};
