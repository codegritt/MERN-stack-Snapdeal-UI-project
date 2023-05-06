import React from "react";
import Header2 from "./Header2";
import Header1 from "./Header1";
import HamburgerMenu from "./HamburgerMenu";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import ToggleCard from "./ToggleCard";
import FeedAPIstore from "./FeedAPIstore";
import FooterImage from "./FooterImage";
import Footer1 from "./Footer1";
import Footer2 from "./Footer2";
import Footer3 from "./Footer3";
import Footer4 from "./Footer4";
import AppHome from "./Home.module.css";
import App__body from "./Home.module.css";
import Main__body from "./Home.module.css";
import Footer__body from "./Home.module.css";

export default function Home() {
  return (
    <div className={AppHome.appHome}>
      <Header1 />
      <Header2 />
      <HamburgerMenu />

      <div className={App__body.app__body}>
        <Sidebar />
        <Feed />
        <ToggleCard />
      </div>
      <div className={Main__body.main__body}>
        <FeedAPIstore />
      </div>
      <div className={Footer__body.footer__body}>
        <FooterImage />
        <Footer1 />
        <Footer4 />
        <Footer2 />
        <Footer3 />
      </div>
    </div>
  );
}
