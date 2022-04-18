import { useMediaQuery } from 'react-responsive'
import { BannerTop } from '../BannerTop'
import { Footer } from '../Footer'
import { InitialMenu } from '../InitialMenu'
import { Slide } from '../Slider'
import { VideoClip } from '../VideoClip'
import './styles.css'

const MainContainer = () => {

  const mediaQuery = useMediaQuery({
    minHeight: 900
  })

  return (
    <div className="container_grid">
      <BannerTop className="grid" />
      {mediaQuery && <VideoClip className="grid" />}
      <InitialMenu className="grid" />
      <Slide className="grid" />
      <Footer className="grid" />
    </div >
  )
}

export { MainContainer }
