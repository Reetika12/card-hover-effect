import React, { Component } from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";
import "./Styles/CardHover.css";

class PopUpWithDiv extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidePopUp: false,
    };
  }
  handleChatBlock = () => {
    let { hidePopUp } = this.state;
    this.setState({
      hidePopUp: !hidePopUp,
    });
  };
  render() {
    let { hidePopUp } = this.state;
    return (
      <>
       <div>
        <div className="ParentPopUp">
          <div className="alignInbox">
            <div>How to open asset?</div>
            <ExpandMoreIcon />
          </div>
          <div className="alignInbox">
            <div>How to open asset?</div>
            <ExpandMoreIcon />
          </div>
          <div className="alignInbox">
            <div>How to open asset?</div>
            <ExpandMoreIcon />
          </div>
          <div className="alignInbox">
            <div>How to open asset?</div>
            <ExpandMoreIcon />
          </div>
        </div>
        <div className="combinePopUp">
            <div className="arrowStyle">
            <ArrowDropDownIcon fontSize="large"/> 
            </div>
            <div onClick={this.handleChatBlock} className="ChatStyle">
                <ChatOutlinedIcon/>
            </div>
        </div>
    </div>
      </>
    );
  }
}

export default PopUpWithDiv;
