import "./styles.css"

import Adam from "../../../../Assets/speakers_v2/adam-teolis-circle.jpg";

interface Props {
  className: string;
}

const Speakers = (props: Props) => {
  return (
    <div>
      <div className="topheader">
        <div>
          <h1>Speakers</h1>
        </div>
      </div>
      <div className={`${props.className} speakerscontents_container_flex holdcontent`}>

        <div className="speakerscontents">
          <div>
            <img src={Adam} alt="" />
          </div>
          <div>
            <h1>adam teolis</h1>
          </div>
          <div>
            <p>founder & ceo, chefdrop</p>
          </div>
        </div>

        <div className="speakerscontents">
          <div>
            <img src={Adam} alt="" />
          </div>
          <div>
            <h1>adam teolis</h1>
          </div>
          <div>
            <p>founder & ceo, chefdrop</p>
          </div>
        </div>

        <div className="speakerscontents">
          <div>
            <img src={Adam} alt="" />
          </div>
          <div>
            <h1>adam teolis</h1>
          </div>
          <div>
            <p>founder & ceo, chefdrop</p>
          </div>
        </div>

        <div className="speakerscontents">
          <div>
            <img src={Adam} alt="" />
          </div>
          <div>
            <h1>adam teolis</h1>
          </div>
          <div>
            <p>founder & ceo, chefdrop</p>
          </div>
        </div>

        <div className="speakerscontents">
          <div>
            <img src={Adam} alt="" />
          </div>
          <div>
            <h1>adam teolis</h1>
          </div>
          <div>
            <p>founder & ceo, chefdrop</p>
          </div>
        </div>

        <div className="speakerscontents">
          <div>
            <img src={Adam} alt="" />
          </div>
          <div>
            <h1>adam teolis</h1>
          </div>
          <div>
            <p>founder & ceo, chefdrop</p>
          </div>
        </div>

        <div className="speakerscontents">
          <div>
            <img src={Adam} alt="" />
          </div>
          <div>
            <h1>adam teolis</h1>
          </div>
          <div>
            <p>founder & ceo, chefdrop</p>
          </div>
        </div>

        <div className="speakerscontents">
          <div>
            <img src={Adam} alt="" />
          </div>
          <div>
            <h1>adam teolis</h1>
          </div>
          <div>
            <p>founder & ceo, chefdrop</p>
          </div>
        </div>

        <div className="speakerscontents">
          <div>
            <img src={Adam} alt="" />
          </div>
          <div>
            <h1>adam teolis</h1>
          </div>
          <div>
            <p>founder & ceo, chefdrop</p>
          </div>
        </div>

        <div className="speakerscontents">
          <div>
            <img src={Adam} alt="" />
          </div>
          <div>
            <h1>adam teolis</h1>
          </div>
          <div>
            <p>founder & ceo, chefdrop</p>
          </div>
        </div>

        <div className="speakerscontents">
          <div>
            <img src={Adam} alt="" />
          </div>
          <div>
            <h1>adam teolis</h1>
          </div>
          <div>
            <p>founder & ceo, chefdrop</p>
          </div>
        </div>

        <div className="speakerscontents">
          <div>
            <img src={Adam} alt="" />
          </div>
          <div>
            <h1>adam teolis</h1>
          </div>
          <div>
            <p>founder & ceo, chefdrop</p>
          </div>
        </div>

        <div className="speakerscontents">
          <div>
            <img src={Adam} alt="" />
          </div>
          <div>
            <h1>adam teolis</h1>
          </div>
          <div>
            <p>founder & ceo, chefdrop</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export { Speakers }
