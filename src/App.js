import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Primary from './components/PrimaryScreen/Primary';
import Secondary from './components/Secondary/Secondary';
import Header from './components/Header/Header';
import Congrats from "./components/Congratulations/Congrats";

function App() {
  return (
    <>
    <Routes>
    <Route path="/" element={<Header />}></Route>
      <Route path="/primary" element={<Primary />} />
      <Route path="/secondary" element={<Secondary />} />
      <Route path="/congrats" element={<Congrats />} />
    </Routes>
    <Congrats />
    </>
  );
}

export default App;
