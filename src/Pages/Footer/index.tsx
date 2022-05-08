import "./styles.css"
import Bottom from "../../Assets/bannerTop/home_v3_revised.png"

interface Props {
  className: string;
}

const Footer = (props: Props) => {
  return (
    <div className={`${props.className} footer_container_flex`}>
      <div className="footer_flex_item">
        <img src={Bottom} alt="" />
      </div>
    </div>
  )
}

export { Footer }
