import { BrowserRouter } from "react-router-dom";

import Body from "./containers/Body";
import Footer from "./containers/Footer";
import Navbar from "./containers/Navbar";
import ScrollToTop from "./containers/ScrollToTop";

function App() {
    return (
        <div className="main__container">
            <BrowserRouter>
                <ScrollToTop />
                <Navbar />
                <Body />
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
