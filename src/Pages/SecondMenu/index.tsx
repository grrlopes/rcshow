import "./styles.css";

import Speakers from "../../Assets/icons/white/speakers.svg";
import Schedules from "../../Assets/icons/white/schedule.svg";
import Exhibitors from "../../Assets/icons/white/exhibitors.svg";
import Features from "../../Assets/icons/white/features.svg";
import Competitors from "../../Assets/icons/white/competitors.svg";
import Events from "../../Assets/icons/white/events.svg";
import { FC, useState } from "react";

interface Props {
  className: string;
  secondMenuActive(active: boolean): void;
  buttonRed: boolean;
}

const SecondMenu: FC<Props> = (props: Props) => {
  const [active, setActive] = useState<boolean>(false);

  const menu = (): void => {
    props.secondMenuActive(active)
  }

  return (
    <div className={`${props.className} secondmenu_container_flex`}>

      <div className="secondmenu_flex secondmenu_speakers_flex">
        <div className={`${props.buttonRed ? "secondmenu_red icon_beat" : "secondmenu"}`}>
          <div className="icon">
            <img src={Speakers} />
          </div>
          <div>
            <h1 onClick={() => menu()}>speakers</h1>
          </div>
        </div>
      </div>
      <div className="secondmenu_flex secondmenu_schedule_flex">
        <div className="secondmenu">
          <div className="icon">
            <img src={Schedules} />
          </div>
          <div>
            <h1>schedule</h1>
          </div>
        </div>
      </div>
      <div className="secondmenu_flex secondmenu_exhibitors_flex">
        <div className="secondmenu">
          <div className="icon">
            <img src={Exhibitors} />
          </div>
          <div>
            <h1>exhibitors</h1>
          </div>
        </div>
      </div>
      <div className="secondmenu_flex secondmenu_features_flex">
        <div className="secondmenu">
          <div className="icon">
            <img src={Features} />
          </div>
          <div>
            <h1>features</h1>
          </div>
        </div>
      </div>
      <div className="secondmenu_flex secondmenu_competitions_flex">
        <div className="secondmenu">
          <div className="icon">
            <img src={Competitors} />
          </div>
          <div>
            <h1>competitions</h1>
          </div>
        </div>
      </div>
      <div className="secondmenu_flex secondmenu_events_flex">
        <div className="secondmenu">
          <div className="icon">
            <img src={Events} />
          </div>
          <div>
            <h1>events</h1>
          </div>
        </div>
      </div>

    </div >
  )
}

export { SecondMenu }