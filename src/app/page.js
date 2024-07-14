"use client"
import { useEffect } from "react";
import Header from "../../components/header/header";
import MobileServices from "../../components/mobile_services/MobileServices";
import Navbar from "../../components/navbar/Navbar";
import Services from "../../components/services/Services";
import System from "../../components/systems/System";
import Team from "../../components/team/Team";
import AOS from 'aos';

// import aos styles
import 'aos/dist/aos.css';
import Design from "../../components/design/Design";
import Infrastructure from "../../components/Infrastructure/Infrastructure";
import ItConsulting from "../../components/itConsulting/ItConsulting";
import Tools from "../../components/tools/Tools";
import Clients from "../../components/clients/Clients";
import Delever from "../../components/delever/Delever";
import Work from "../../components/work/Work";
import Contact from "../../components/contact/Contact";
import Footer from "../../components/footer/Footer";
export default function Home() {
  useEffect(() => {
    // here you can add your aos options
    AOS.init({
      offset: 100,
    });
  }, []);
  return (
      <main className="">
          <Navbar></Navbar>
          <Header></Header>
          <Services></Services>
          <Team></Team>
          <MobileServices></MobileServices>
          <System></System>
          <Design></Design>
          <Infrastructure></Infrastructure>
          <ItConsulting></ItConsulting>
          <Tools></Tools>
          <Clients></Clients>
          <Delever></Delever>
          <Work></Work>
          <Contact></Contact>
          <Footer></Footer>

          <div className="fixed__message " >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class=" bi bi-chat-left-dots" viewBox="0 0 16 16">
          <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
          <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
        </svg>
          </div>
      </main>
  );
}
