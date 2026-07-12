import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Nav from "./Components/Layout/Nav";
import Footer from "./Components/Layout/Footer";
import Home from "./Components/pages/Home";
import NewProject from "./Components/pages/NewProject";
import Projetos from "./Components/pages/Projetos";
import Editar from "./Components/pages/Editar";

function App() {
  return (
    <div className="App">

      <Nav />

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Editar/:id" elemen={<Editar />} />
          <Route path="Projetos" element={<Projetos />} />
          <Route path="/NewProjetos" element={<NewProject />} />
        </Routes>
      </Router>

      <Footer />

    </div>
  );
}

export default App;
