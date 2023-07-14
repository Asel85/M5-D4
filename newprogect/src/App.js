
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import BookDetail from './pages/BookDetail';


function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route exact path='/' element={<HomePage/>} />
    <Route path='/book/:bookId'element={<BookDetail/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App;
