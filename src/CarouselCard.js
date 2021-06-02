import React, { Component } from 'react'
import styled from "styled-components"
import Carousel from 'react-elastic-carousel';
import './Styles/CardHover.css'
import { render } from '@testing-library/react';

const breakPoints = [
    {width:1, itemsToShow:1},
    {width:550, itemsToShow:2},
    {width:1200, itemsToShow:3}
 ]

 class CarouselCard extends Component{
     constructor(props){
         super(props);
         this.state={
            countDown:100,
            currentTime:new Date().getTime(),
            countDowndate: new Date("june 01, 2021 00:00:00").getTime(),
            timeLeft:""
         }
     }
     componentDidMount(){
         let {currentTime} = this.state
         this.interval= setInterval(()=>{
             currentTime = new Date().getTime()
            let distance = this.state.countDowndate - currentTime
            this.CommonFunc(distance)
         },1000)
     }
     CommonFunc=(distance)=>{
        let days=Math.floor(distance/(1000*60*60*24));
        let hours=Math.floor((distance % (1000*60*60*24))/(1000*60*60));
        let minutes=Math.floor((distance % (1000*60*60))/(1000*60));
        let seconds=Math.floor((distance % (1000*60))/(1000));
         this.setState({
            timeLeft:(`${days + "d"+" "+ hours +'h'+ " "+ minutes +'m'+ " "+seconds+'s'}`)
         })
         if(distance<0)
         {
            this.setState({
                timeLeft:"Woah You have reached the day!!!"
            })
         }

     }
     componentWillUnmount(){
         clearInterval(this.interval)
     }
      render(){
        return (
            <>
             
              <h1 style={{textAlign:"center"}}>Example to set up carousel in react</h1>
              <h2>The event is going to start in {this.state.timeLeft}</h2>
              <div>
                  <Carousel 
                    //  enableAutoPlay={true}
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
