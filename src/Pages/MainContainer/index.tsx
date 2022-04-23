import { FC, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { BannerTop } from '../BannerTop'
import { Footer } from '../Footer'
import { InitialMenu } from '../InitialMenu'
import { SecondMenu } from '../SecondMenu'
import { Speakers } from '../SecondMenu/Components/Speakers'
import { Slide } from '../Slider'
import { VideoClip } from '../VideoClip'
import './styles.css'

const MainContainer: FC = () => {
  const [active, setActive] = useState<boolean>(true);

  const mediaQuery = useMediaQuery({
    minHeight: 900
  })

  const secondMenuActive = (menuActive: boolean): void => {
    setActive(menuActive);
  }

  return (
    <div className="container_grid">
      <BannerTop className="grid" secondMenuActive={secondMenuActive} activity={active} />
      {active && <VideoClip className="grid" />}
      {active && <InitialMenu className="grid" secondMenuActive={secondMenuActive} />}
      {!active && <SecondMenu className="grid" secondMenuActive={secondMenuActive} buttonRed={true} />}
      {!active && <Speakers className="grid" />}
      <Slide className="grid" />
      <Footer className="grid" />
    </div >
  )
}

export { MainContainer }
