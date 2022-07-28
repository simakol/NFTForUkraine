import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import App from "./App";
import Page404 from "./pages/404";
import MainPage from "./pages/main";

export default function AppRoutes() {
  return (
    <App>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Router>
    </App>
  );
}
