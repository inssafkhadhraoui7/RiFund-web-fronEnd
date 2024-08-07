import React, { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Home from './pages/Home';
import Contact from './pages/contact';
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ForgetPassword from "./pages/ForgetPassword";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "RiFund";
        metaDescription = "Welcome to the Home Page";
        break;
      case "/home":
        title = "Home Page";
        metaDescription = "Welcome to the Home Page";
        break;
        case "/contact":
          title = "Contact Page";
          metaDescription = "Welcome to the Contact Page";
          break;
          case "/login":
            title = "Se connecter Page";
            metaDescription = "Welcome to these login  Page";
            break;
            case "/register":
              title = "S'inscrire Page";
              metaDescription = "Welcome to these register Page";
              break;
              case "/password":
              title = "password Page";
              metaDescription = "Welcome to these forget Page";
              break;
      default:
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Contact />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/password" element={<ForgetPassword />} />
      </Routes>
    </div>
  );
}

export default App;
