
import styled from "styled-components"
import Hero from "./components/Hero"
import Contact from "./components/Contact"
import Who from "./components/Who"
import Works from "./components/Works"
import bgImg from "../public/img/bg.jpeg";
const Container = styled.div`
height: 100vh;
color: white;
scroll-snap-type : y mandatory;
scroll-behavior: smooth;
overflow-y: auto;
background: url(${bgImg});
scrollbar-width: none;
&::-webkit-scrollbar{
  display: none;
};

`
function App() {

    return (

      <Container>
       <Hero />
       <Who />
      <Works />
       <Contact />
       {/* <Test /> */}
      </Container>
    )
  }
  
  export default App