import "./styles.css"

import Right_ from "../../../../Assets/images/right.png"
import Left_ from "../../../../Assets/images/left.png"
import { useEffect, useState } from "react"

interface Props {
  className: string
}

const Contest = (props: Props) => {
  const [page, setPage] = useState<number>(1)
  const [totalPage, setTotalPage] = useState<number>(2)

  const pageAhead = (position: number): void => {
    setPage(page + position)
  }

  const pageBack = (position: number): void => {
    setPage(page - position)
  }

  useEffect(() => {
  }, [totalPage])

  return (
    <div>

      <div className="topcontest_container_flex">
        <div className="topcontestcontents_header">
          <div className="topcontest_red">
            <h1>RC CONTEST</h1>
          </div>
        </div>
      </div>
      <div className="contestmenu_container_grid holdcontestcontent ">
        <div className="contest_grid">

          {
            page === 1 && <div className={`${props.className} contestmenucontents_container_flex`}>
              <div className="contestmenucontents" id="contest_1">
                <div>
                  <h1>Prince Edward County Experience</h1>
                </div>
              </div>

              <div className="contestmenucontents" id="contest_2">
                <div>
                  <h1>KitchenAid Blender</h1>
                </div>
              </div>

              <div className="contestmenucontents" id="contest_3">
                <div>
                  <h1>Bunn Home Coffee Maker</h1>
                </div>
              </div>

              <div className="contestmenucontents" id="contest_4">
                <div>
                  <h1>Key to the City Vip Experience at Budwiser Stage Lake House</h1>
                </div>
              </div>

            </div>
          }


          {
            page === 2 && < div className={`${props.className} contestmenucontents_container_flex`}>
              <div className="contestmenucontents" id="contest_5">
                <div>
                  <h1>$500 Restogreen Membership</h1>
                </div>
              </div>
              <div className="contestmenucontents" id="contest_6">
                <div>
                  <h1>
                    VIREOO Pro Safe Touch Heater by Mensa Heating.
                  </h1>
                </div>
              </div>
            </div>

          }

        </div>

        <div className="contest_grid contestleft">
          {page >= totalPage && <div onClick={() => pageBack(1)}>
            <img src={Left_} alt="" />
          </div>}
        </div>
        <div className="contest_grid contestright">
          {page < totalPage && <div onClick={() => pageAhead(1)}>
            <img src={Right_} alt="" />
          </div>}
        </div>

      </div>
    </div >
  )
}

export { Contest }
