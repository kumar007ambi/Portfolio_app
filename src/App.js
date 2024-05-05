import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";
import Projects from "./components/Projects";
import OpenSource from "./components/OpenSource";
import ContactMe from "./components/ContactMe";
import Header from "./components/Header";
import Greetings from "./components/Greetings";
import Footer from "./components/Footer";

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Greetings />,
      },
      {
        path: "/skills",
        element: <Skills />,
      },
      {
        path: "/experience",
        element: <WorkExperience />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/opensource",
        element: <OpenSource />,
      },
      {
        path: "/contact",
        element: <ContactMe />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <>
        <RouterProvider router={appRouter} />
      </>
    </div>
  );
}

export default App;
