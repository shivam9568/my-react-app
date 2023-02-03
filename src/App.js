import logo from './logo.svg';
import './App.css';
import Navbar from './Components/navbar';
import About from './Components/about';
import {
  createBrowserRouter,
  RouterProvider,
  Routes, Route, BrowserRouter
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
]);

function App() {
  return (
 <>
  <BrowserRouter>
<Navbar/>

 <Routes>
  
  <Route path="/" element={<div> hello</div>}/>
  <Route path="/about" element={<About/>}>
    
  </Route>



 </Routes>
 </BrowserRouter>

 </>
      );
      }

      export default App;
  
