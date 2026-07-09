import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/Editar/:id" elemen={<Editar />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
