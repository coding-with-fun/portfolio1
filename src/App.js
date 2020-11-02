import { BrowserRouter } from "react-router-dom";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
    return (
        <div className="main__container">
            <BrowserRouter>
                <Navbar />
                <Body />
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
