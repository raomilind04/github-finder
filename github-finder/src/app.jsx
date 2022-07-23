import {BrowserRouter as Router, Route, Routes} from "react-router-dom"; 
import {FaGithub} from "react-icons/fa"; 

import Navbar from "./components/layout/navbar";
import Footer from "./components/layout/footer";
import Home from "./pages/home";
import About from "./pages/about";
import NotFound from "./pages/notfound";

function App(){
    return(
        <Router>
            <div className="flex flex-col justify-between h-screen">
                <Navbar />
                <Routes>
                    <Route path="/" element= {<Home />} /> ; 
                    <Route path="/about" element= {<About />} /> ; 
                    <Route path="/notfound" element= {<NotFound />} /> ; 
                    <Route path="/*" element= {<NotFound />} /> ; 
                </Routes>
                <Footer />
            </div>
        </Router>
    )
}

export default App; 