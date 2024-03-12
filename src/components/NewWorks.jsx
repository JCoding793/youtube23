import { useEffect, useState } from "react";
import styled from "styled-components";
import WebDesgin from "./WebDesgin";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Development from "./Development";
import ProductDesign from "./ProductDesign";
// gsap.registerPlugin(ScrollTrigger);

const data = [
  "Web Design",
  "Development",
  "Product Design",
  "Illustration",
  "Social Media",
];
const Section = styled.div`
  scroll-snap-align: center;
  position: relative;
  color: black;
  font-size: 14px;
  font-weight: 300;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  @media only screen and (max-width: 768px) {
    padding: 20px;
    justify-content: center;
  }
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ListItem = styled.li`
  font-size: 60px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px white;
  position: relative;

  @media only screen and (max-width: 768px) {
    font-size: 24px;
    color: white;
    -webkit-text-stroke: 0px;
  }
  &::after {
    content: "${(props) => props.text} ";
    position: absolute;
    top: 0;
    left: 0;
    color: pink;
    width: 0px;
    overflow: hidden;
    white-space: nowrap;
  }

  &:hover {
    &::after {
      animation: moveText 0.5s linear both;

      @keyframes moveText {
        to {
          width: 100%;
        }
      }
    }
  }
`;
const Right = styled.div`
flex: 1;
position: relative;
`;
gsap.registerPlugin(ScrollTrigger);
const NewWorks = () => {
  const [work, setWork] = useState("Web Design");
  const tl = gsap.timeline({
    scrollTrigger: {
       trigger: ".service-container",
       start: "+=300",
       end: "bottom",
     },
  });
  
  useEffect(()=>{

   tl.from(".service-animation",{
    opacity: 0,
    y:100,
    duration:1.8,
    stagger: 0.1
})
  tl.from(".service-animation li" ,{
    opacity : 0,
    y:100 ,
    duration: 1.3,
    stagger: 0.2,
  }, "-=1")
  })
  
  return (
    <div className="bg-[#080017] px-[4%] service-container">
    <Section className="flex flex-col max-w-[1440px] m-auto py-8 md:py-[4.7rem] "> 
      <div className="text-center ">
          <h1 className="text-white  text-3xl md:text-5xl pb-2 md:pb-5 font-medium service-animation">Our <span className="span-color-text">Core</span> Services</h1>
          <p className="text-white text-[1rem] md:text-xl font-bold service-animation">Transforming Your Business through Intelligent Design and Seamless Tech Solutions.</p>
          </div>
      <Container className="md:pt-10">
        <Left>
          <List className="service-animation">
            {data.map((item) => (
              <ListItem key={item} text={item} onClick={()=>setWork(item)}>
                {item}
              </ListItem>
            ))}
          </List>
        </Left>
        <Right>
          {work === "Web Design" ? (
            <WebDesgin />
          ) : work === "Development" ? (
            <Development />
          ) : (
            <ProductDesign />
          )}
        </Right>
      </Container>
  
    </Section>  </div>
  );
};

export default NewWorks;
