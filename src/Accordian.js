import React from "react";

const Accordion = ({title, active,setactive}) => {
  return (
    <div className="accordion">
      <div className="accordionHeading">
        <div className="container">
          <p>{title}</p>
          <span
            onClick={()=>setactive(title)}
          >
            {active === title ? "x" : "|||"}
          </span>
        </div>
      </div>
      <div className={active === title ? "show" : "accordionContent"}>
        <div className="container">
          <p>
            this is a block for testing its only testing purpose lorem epsum
            temper incident duis aute et dolore megna
          </p>
          <p>
            this is a block for testing its only testing purpose lorem epsum
            temper incident duis aute et dolore megna
          </p>
          <p>
            this is a block for testing its only testing purpose lorem epsum
            temper incident duis aute et dolore megna
          </p>
        </div>
      </div>
    </div>
  );
};
export default Accordion;
