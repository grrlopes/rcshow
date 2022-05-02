import "./styles.css";

import Right_ from "../../../../Assets/images/right.png";
import Left_ from "../../../../Assets/images/left.png";
import { FC, useEffect, useState } from "react";
import { FeaturePaths } from "./Components/Feature";
import { PavilionPaths } from "./Components/Pavilion";


interface Props {
  className: string;
}

const Features: FC<Props> = (props: Props) => {
  const [page, setPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(1);
  const [paths, setPaths] = useState<string>("features");

  const pageAhead = (position: number): void => {
    setPage(page + position);
  }

  const pageBack = (position: number): void => {
    setPage(page - position);
  }

  const menu = (activePaths: string, position: number, pageTotal: number): void => {
    setPage(position);
    setTotalPage(pageTotal);
    setPaths(activePaths);
  }

  useEffect(() => {
  }, [totalPage])

  return (
    <div>
      <div className="topfeature_container_flex">
        <div className="topfeaturecontents_header">
          <div className="topfeature_red">
            <h1>FEATURES</h1>
          </div>
          <div className="topfeaturecontents_date">
            <div
              className={paths === "features" ? "topfeature_date_red" : ""}
              onClick={() => menu("features", 1, 1)}
            >
              <h1>FEATURES</h1>
            </div>
            <div
              className={paths === "pavilion" ? "topfeature_date_red" : ""}
              onClick={() => menu("pavilion", 1, 2)}
            >
              <h1>PAVILION</h1>
            </div>
          </div>
        </div>
      </div>
      <div className={`${props.className}`}>

        <div className="featuremenu_container_grid holdfeaturecontent">
          {paths === "features" && <FeaturePaths className={"feature_grid"} page={page} />}
          {paths === "pavilion" && <PavilionPaths className={"feature_grid"} page={page} />}

          <div className="feature_grid featureleft">
            {page > 1 && page <= totalPage && <div onClick={() => pageBack(1)}>
              <img src={Left_} alt="" />
            </div>}
          </div>
          <div className="feature_grid featureright">
            {page < totalPage && <div onClick={() => pageAhead(1)}>
              <img src={Right_} alt="" />
            </div>}
          </div>
        </div>

      </div>

    </div >
  )
}

export { Features }
