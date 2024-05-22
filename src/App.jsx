import styled from "styled-components";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Who from "./components/Who";
import Works from "./components/Works";
import bgImg from "./asest/bg.jpeg";
import Portfolio from "./components/Portfolio";
import "./app.css";
import OurTeam from "./components/OurTeam";
import HowWeWork from "./components/HowWeWork";
import ContactVersion1 from "./components/contactv1";
import Client from "./components/Client";
import Footer from "./components/Footer";
import NewHero from "./components/NewHero";
import NewWorks from "./components/NewWorks";
import NewWho from "./components/NewWho";
import Map from "./components/Map";
import TestimonialClient from "./components/Testimonial";
import Navbar from "./components/Navbar";
import TestimonialClientModel from "./components/Testimonialmodel";
const Container = styled.div`
  height: 100vh;
  color: white;
  background: url(${bgImg});
  &::-webkit-scrollbar {
    display: none;
  }
`;

function App() {
  return (
    <Container>
       <NewHero />
       <NewWorks />    
       <Portfolio /> 
       <NewWho />
       <OurTeam />
       <HowWeWork />
       <TestimonialClientModel />
       {/* <TestimonialClient /> */}
       <Client />
       <ContactVersion1 />
       <Map /> 
       <Footer /> 
    </Container>
  );
}

export default App;
