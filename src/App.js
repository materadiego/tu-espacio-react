import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/NavBar/NavBar";

import "./scss/Styles.scss";

const LazyHomePage = React.lazy(() => import("./Pages/HomePage"));
const LazyPacksPage = React.lazy(() => import("./Pages/PacksPage"));
const LazyTeamPage = React.lazy(() => import("./Pages/TeamPage"));
const LazyProjectsPage = React.lazy(() => import("./Pages/ProjectsPage"));
const LazyContactPage = React.lazy(() => import("./Pages/ContactPage"));
const LazyGuideCalendlyPage = React.lazy(() =>
  import("./Pages/GuideCalendlyPage")
);

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/tu-espacio-react"
            element={
              <Suspense>
                <LazyHomePage />
              </Suspense>
            }
          />
          <Route
            path="/Equipo"
            element={
              <Suspense>
                <LazyTeamPage />
              </Suspense>
            }
          />
          <Route
            path="/Proyectos"
            element={
              <Suspense>
                <LazyProjectsPage />
              </Suspense>
            }
          />
          <Route
            path="/Packs"
            element={
              <Suspense>
                <LazyPacksPage />
              </Suspense>
            }
          />
          <Route
            path="/Contacto"
            element={
              <Suspense>
                <LazyContactPage />
              </Suspense>
            }
          />
          <Route
            path="/Gracias"
            element={
              <Suspense>
                <LazyGuideCalendlyPage />
              </Suspense>
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
