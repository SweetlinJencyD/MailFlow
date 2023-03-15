import {
  Switch,
  Route,
  HashRouter,
  BrowserRouter,
  Routes,
} from "react-router-dom";

import "./App.css";
import "./styles/dashboard.css";

import Sidebar from "./components/sidebar/Sidebar";
import Send from "./pages/Mailer";
import Navbar from "./components/navbar/Navbar";
import Mailer from "./pages/Mailer";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <div className='container'>
          <Sidebar />
          <Navbar />
          <section className='home'>
            <div style={{ marginTop: "100px" }}>
              <Routes>
                {/* <Route path='/' element={<Dashboard />} /> */}
                <Route path='mailer' element={<Mailer />} />
              </Routes>
            </div>
          </section>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
