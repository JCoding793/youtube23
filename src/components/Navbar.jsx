import React, { useEffect } from 'react'
import styled from "styled-components";
import LogoImg  from "../asest/newlogo.png";
import SearchImg  from "../asest/search.png";
const Section = styled.div`
display: flex;
justify-content: center;

@media only screen and (max-width: 768px) {
  width: 100%;
}
`;

const Container = styled.div`
width: 1440px;
display: flex;
justify-content: space-between;
align-items: center;
padding: 10px 0px;

@media only screen and (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }`;

const Link = styled.div`
align-items: center;
gap: 50px;`;
const Logo = styled.img`
height: 68px;`;
const Icons = styled.div`  display: flex;
align-items: center;
gap: 20px;`;
const Icon = styled.img`
width: 20px;
  cursor: pointer;`;
const List = styled.ul`  display: flex;
list-style-type: none;
align-items: center;
gap: 30px;`;
const ListItem = styled.li`
font-weight: 600;
cursor: pointer;`;
const Button = styled.button` width: 100px;
padding: 10px;
background-color: #da4ea2;
color: white;
border: none;
border-radius: 5px;
cursor: pointer;`;

const navItems = [
  {name:  "Services"} , {name:  "Portfolio"},
  {name:  "About us"},
  {name:  "Our Approach"},
  {name:  "Contact"}, {name:  "Case Study"}
]
const  Navbar=({timeline})=>{
  useEffect(()=>{
    timeline.from(".nav-animation", {
    opacity: 0,
    y:20,
    stagger: 0.2
  })
  }, [])
  
  return (
    <Section className='pt-6 overflow-hidden'>
      <Container>
        <Logo src={LogoImg} alt='..' className='nav-animation'/>
        <Link className='hidden md:flex nav-animation'>
            <List>
              {navItems.map((item  , index )=>(
                <ListItem  className='nav-animation' key={index}>{item.name}</ListItem>
              ))}
                
            </List>
        </Link>
        <Icons className='nav-animation'>
            <Icon src={SearchImg}/>
            <Button>Hire Now</Button>
        </Icons>
      </Container>
    </Section>
  )
}

export default Navbar;