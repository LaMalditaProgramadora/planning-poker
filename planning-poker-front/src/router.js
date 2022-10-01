import { useRoutes } from "react-router-dom";
import Layout from "./layout/Layout";
import PokerPage from "./pages/PokerPage";
import RegisterPage from "./pages/RegisterPage";

export const AppRouter = () => {
  return useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <RegisterPage />,
        },
        {
          path: "poker",
          element: <PokerPage />,
        },
      ],
    },
  ]);
};
