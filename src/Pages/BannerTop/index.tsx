import "./styles.css"
import Banner from "../../Assets/bannerTop/home_v3.png"
import { useState } from "react";

interface Props {
  className: string;
  activedMenu(active: boolean): void;
  activity: boolean;
}

const BannerTop = (props: Props) => {
  const [active, setActive] = useState<boolean>(props.activity);

  const menu = (): void => {
    props.activedMenu(active);
  }

  return (
    <div className={`${props.className} banner_container_flex`}>
      <div className="banner_flex_item" >
        {true && <h1 className="banner_btn_back" onClick={() => menu()}>BACK</h1>}
        <img src={Banner} alt="" />
      </div>
    </div>
  )
}

export { BannerTop }
