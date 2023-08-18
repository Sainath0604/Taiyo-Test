import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactPage from "./components/ContactPage";
import AddContact from "./components/AddContact";
import ChartMaps from "./components/ChartsMaps";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<ContactPage />} />
            <Route path="/addContact" element={<AddContact />} />
            <Route path="/chartMaps" element={<ChartMaps />} />
          </Routes>
        </main>
        <footer></footer>
      </div>
    </Router>
  );
}

export default App;
