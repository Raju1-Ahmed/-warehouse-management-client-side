import logo from './logo.svg';
import './App.css';
import Header from './Pages/Header/Header';
import Footer from './Pages/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div className="App">
      <div>
        <Header></Header>
      <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/home" element={<Home />}></Route>
      </Routes>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
