import './App.css';
import { Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import Add from './components/Add';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
   return (
      <>
      <Routes>
         <Route element={<Header />}>
            <Route path="/register" element={<Register />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/" element={<Home />}/>
            <Route path="/add" element={<Add />}/>
          </Route>      
      </Routes>
      <Footer />
      </>
   );
}

export default App;
