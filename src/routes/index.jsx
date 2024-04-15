import { createBrowserRouter } from "react-router-dom";
import MainLayout from "~/layouts/main";
import Home from "~/pages/home";
import Employers from "~/pages/employers";
import SignIn from "~/pages/auth/sign-in";
import SignUp from "~/pages/auth/sign-up";
import NotFound from "~/pages/not-found";
import EmployerPosting from "~/pages/posting";
import CompanySetup from "~/pages/company-setup";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        path: "/",
        element: <Home />,
      },
      {
        path: "/employers",
        element: <Employers />,
      },
      {
        path: "/employers/posting",
        element: <EmployerPosting />,
      },
      {
        path: "/employers/company-setup",
        element: <CompanySetup />,
      },
      {
        path: "/auth/sign-in",
        element: <SignIn />,
      },
      {
        path: "/auth/sign-up",
        element: <SignUp />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default routes;
