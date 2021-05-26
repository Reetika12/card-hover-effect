import React, { Component } from "react";
import "./Styles/CardHover.css";
import CardData from './Constants'

class CardHover extends Component {

commonComponent = (el) => {
    return <div className="box">
        <img
            className="avtar"
            src={el.img}
            alt="person1"
        />
        <div className="box_content">
            <h3 className="title">{el.title}</h3>
            <span className="post">{el.post}</span>
        </div>
        <li className="icon">
            <a href="#">{el.aTag}</a>
        </li>
   </div>
}
 ConvertData= () =>{
    let Data=[]
    CardData.forEach(el=>{
        Data.push(this.commonComponent(el))
    })
    return Data
}
  render() {
      console.log("carddata",CardData)
    let result = this.ConvertData()
    return (
      <div className="text-center">
        <div className="container">
          <h1>MEET THE TEAM</h1>
        </div>
        <section className="team">
            <div className="row">
                {result}
            {/* {this.commonComponent(require("./Images/person2.jpeg").default,"Aaron Rossi","Ceo and co-founder","read more")}
            {this.commonComponent(require("./Images/person2.jpeg").default,"Aaron Rossi","Ceo and co-founder","read more")}
            {this.commonComponent(require("./Images/person2.jpeg").default,"Aaron Rossi","Ceo and co-founder","read more")} */}
            </div>
        </section>
      </div>
    );
  }
}

export default CardHover;
