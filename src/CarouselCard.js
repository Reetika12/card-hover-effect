import React, { Component } from 'react'
import styled from "styled-components"
import Carousel from 'react-elastic-carousel';
import './Styles/CardHover.css'

const breakPoints = [
    {width:1, itemsToShow:1},
    {width:550, itemsToShow:2},
    {width:1200, itemsToShow:3}
 ]

 function CarouselCard (){
        return (
            <>
              <h1 style={{textAlign:"center"}}>Example to set up carousel in react</h1>
              <div>
             
                  <Carousel 
                     breakPoints={breakPoints}
                  >
                        <Item>One</Item>
                        <Item>Two</Item>
                        <Item>Three</Item>
                        <Item>Four</Item>
                        <Item>Five</Item>
                        <Item>Six</Item>
                        <Item>Seven</Item>
                        <Item>Eight</Item>
                  </Carousel>
              </div>
            </>
        )
}

export default CarouselCard

const Item = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    height: 250px;
    width: 100%;
    background-color: green;
    // background-color: #00008B;
    color: #fff;
    margin: 0 15px;
    font-size:4em;
`
