import { Navigate, Outlet, createBrowserRouter } from "react-router-dom";

import AccountLayout from "../layouts/account";
import ProtectedRoute from "./ProtectedRoutes";
import ProjectContainer from "../pages/projects/ProjectContainer";
import Signin from "../pages/signin";
import Signup from "../pages/signup";
import Projects from "../pages/projects";
import ProjectDetails from "../pages/project_details";
import TaskDetailsContainer from "../pages/tasks/TaskDetailsContainer";
import NewTask from "../pages/tasks/NewTask";
import Members from "../pages/members";
import Logout from "../pages/logout";
import NotFound from "../pages/Notfound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/account/projects" replace />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/logout",
    element: <Logout />,
  },
  // Protected Routes
  {
    path: "account",
    element: (
      <ProtectedRoute>
        <AccountLayout />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <Navigate to="/account/projects" replace /> },
      {
        path: "projects",
        element: <ProjectContainer />,
        children: [
          { index: true, element: <Projects /> },
          {
            path: ":projectID",
            element: <ProjectDetails />,
            children: [
              { index: true, element: <></> },
              {
                path: "tasks",
                children: [
                  { index: true, element: <Navigate to="../" /> },
                  {
                    path: "new",
                    element: <NewTask />,
                  },
                  {
                    path: ":taskID",
                    children: [
                      { index: true, element: <TaskDetailsContainer /> },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        path: "members",
        element: <Members />,
      },
    ],
  },
  {
    path: "*", // This wildcard will match any other URL
    element: <NotFound />, // Render your NotFound component here
  },
]);

export default router;
