import "./styles.css";
import Ads from "../../Assets/sponsors_v2/one.jpg";

interface Props {
  className: string;
}

const Slide = (props: Props) => {
  return (
    <div className={`${props.className} slider_flex`}>
      <div>
        <img src={Ads} />
      </div>
    </div>

  )
}

export { Slide }
