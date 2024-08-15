import home1 from "../mocks/home1.png";
import detail1 from "../mocks/detail1.png";
import detail2 from "../mocks/detail2.png";
import detail3 from "../mocks/detail3.png";
import home6 from "../mocks/home6.png";

function Detail() {
    return (
        <div>
          <img src={home1} alt="home1" />
          <img src={detail1} alt="detail1" />
          <img src={detail2} alt="detail1" />
          <img src={detail3} alt="detail1" />
          <img src={home6} alt="home1" />
        </div>
    )
}

export default Detail;