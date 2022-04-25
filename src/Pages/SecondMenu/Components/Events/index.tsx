import { FC, useState } from "react";

import "./styles.css"

import RcAwards from "../../../../Assets/events/RCLeadership_10b.jpg"
import Breakfast from "../../../../Assets/events/RCLeadership_10b.jpg"
import OpeningNight from "../../../../Assets/events/RCLeadership_10b.jpg"
import IndustryNight from "../../../../Assets/events/RCLeadership_10b.jpg"

interface Props {
  className: string;
}

const Events: FC<Props> = (props: Props) => {
  const [week, setWeek] = useState("monday")

  const menu = (activeWeek: string): void => {
    setWeek(activeWeek)
  }

  console.log(props.className)

  return (
    <div>
      <div className="topevents_container_flex">
        <div className="topeventscontents_header">
          <div className="topevents_red">
            <h1>RC HOSPITALITY WEEKLY EVENTS</h1>
          </div>
          <div>
            <h2>
              Network with peers and make connections during RC hospitality
              week purchase yor ticket dusring registration
            </h2>
          </div>
        </div>
      </div>
      <div className={`${props.className} eventsmenucontents_container_flex holdeventscontent`}>

        <div className="eventsmenucontents" id="events_1">
          <div>
            <h1>RC AWARDS OF EXCELLENCE</h1>
          </div>
          <div>
            <p>MAY 9-11</p>
          </div>
        </div>

        <div className="eventsmenucontents" id="events_2">
          <div>
            <h1>BREAKFAST WITH CHAMPIONS</h1>
          </div>
          <div>
            <p>MAY 11</p>
          </div>
        </div>

        <div className="eventsmenucontents" id="events_3">
          <div>
            <h1>OPENING NIGHT RECEPTION</h1>
          </div>
          <div>
            <p>MAY 9</p>
          </div>
        </div>

        <div className="eventsmenucontents" id="events_4">
          <div>
            <h1>INDUSTRY NIGHT OUT</h1>
          </div>
          <div>
            <p>MAY 10</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export { Events }
