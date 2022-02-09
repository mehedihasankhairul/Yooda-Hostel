import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import AddFood from './components/AddFood/AddFood';
import Navbar from './components/Shared/Navbar/Navbar';
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addfood" element={<AddFood />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
