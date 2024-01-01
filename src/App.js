import './App.css';
import { Routes, Route } from "react-router-dom"
import Coins from './components/Coins';
import CoinDetails from './components/CoinDetails';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Coins/>}  />
     
      <Route path='/coins/:id' element={<CoinDetails/>} />
    </Routes>
  );
}

export default App;