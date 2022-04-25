import { FC, useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { BannerTop } from '../BannerTop'
import { Footer } from '../Footer'
import { InitialMenu } from '../InitialMenu'
import { SecondMenu } from '../SecondMenu'
import { Events } from '../SecondMenu/Components/Events'
import { Schedule } from '../SecondMenu/Components/Schedule'
import { Speakers } from '../SecondMenu/Components/Speakers'
import { Slide } from '../Slider'
import { VideoClip } from '../VideoClip'
import './styles.css'

const MainContainer: FC = () => {
  const [active, setActive] = useState<boolean>(true);
  const [mchosen, setMchosen] = useState<string>("");

  const mediaQuery = useMediaQuery({
    minHeight: 900
  })

  const secondMenuActive = (menuActive: boolean, menuChosen?: string): void => {
    setActive(menuActive);
    setMchosen(menuChosen!);
  }

  useEffect(() => {
  }, [mchosen])

  return (
    <div className="container_grid">
      <BannerTop className="grid" activedMenu={secondMenuActive} activity={active} />
      {active && <VideoClip className="grid" />}
      {active && <InitialMenu className="grid" activedMenu={secondMenuActive} />}
      {!active && <SecondMenu className="grid" activedMenu={secondMenuActive} menuChosen={mchosen} />}
      {mchosen === "speakers" && <Speakers className="grid"/>}
      {mchosen === "schedule" && <Schedule className="grid" />}
      {mchosen === "events" && <Events className="grid" />}
      <Slide className="grid" />
      <Footer className="grid" />
    </div >
  )
}

export { MainContainer }
