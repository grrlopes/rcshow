import { BannerTop } from '../BannerTop'
import { InitialMenu } from '../InitialMenu'
import { Slide } from '../Slider'
import { VideoClip } from '../VideoClip'
import './styles.css'

const MainContainer = () => {
  return (
    <div className="container_grid">
      <BannerTop className="grid" />
      <VideoClip className="grid" />
      <InitialMenu className="grid" />
      <Slide className="grid" />
    </div>
  )
}

export { MainContainer }
