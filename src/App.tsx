import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./language-context";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import "./App.css";
import Error404 from "./pages/Error404";

function App() {
  return (
    <>
      <LanguageProvider>
        <div className="flex min-h-screen flex-col">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
              </Route>
              <Route path="*" element={<Error404 />} />
            </Routes>
            <Routes></Routes>
          </BrowserRouter>
        </div>
      </LanguageProvider>
    </>
  );
}

export default App;
