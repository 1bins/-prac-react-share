import {Routes, Route} from 'react-router-dom';
import './App.css';
import Home from "./pages/Home";
import Kakao from "./pages/Kakao";

function App() {
  return (
    <Routes>
      <Route path={'/'} element={<Home />}></Route>
      <Route path={'/kakao'} element={<Kakao />}></Route>
    </Routes>
  );
}

export default App;
