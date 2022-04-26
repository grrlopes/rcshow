import { FC, useState } from "react";
import Modal from "react-modal";

import "./styles.css"

import RcAwards from "../../../../Assets/eventpdf_v2/rc-awards.jpg"
import Breakfast from "../../../../Assets/eventpdf_v2/breakfast-with-champions.jpg"
import OpeningNight from "../../../../Assets/eventpdf_v2/opening-night.jpg"
import IndustryNight from "../../../../Assets/eventpdf_v2/industry-night-out.jpg"

interface Props {
  className: string;
}

const modalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
}

const Events: FC<Props> = (props: Props) => {
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [modalType, setModalType] = useState<string>("");

  function openModal(modal: string) {
    setIsOpen(true);
    setModalType(modal)
  }

  function closeModal() {
    setIsOpen(false)
  }

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
        <div className="eventsmenucontents" id="events_1" onClick={() => openModal("rcawards")}>
          <div>
            <h1>RC AWARDS OF EXCELLENCE</h1>
          </div>
          <div>
            <p>MAY 9-11</p>
          </div>
        </div>

        <div className="eventsmenucontents" id="events_2" onClick={() => openModal("breakfast")}>
          <div>
            <h1>BREAKFAST WITH CHAMPIONS</h1>
          </div>
          <div>
            <p>MAY 11</p>
          </div>
        </div>

        <div className="eventsmenucontents" id="events_3" onClick={() => openModal("openingnight")}>
          <div>
            <h1>OPENING NIGHT RECEPTION</h1>
          </div>
          <div>
            <p>MAY 9</p>
          </div>
        </div>

        <div className="eventsmenucontents" id="events_4" onClick={() => openModal("industrynight")}>
          <div>
            <h1>INDUSTRY NIGHT OUT</h1>
          </div>
          <div>
            <p>MAY 10</p>
          </div>
        </div>
        <Modal
          onRequestClose={closeModal}
          preventScroll={false}
          style={modalStyles}
          isOpen={modalIsOpen}
          ariaHideApp={false}
        >
          <div className="eventModal">
            <div className="eventModal_btn">
              <div>
                <button onClick={() => closeModal()}>close</button>
              </div>
            </div>
            <section>
              <div>
                {modalType === "rcawards" && <img src={RcAwards} alt="" />}
                {modalType === "breakfast" && <img src={Breakfast} alt="" />}
                {modalType === "openingnight" && <img src={OpeningNight} alt="" />}
                {modalType === "industrynight" && <img src={IndustryNight} alt="" />}
              </div>
            </section>
          </div>
        </Modal>

      </div>
    </div>
  )
}

export { Events }
