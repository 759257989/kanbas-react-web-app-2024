import Labs from "./Labs";
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import Kanbas from "./Kanbas";
function App() {
  return (
    <HashRouter>
      <div className="App">
      <h1>WEB DEV cs 5610</h1>
      <h2>Yu Wang 2024 su2</h2>
      <h2><a href="https://github.com/759257989/kanbas-react-web-app-2024.git">Github</a></h2>
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="Labs" />} />
          <Route path="/Labs/*" element={<Labs />} />
          <Route path="/Kanbas/*" element={<Kanbas />} />
        </Routes>
      </div>
    </HashRouter>
  );
}
export default App;