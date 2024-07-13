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
      </main>
  );
}
