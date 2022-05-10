import "./styles.css";

import Speakers from "../../Assets/icons/white/speakers.svg";
import Schedules from "../../Assets/icons/white/schedule.svg";
import Exhibitors from "../../Assets/icons/white/exhibitors.svg";
import Features from "../../Assets/icons/white/features.svg";
import Competitors from "../../Assets/icons/white/competitors.svg";
import Events from "../../Assets/icons/white/events.svg";
import { FC, useEffect, useState } from "react";

interface Props {
  className: string;
  activedMenu(active: boolean, chosen: string): void;
}

const InitialMenu: FC<Props> = (props: Props) => {
  const [active, setActive] = useState<boolean>(true);

  const menu = (chosen: string): void => {
    props.activedMenu(active, chosen);
  }

  useEffect(() => {
    setActive(false)
  }, [active]);

  return (
    <div className={`${props.className} initialmenu_container_flex`}>

      <div className="initialmenu_flex initialmenu_speakers_flex">
        <div className="initialmenu" onClick={() => menu("speakers")}>
          <div className="icon">
            <img src={Speakers} />
          </div>
          <div>
            <h1>SPEAKERS</h1>
          </div>
        </div>
      </div>
      <div className="initialmenu_flex initialmenu_schedule_flex">
        <div className="initialmenu" onClick={() => menu("schedule")}>
          <div className="icon">
            <img src={Schedules} />
          </div>
          <div>
            <h1>SCHEDULE</h1>
          </div>
        </div>
      </div>
      <div className="initialmenu_flex initialmenu_exhibitors_flex">
        <div className="initialmenu" onClick={() => menu("contest")}>
          <div className="icon">
            <img src={Exhibitors} />
          </div>
          <div>
            <h1>CONTEST</h1>
          </div>
        </div>
      </div>
      <div className="initialmenu_flex initialmenu_features_flex">
        <div className="initialmenu" onClick={() => menu("features")}>
          <div className="icon">
            <img src={Features} />
          </div>
          <div>
            <h1>FEATURES</h1>
          </div>
        </div>
      </div>
      <div className="initialmenu_flex initialmenu_competitions_flex">
        <div className="initialmenu" onClick={() => menu("competitors")}>
          <div className="icon">
            <img src={Competitors} />
          </div>
          <div>
            <h1>COMPETITIONS</h1>
          </div>
        </div>
      </div>
      <div className="initialmenu_flex initialmenu_events_flex">
        <div className="initialmenu" onClick={() => menu("events")}>
          <div className="icon">
            <img src={Events} />
          </div>
          <div>
            <h1>EVENTS</h1>
          </div>
        </div>
      </div>

    </div>
  )
}

export { InitialMenu }
