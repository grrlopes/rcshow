import { FC, Fragment } from "react";

import "./styles.css";

interface Props {
  className: string;
  page: number;
}

const FeaturePaths: FC<Props> = (props: Props) => {
  return (
    <Fragment>
      {
        props.page === 1 && <div className={`${props.className} featuremenucontents_container_flex`}>
          <div className="featuremenucontents" id="feature_1">
            <div>
              <h1>GARLAND DISCOVERED CULINARY</h1>
            </div>
            <div>
              <p>MAY 9-11, 2022</p>
            </div>
          </div>

          <div className="featuremenucontents" id="feature_2">
            <div>
              <h1>BEYOND THE RAIL</h1>
            </div>
            <div>
              <p>MAY 9-11, 2022</p>
            </div>
          </div>

          <div className="featuremenucontents" id="feature_3">
            <div>
              <h1>SOMMELIER SERVICE COMPETITION</h1>
            </div>
            <div>
              <p>MAY 9-11, 2022</p>
            </div>
          </div>

          <div className="featuremenucontents" id="feature_4">
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
        props.page === 2 && < div className={`${props.className} featuremenucontents_container_flex`}>
          <div className="featuremenucontents" id="feature_1">
            <div>
              <h1>GARLAND DISCOVERED CULINARY</h1>
            </div>
            <div>
              <p>MAY 9-11, 2022</p>
            </div>
          </div>
        </div>
      }
    </Fragment>
  )
}

export { FeaturePaths }
