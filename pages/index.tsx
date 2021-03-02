import { useEffect, useRef, useState } from "react";
import { TweenMax, Power3 } from "gsap";
import Link from "next/link";
import ScrollbarSize from "react-scrollbar-size";
import WorkPhone from "@/components/svgs/WorkPhone";
import WorkBrowser from "@/components/svgs/WorkBrowser";
import LogoDemo from "@/components/svgs/LogoDemo";
import ZfFont from "@/components/svgs/ZfFont";
import Hamburg from "@/components/svgs/Hamburg";
import BrainDance from "@/components/svgs/BrainDance";
import ProcessCard from "@/components/ProcessCard";

export default function Home() {
  const [scrollWidth, setScrollWidth] = useState("0");
  const [mobileMenu, setMobileMenu] = useState(false);

  let mobileMenuRef = useRef(null);

  const onScrollBarChange = ({ width }: any) => {
    setScrollWidth(width.toString() + "px");
  };
  var scrollStyle = { "--scrollbarWidth": scrollWidth } as React.CSSProperties;

  const onHamburg = () => {
    setMobileMenu(!mobileMenu);
  };

  const openMobileM = () => {
    TweenMax.to(mobileMenuRef, 0.3, {
      opacity: 1,
      zIndex: 100,
      ease: Power3.easeOut,
    });
    onHamburg();
  };

  const closeMobileM = () => {
    TweenMax.to(mobileMenuRef, 0.3, {
      opacity: 0,
      zIndex: 0,
      ease: Power3.easeOut,
    });
    onHamburg();
  };

  return (
    <>
      <ScrollbarSize onChange={onScrollBarChange} />

      <main className="ZRoot" style={scrollStyle}>
        <div className="ZMobileMenu" ref={(el: any) => (mobileMenuRef = el)}>
          <div className="ZMM--Header">
            <button
              className="ZMM--Close"
              onClick={mobileMenu ? closeMobileM : openMobileM}
            >
              X
            </button>
            <a className="ZMM--Services">Services</a>
            <a className="ZMM--Process">Process</a>
            <a className="ZMM--Works">Works</a>
          </div>
        </div>
        <div className="ZHeader--Container">
          <header className="ZHeader">
            <ZfFont />
            <div className="ZHeader--DesktopNav">
              <a className="DesktopNav--Item">Services</a>
              <a className="DesktopNav--Item">Process</a>
              <a className="DesktopNav--Item">Works</a>
            </div>
            <button className="ZHeader--Contact">Contact</button>
            <button
              className="ZHeader--Hamburg"
              onClick={mobileMenu ? closeMobileM : openMobileM}
            >
              <Hamburg />
            </button>
          </header>
        </div>
        <section className="ZHero--Container">
          <div className="ZHero--Grid">
            <div className="ZHero">
              <BrainDance />
            </div>
            <div className="ZHero--Text--Container">
              <h1 className="ZHero--Supertext">
                We build hand crafted experiences.
              </h1>
              <p className="ZHero--Subtext">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat
              </p>
              <div className="ZHero--ButtonBox">
                <button className="ZH--BB--Works">Works</button>
                <button className="ZH--BB--Contact">Contact</button>
              </div>
            </div>
          </div>
        </section>
        <section className="ZHow--Container">
          <div className="ZHow--Grid">
            <div className="ZHow--Text--Container">
              <h2 className="ZHow--Heading">
                A collaborative, metric-driven approach to UX.
              </h2>
              <p className="ZHow--Subheading">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
            </div>
            <div className="ZHow--Subgrid">
              <div className="ZHow--SG--Research">
                <h2>Research</h2>
                <p className="ZHow--SG--p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod ad minim veniam, quis nostrud exercitation
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat labore et dolore magna aliqua. nisi ut aliquip ex ea
                  commodo consequat Ut enim ad minim veniam, quis nostrud
                  exercitation.
                </p>
              </div>
              <div className="ZHow-SG--Build">
                <h2>Build</h2>
                <p className="ZHow--SG--p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod labore et dolore magna aliqua. nisi ut aliquip ex
                  ea commodo consequat Ut enim ad minim veniam, quis nostrud
                  exercitation quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat
                </p>
              </div>
              <div className="ZHow--SG--Test">
                <h2>Test</h2>
                <p className="ZHow--SG--p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod labore et dolore magna aliqua. nisi ut aliquip ex
                  ea commodo consequat Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat
                </p>
              </div>
              <div className="ZHow--SG--Iterate">
                <h2>Iterate</h2>
                <p className="ZHow--SG--p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor labore et dolore magna aliqua. nisi ut
                  aliquip ex ea commodo consequat Ut enim ad minim veniam, quis
                  nostrud exercitation
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="ZWhat--Container">
          <div className="ZWhat--Grid">
            <div className="ZWhat--Text--Container">
              <h2 className="ZWhat--Heading">Our Process</h2>
              <p className="ZWhat--Body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
            <ProcessCard />
          </div>
        </section>

        <section className="ZWorks--Container">
          <div className="ZWorks--Grid">
            <WorkPhone />
            <LogoDemo />
            <WorkBrowser />
            <div className="Work--Icons">more icons</div>
          </div>
        </section>
        <section></section>
      </main>
    </>
  );
}
