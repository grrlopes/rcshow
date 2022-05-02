import "./styles.css"

import Right_ from "../../../../Assets/images/right.png"
import Left_ from "../../../../Assets/images/left.png"
import { useEffect, useState } from "react"

interface Props {
  className: string
}

const Competitors = (props: Props) => {
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

      <div className="topcompetitors_container_flex">
        <div className="topcompetitorscontents_header">
          <div className="topcompetitors_red">
            <h1>RC COMPETITONS</h1>
          </div>
        </div>
      </div>
      <div className="competitorsmenu_container_grid holdcompetitorscontent ">
        <div className="competitors_grid">

          {
            page === 1 && <div className={`${props.className} competitorsmenucontents_container_flex`}>
              <div className="competitorsmenucontents" id="competitors_1">
                <div>
                  <h1>GARLAND DISCOVERED CULINARY</h1>
                </div>
                <div>
                  <p>MAY 9-11, 2022</p>
                </div>
              </div>

              <div className="competitorsmenucontents" id="competitors_2">
                <div>
                  <h1>BEYOND THE RAIL</h1>
                </div>
                <div>
                  <p>MAY 9-11, 2022</p>
                </div>
              </div>

              <div className="competitorsmenucontents" id="competitors_3">
                <div>
                  <h1>SOMMELIER SERVICE COMPETITION</h1>
                </div>
                <div>
                  <p>MAY 9-11, 2022</p>
                </div>
              </div>

              <div className="competitorsmenucontents" id="competitors_4">
                <div>
                  <h1>JOHN BIL OYESTER SHUCKING</h1>
                </div>
                <div>
                  <p>MAY 9-11, 2022</p>
                </div>
              </div>

            </div>
          }


          {
            page === 2 && < div className={`${props.className} competitorsmenucontents_container_flex`}>
              <div className="competitorsmenucontents" id="competitors_5">
                <div>
                  <h1>COFFEE IN GOOD SPIRITS</h1>
                </div>
                <div>
                  <p>MAY 9-11, 2022</p>
                </div>
              </div>
            </div>
          }

        </div>

        <div className="competitors_grid competitorsleft">
          {page >= totalPage && <div onClick={() => pageBack(1)}>
            <img src={Left_} alt="" />
          </div>}
        </div>
        <div className="competitors_grid competitorsright">
          {page < totalPage && <div onClick={() => pageAhead(1)}>
            <img src={Right_} alt="" />
          </div>}
        </div>

      </div>
    </div >
  )
}

export { Competitors }
