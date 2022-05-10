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
  activedMenu(active: boolean, menuChosen: string): void;
  menuChosen: string;
}

const SecondMenu: FC<Props> = (props: Props) => {
  const [active, setActive] = useState<boolean>(false);
  const [mChosen, setChosen] = useState<string>(props.menuChosen);

  const menu = (chosen: string): void => {
    setChosen(chosen)
    props.activedMenu(active, chosen)
  }

  useEffect(() => {
  }, [mChosen])

  return (
    <div className={`${props.className} secondmenu_container_flex`}>

      <div className="secondmenu_flex secondmenu_speakers_flex">
        <div className={`${props.menuChosen === "speakers" ? "secondmenu_red icon_beat" : "secondmenu"}`} onClick={() => menu("speakers")}>
          <div className="icon">
            <img src={Speakers} />
          </div>
          <div>
            <h1>SPEAKERS</h1>
          </div>
        </div>
      </div>
      <div className="secondmenu_flex secondmenu_schedule_flex">
        <div className={`${props.menuChosen === "schedule" ? "secondmenu_red icon_beat" : "secondmenu"}`} onClick={() => menu("schedule")}>
          <div className="icon">
            <img src={Schedules} />
          </div>
          <div>
            <h1>SCHEDULE</h1>
          </div>
        </div>
      </div>
      <div className="secondmenu_flex secondmenu_exhibitors_flex">
        <div className={`${props.menuChosen === "contest" ? "secondmenu_red icon_beat" : "secondmenu"}`} onClick={() => menu("contest")}>
          <div className="icon">
            <img src={Exhibitors} />
          </div>
          <div>
            <h1>CONTEST</h1>
          </div>
        </div>
      </div>
      <div className="secondmenu_flex secondmenu_features_flex">
        <div className={`${props.menuChosen === "features" ? "secondmenu_red icon_beat" : "secondmenu"}`} onClick={() => menu("features")}>
          <div className="icon">
            <img src={Features} />
          </div>
          <div>
            <h1>FEATURES</h1>
          </div>
        </div>
      </div>
      <div className="secondmenu_flex secondmenu_competitions_flex">
        <div className={`${props.menuChosen === "competitors" ? "secondmenu_red icon_beat" : "secondmenu"}`} onClick={() => menu("competitors")}>
          <div className="icon">
            <img src={Competitors} />
          </div>
          <div>
            <h1>COMPETITIONS</h1>
          </div>
        </div>
      </div>
      <div className="secondmenu_flex secondmenu_events_flex">
        <div className={`${props.menuChosen === "events" ? "secondmenu_red icon_beat" : "secondmenu"}`} onClick={() => menu("events")}>
          <div className="icon">
            <img src={Events} />
          </div>
          <div>
            <h1>EVENTS</h1>
          </div>
        </div>
      </div>

    </div >
  )
}

export { SecondMenu }
