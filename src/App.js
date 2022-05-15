import './App.css';
import Home from './components/home/Home';
import { Routes, Route} from "react-router-dom";
import TourDetails from './components/TourDetails/TourDetails';
function App() {
  return (
    <>
   
    <Routes>
    <Route path='/item/:id'element={<TourDetails/>}/>
    <Route path='/'element={<Home/>}/>
    </Routes>
    
    </>
  );
}
export default App;