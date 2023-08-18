import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactPage from "./components/ContactPage";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<ContactPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
