import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';

//Pages

import Home from './pages/Home';
import About from './pages/About';
import ArtiicleList from './pages/ArtiicleList';
import Article from './pages/Article';
import Navbar from './components/Navbar';

//Components
function App() {
  return (
    <Router>
      <Navbar></Navbar>
    <div className='max-w-screen-md mx-auto pt-20'>
      <Routes>
        <Route path ="/" element={<Home/>}/>
        <Route path ="/about" element={<About/>}/>
        <Route path ="/articles-list" element={<ArtiicleList/>}/>
        <Route path ="/article" element={<Article/>}/>
      </Routes>
     
    </div>
    </Router>
  );
}

export default App;
