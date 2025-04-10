import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./language-context";
import Header from "./components/Layout";
import Home from "./pages/Home";
import "./App.css";
import Error404 from "./pages/Error404";

function App() {
  
  return (
    <>
      <LanguageProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Header />}>
              <Route index element={<Home />} />
            </Route>
            <Route path="*" element={<Error404 />} />
          </Routes>
          <Routes></Routes>
        </BrowserRouter>
      </LanguageProvider>
    </>
  );
}

export default App;
