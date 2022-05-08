import "./styles.css"
import Rcvideo from "../../Assets/video/RcShowRevival_SkipRcShowFlag.mp4"

interface Props {
  className: string;
}

const VideoClip = (props: Props) => {
  return (
    <div className={`${props.className} videoclip_container_flex`}>
      <div>
        <video width="100" height="auto" controls={true}>
          <source src={Rcvideo} type="video/mp4" />
        </video>
      </div>
    </div>
  )
}

export { VideoClip }
