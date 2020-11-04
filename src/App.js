import { BrowserRouter } from "react-router-dom";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
    return (
        <div className="main__container">
            <BrowserRouter>
                <a href="#home" className="scroll_to_top">
                    <span>
                        <i className="fas fa-chevron-up"></i>
                    </span>
                </a>
                <Navbar />
                <Body />
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
