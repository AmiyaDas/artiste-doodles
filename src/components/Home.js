import Header from "../components/Header";
import Menu from "./Menu";
import Footer from "./Footer";
import HomeCarousel from "./HomeCarousel";
import Offers from "./Offers";
import Categories from "./Categories";

function Home() {
    return (
        <div>
            <Header />
            <Menu />
            <HomeCarousel />
            <Offers />
            <Categories />
            <Footer />
        </div>
    )
}

export default Home;