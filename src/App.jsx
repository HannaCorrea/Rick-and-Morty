import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/home.jsx";
import DetailCharacter from "./Pages/DetailCharacter/detailCharacter";
import LocationsDetailPage from "./Components/LocationDetailPage/locationsDetailPage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/character/:characterId" element={<DetailCharacter />} />
        <Route path="/location/:locationId" element={<LocationsDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
