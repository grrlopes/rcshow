import { FC, useState } from "react";

import "./styles.css"

import Monday from "../../../../Assets/pdf_v2/monday.jpg";
import Tuesday from "../../../../Assets/pdf_v2/tuesday.jpg";
import Wednesday from "../../../../Assets/pdf_v2/wednesday.jpg";

interface Props {
  className: string;
}

const Schedule: FC<Props> = (props: Props) => {
  const [week, setWeek] = useState("monday")

  const menu = (activeWeek: string): void => {
    setWeek(activeWeek)
  }

  return (
    <div>
      <div className="topschedule_container_flex">
        <div className="topschedulecontents_header">
          <div>
            <h1>SCHEDULE</h1>
          </div>
          <div>
            <h2>Scroll to see event schedule</h2>
          </div>
        </div>
        <div className="topschedulecontents_date">
          <div
            className={week === "monday" ? "topschedule_date_red" : ""}
            onClick={() => menu("monday")}
          >
            <h1>MONDAY-MAY 9</h1>
          </div>
          <div
            className={week === "tuesday" ? "topschedule_date_red" : ""}
            onClick={() => menu("tuesday")}
          >
            <h1>TUESDAY-MAY 10</h1>
          </div>
          <div
            className={week === "wednesday" ? "topschedule_date_red" : ""}
            onClick={() => menu("wednesday")}
          >
            <h1>WEDNESDAY-MAY 11</h1>
          </div>
        </div>
      </div>
      <div className={`${props.className} schedulemenucontents_container_flex holdschedulecontent`}>

        <div className="schedulemenucontents">
          <div>
            {week === "monday" && <img src={Monday} alt="Monday" />}
            {week === "tuesday" && <img src={Tuesday} alt="Tuesday" />}
            {week === "wednesday" && <img src={Wednesday} alt="Wednesday" />}
          </div>
        </div>

      </div>
    </div>
  )
}

export { Schedule }
