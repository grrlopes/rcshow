import { FC, Fragment, useState } from "react";
import Modal from "react-modal";

import "./styles.css";

import FoodTruck from "../../../../../../Assets/feature/features/modal/01-The-Food-Truck'N-Experience.jpg"
import PopUp from "../../../../../../Assets/feature/features/modal/00-Pop-up-Experience.jpg"
import Outdoor from "../../../../../../Assets/feature/features/modal/02-Outdoor-patio-Experience.jpg"
import Startup from "../../../../../../Assets/feature/features/modal/03-startup-lane.jpg"

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

const FeaturePaths: FC<Props> = (props: Props) => {
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
        props.page === 1 && <div className={`${props.className} featuremenucontents_container_flex`}>

          <div className="featuremenucontents" id="feature_1" onClick={() => openModal("foodtruck")}>
            <div>
              <h1>fOOD TRUCK'N EXPERIENCE</h1>
            </div>
          </div>
          <div className="featuremenucontents" id="feature_2" onClick={() => openModal("popup")}>
            <div>
              <h1>POP UP EXPERIENCE</h1>
            </div>
          </div>
          <div className="featuremenucontents" id="feature_3" onClick={() => openModal("outdoor")}>
            <div>
              <h1>OUTDOOR PATIO EXPERIENCE</h1>
            </div>
          </div>
          <div className="featuremenucontents" id="feature_4" onClick={() => openModal("startup")}>
            <div>
              <h1>START UP LANE</h1>
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
                  {modalType === "foodtruck" && <img src={FoodTruck} alt="" />}
                  {modalType === "popup" && <img src={PopUp} alt="" />}
                  {modalType === "outdoor" && <img src={Outdoor} alt="" />}
                  {modalType === "startup" && <img src={Startup} alt="" />}
                </div>
              </section>
            </div>
          </Modal>

        </div>
      }
    </Fragment>
  )
}

export { FeaturePaths }
