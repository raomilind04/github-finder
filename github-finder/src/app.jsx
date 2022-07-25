import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

import Navbar from "./components/layout/navbar";
import Footer from "./components/layout/footer";
import Home from "./pages/home";
import About from "./pages/about";
import NotFound from "./pages/notfound";
import User from "./pages/user"; 
import { GithubProvider } from "./components/context/github/githubContext";
import { AlertProvider } from "./components/context/alert/alertContext";
import Alert from "./components/layout/alert";

function App() {
  return (
    <GithubProvider>
      <AlertProvider>
        <Router>
          <div className="flex flex-col justify-between h-screen">
            <Navbar />
            <main className="container mx-auto px-3 pb-18">
              <Routes>
                <Route
                  path="/"
                  element={
                    <>
                      <Alert />
                      <Home />
                    </>
                  }
                />{" "}
                ;
                <Route path="/about" element={<About />} /> ;
                <Route path="/notfound" element={<NotFound />} /> ;
                <Route path= "/user/:login" element={<User />} />;  
                <Route path="/*" element={<NotFound />} /> ;
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </AlertProvider>
    </GithubProvider>
  );
}

export default App;
