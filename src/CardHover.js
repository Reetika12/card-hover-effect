import React, { Component } from "react";
import "./Styles/CardHover.css";

class CardHover extends Component {

commonComponent = (img,title,post,aTag) => {
    return <div className="box">
        <img
            className="avtar"
            src={img}
            alt="person1"
        />
        <div className="box_content">
            <h3 className="title">{title}</h3>
            <span className="post">{post}</span>
        </div>
        <li className="icon">
            <a href="#">{aTag}</a>
        </li>
   </div>
}
  render() {
    return (
      <div className="text-center">
        <div className="container">
          <h1>MEET THE TEAM</h1>
        </div>
        <section className="team">
            <div className="row">
            {this.commonComponent(require("./person2.jpeg").default,"Aaron Rossi","Ceo and co-founder","read more")}
            {this.commonComponent(require("./person2.jpeg").default,"Aaron Rossi","Ceo and co-founder","read more")}
            {this.commonComponent(require("./person2.jpeg").default,"Aaron Rossi","Ceo and co-founder","read more")}
            </div>
        </section>
      </div>
    );
  }
}

export default CardHover;
