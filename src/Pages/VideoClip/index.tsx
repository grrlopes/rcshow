import "./styles.css"

interface Props {
  className: string;
}

const VideoClip = (props: Props) => {
  return (
    <div className={`${props.className} videoclip_container_flex`}>
      <div>
        <video height="380" loop preload="auto">
          <source src="/src/Assets/video/rcshow-video.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  )
}

export { VideoClip }
