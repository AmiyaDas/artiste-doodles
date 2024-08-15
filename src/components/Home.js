import home2 from "../mocks/home2.png";
import home3 from "../mocks/home3.png";
import home4 from "../mocks/home4.png";
import home5 from "../mocks/home5.png";
import Header from "../components/Header";
import Menu from "./Menu";
import Footer from "./Footer";
import HomeCarousel from "./HomeCarousel";
import Offers from "./Offers";

function Home() {
    return (
        <div>
            <Header />
            <Menu />
            <HomeCarousel />
            <Offers />
            <img src={home4} alt="home1" />
            <img src={home5} alt="home1" />
            <Footer />
        </div>
    )
}

export default Home;