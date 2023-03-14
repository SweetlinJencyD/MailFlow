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
import Send from "./pages/Send";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <div className='container'>
          <Sidebar />
          <section class='home'>
            <Send />
          </section>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
