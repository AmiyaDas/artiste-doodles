import home1 from "../mocks/home1.png";
import home2 from "../mocks/home2.png";
import home3 from "../mocks/home3.png";
import home4 from "../mocks/home4.png";
import home5 from "../mocks/home5.png";
import home6 from "../mocks/home6.png";
import Header from "../components/Header";

function Home() {
    return (
        <div>
            <Header />
          <img src={home1} alt="home1" />
          <img src={home2} alt="home1" />
          <img src={home3} alt="home1" />
          <img src={home4} alt="home1" />
          <img src={home5} alt="home1" />
          <img src={home6} alt="home1" />
            
        </div>
    )
}

export default Home;