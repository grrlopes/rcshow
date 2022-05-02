import { FC, Fragment, useState } from "react";
import Modal from "react-modal";

import "./styles.css";

import Beverage from "../../../../../../Assets/details_2/Bar-beverage.jpg";
import Canada from "../../../../../../Assets/details_2/CANADA.jpg";
import Coffee from "../../../../../../Assets/details_2/coffee-tea-sweets.jpg";
import Eco from "../../../../../../Assets/details_2/ECO.jpg";

import Ontario from "../../../../../../Assets/details_2/ONTARIO.jpg";
import Restaurant from "../../../../../../Assets/details_2/restaurant_canada.jpg";
import Tech from "../../../../../../Assets/details_2/TECH.jpg";
import World from "../../../../../../Assets/details_2/world.jpg";

interface Props {
  className: string;
  page: number;
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

const PavilionPaths: FC<Props> = (props: Props) => {
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [modalType, setModalType] = useState<string>("");

  function openModal(modal: string) {
    setIsOpen(true);
    setModalType(modal);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <Fragment>
      {
        props.page === 1 && <div className={`${props.className} pavilionmenucontents_container_flex`}>
          <div className="pavilionmenucontents" id="pavilion_1" onClick={() => openModal("beverage")}>
            <div>
              <h1>BAR & BEVERAGE</h1>
            </div>
          </div>

          <div className="pavilionmenucontents" id="pavilion_2" onClick={() => openModal("canada")}>
            <div>
              <h1>CANADA</h1>
            </div>
          </div>
          <div className="pavilionmenucontents" id="pavilion_3" onClick={() => openModal("coffee")}>
            <div>
              <h1>COFFEE, TEA & SWEETS</h1>
            </div>
          </div>

          <div className="pavilionmenucontents" id="pavilion_4" onClick={() => openModal("eco")}>
            <div>
              <h1>ECO</h1>
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
                  {modalType === "beverage" && <img src={Beverage} alt="" />}
                  {modalType === "canada" && <img src={Canada} alt="" />}
                  {modalType === "coffee" && <img src={Coffee} alt="" />}
                  {modalType === "eco" && <img src={Eco} alt="" />}
                </div>
              </section>
            </div>
          </Modal>

        </div>
      }
      {
        props.page === 2 && <div className={`${props.className} pavilionmenucontents_container_flex`}>

          <div className="pavilionmenucontents" id="pavilion_5" onClick={() => openModal("ontario")}>
            <div>
              <h1>ONTARIO</h1>
            </div>
          </div>

          <div className="pavilionmenucontents" id="pavilion_6" onClick={() => openModal("restaurants")}>
            <div>
              <h1>RESTAURANTS CANADA</h1>
            </div>
          </div>

          <div className="pavilionmenucontents" id="pavilion_7" onClick={() => openModal("tech")}>
            <div>
              <h1>TECH</h1>
            </div>
          </div>

          <div className="pavilionmenucontents" id="pavilion_8" onClick={() => openModal("world")}>
            <div>
              <h1>WORLD</h1>
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
                  {modalType === "ontario" && <img src={Ontario} alt="" />}
                  {modalType === "restaurants" && <img src={Restaurant} alt="" />}
                  {modalType === "tech" && <img src={Tech} alt="" />}
                  {modalType === "world" && <img src={World} alt="" />}
                </div>
              </section>
            </div>
          </Modal>

        </div>
      }
    </Fragment>
  )
}

export { PavilionPaths }
