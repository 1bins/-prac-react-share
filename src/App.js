import {Routes, Route} from 'react-router-dom';
import './App.css';
import Home from "./pages/Home";
import SnsShare from "./pages/SnsShare";

function App() {
  return (
    <Routes>
      <Route path={'/'} element={<Home />}></Route>
      <Route path={'/share'} element={<SnsShare />}></Route>
    </Routes>
  );
}

export default App;
