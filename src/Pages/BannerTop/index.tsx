import "./styles.css"
import Banner from "../../Assets/bannerTop/home_v3.png"
import { useEffect, useState } from "react";

interface Props {
  className: string;
  secondMenuActive(active: boolean): void;
  activity: boolean;
}

const BannerTop = (props: Props) => {
  const [active, setActive] = useState<boolean>(props.activity);

  const menu = (): void => {
    props.secondMenuActive(active);
  }

  return (
    <div className={`${props.className} banner_container_flex`}>
      <div className="banner_flex_item" >
        {!props.activity && <h1 className="banner_btn_back" onClick={() => menu()}>BACK</h1>}
        <img src={Banner} alt="" />
      </div>
    </div>
  )
}

export { BannerTop }
