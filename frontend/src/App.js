import {
  Switch,
  Route,
  HashRouter,
  BrowserRouter,
  Routes,
} from "react-router-dom";

import "./App.css";
import "./styles/dashboard.css";

import Home from "./pages/Home";
import Send from "./pages/Mailer";
import Mailer from "./pages/Mailer";
import Groups from "./pages/Groups";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='login' element={<LoginPage />} />
          <Route path='register' element={<RegisterPage />} />
          <Route path='/' element={<Home />} />
          <Route path='mailer' element={<Mailer />} />
          <Route path='groups' element={<Groups />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
