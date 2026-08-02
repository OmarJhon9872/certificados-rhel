import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>Página no encontrada (404)</title>
        <meta name="description" content="La página que buscas no existe. Vuelve al inicio del portafolio." />
        <meta name="robots" content="noindex" />
        <link rel="canonical" href="/404" />
        <meta property="og:title" content="Página no encontrada" />
        <meta property="og:description" content="La página que buscas no existe." />
        <meta property="og:url" content="/404" />
      </Helmet>
      <div className="flex min-h-screen items-center justify-center bg-muted">
        <main className="text-center">
          <h1 className="mb-4 text-4xl font-bold">404</h1>
          <p className="mb-4 text-xl text-muted-foreground">Página no encontrada</p>
          <a href="/" className="text-primary underline hover:text-primary/90">
            Volver al inicio
          </a>
        </main>
      </div>
    </>
  );
};

export default NotFound;
