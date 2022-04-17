import "./styles.css"
import Banner from "../../Assets/bannerTop/home_v3.png"

interface Props {
  className: string;
}

const BannerTop = (props: Props) => {
  return (
    <div className={`${props.className} banner_container_flex`}>
      <div className="banner_flex_item">
        <span className="banner_btn_back">BACK</span>
        <img src={Banner} alt="" />
      </div>
    </div>
  )
}

export { BannerTop }
