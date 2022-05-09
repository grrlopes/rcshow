import "./styles.css";

import One from "../../Assets/sponsors_v2/one.jpg";
import Two from "../../Assets/sponsors_v2/two.jpg";
import Three from "../../Assets/sponsors_v2/three.jpg";
import Four from "../../Assets/sponsors_v2/four.jpg";
import Five from "../../Assets/sponsors_v2/five.jpg";
import Six from "../../Assets/sponsors_v2/six.jpg";
import Seven from "../../Assets/sponsors_v2/seven.jpg";
import Eight from "../../Assets/sponsors_v2/eight.jpg";
import Nine from "../../Assets/sponsors_v2/nine.jpg";
import Ten from "../../Assets/sponsors_v2/ten.jpg";
import Eleven from "../../Assets/sponsors_v2/eleven.jpg";
import Twelve from "../../Assets/sponsors_v2/twelve.jpg";
import Thirteen from "../../Assets/sponsors_v2/thirteen.jpg";

//import Fourteen from "../../Assets/sponsors_v2/Spin To Win_Mobile_Banner v1.jpg";
//import Fiftheen from "../../Assets/sponsors_v2/SPK_Mobile_Banner v1.jpg";
//import Sixtheen from "../../Assets/sponsors_v2/SPK_Mobile_Banner v2.jpg";

import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';

interface Props {
  className: string;
}

const Slide = (props: Props) => {
  return (
    <div className={`${props.className} slider_flex`}>
      <Carousel
        autoPlay={true}
        interval={1350}
        infiniteLoop={true}
        showThumbs={false}
        showIndicators={false}
        swipeable={false}
        showStatus={false}
      >
        <div>
          <img src={One} />
        </div>
        <div>
          <img src={Two} />
        </div>
        <div>
          <img src={Three} />
        </div>
        <div>
          <img src={Four} />
        </div>
        <div>
          <img src={Five} />
        </div>
        <div>
          <img src={Six} />
        </div>
        <div>
          <img src={Seven} />
        </div>
        <div>
          <img src={Eight} />
        </div>
        <div>
          <img src={Nine} />
        </div>
        <div>
          <img src={Ten} />
        </div>
        <div>
          <img src={Eleven} />
        </div>
        <div>
          <img src={Twelve} />
        </div>
        <div>
          <img src={Thirteen} />
        </div>

      </Carousel>
    </div>

  )
}

export { Slide }
