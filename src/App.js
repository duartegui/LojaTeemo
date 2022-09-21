import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/static/Navbar/Navbar';
import Home from './pages/Home/Home';
import './pages/Produtos/Produtos';
import './pages/CadastrarProdutos/CadastrarProdutos';
import './pages/SobreNos/SobreNos';
import './components/static/Footer/Footer';

function App() {
  return (
   
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        {/* <Route path='/produtos' element={<Produtos/>}/>
        <Route path='/sobrenos' element={<SobreNos/>}/>
        <Route path='/cadastrarprodutos' element={<CadastrarProdutos/>}/> */}
      </Routes>
      {/* <Footer/> */}
    </Router>
  );
}

export default App;
