import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Header from "./components/header/header.jsx";
import Footer from "./components/footer/footer.jsx";
import ErrorPage from "./pages/erreur";
import AboutPage from "./pages/about";
import LodgingPage from "./pages/lodging";
import HomePage from "./pages/home.jsx";
import "./styles/global.css";

// --- Layout principal  --- //
function Layout() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

// --- Définition des routes ---
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "lodging/:id", element: <LodgingPage /> },
      { path: "*", element: <ErrorPage /> },
    ],
  },
]);


function App() {
  return <RouterProvider router={router} />;
}

export default App;
