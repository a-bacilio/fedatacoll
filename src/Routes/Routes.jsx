import React from "react";
import { Route, Routes as Router } from "react-router-dom";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import EditProject from "../Pages/EditProject/EditProject";
import EditQuestionImage from "../Pages/EditQuestionImage/EditQuestionImage";
import EditQuestionTextNumber from "../Pages/EditQuestionTextNumber/components/EditQuestionTextNumber";
import MyProjects from "../Pages/MyProjects/MyProjects";
import Pallete from "../Pages/Pallete/Pallete";
import Questionnarie from "../Pages/Questionnarie/Questionnarie";
import ReviewRegisters from "../Pages/ReviewRegisters/ReviewRegisters";
import { ProtectedRoute } from "./ProtectedRoute";

export function RoutesList() {
  return (
    <Router>
      <Route path="" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="palette" element={<Pallete />} />
      <Route
        path="myprojects"
        element={
          <ProtectedRoute>
            <MyProjects />
          </ProtectedRoute>
        }
      />
      <Route
        path="myprojects/:projectid"
        element={
          <ProtectedRoute>
            <EditProject />
          </ProtectedRoute>
        }
      />

      <Route
        path="myprojects/registers/:projectid"
        element={
          <ProtectedRoute>
            <ReviewRegisters />
          </ProtectedRoute>
        }
      />

      <Route
        path="project/question/edit/text/:questionid"
        element={
          <ProtectedRoute>
            <EditQuestionTextNumber />
          </ProtectedRoute>
        }
      />
      <Route
        path="project/question/edit/number/:questionid"
        element={
          <ProtectedRoute>
            <EditQuestionTextNumber />
          </ProtectedRoute>
        }
      />
      <Route
        path="project/question/edit/image/:questionid"
        element={
          <ProtectedRoute>
            <EditQuestionImage />
          </ProtectedRoute>
        }
      />

      <Route path="sharelink/:projectid" element={<Questionnarie />} />

      <Route path="*" element={<>404 Aqui no hay nada :( </>} />
    </Router>
  );
}
