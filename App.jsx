import Navbar from "./elements/Navbar";
import About from "./pages/About"
import Contact from "./pages/Contact"
import Login from "./pages/Login"
import Cart from "./pages/Cart"
import Landing from "./pages/Landing"
import {Route,Routes} from "react-router-dom"
import Footer from "./elements/Footer"
import Register from "./pages/register"
import Prva from "./pages/c0"
import Druga from "./pages/c1"
import Treca from "./pages/c2"
import Cetvrta from "./pages/c3"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./styles.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-toastify/dist/ReactToastify.min.css';

function App(){
    return (<>
    <Navbar/>
    <ToastContainer></ToastContainer>
    <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/c0" element={<Prva/>}/>
        <Route path="/c1" element={<Druga/>}/>
        <Route path="/c2" element={<Treca/>}/>
        <Route path="/c3" element={<Cetvrta/>}/>
    </Routes>
    <Footer/>
    </>
    )
}
export default App;
