import React, { Component } from 'react'
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import './Styles/CardHover.css'
import Dialog from '@material-ui/core/Dialog';
import { withStyles } from "@material-ui/core/styles";
import { createStyles} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

  const styles = theme => createStyles({
    scrollPaper: {
        marginLeft: '66%',
        marginTop: '-5%',
    }
  });
class PopUpWithDropdown extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            dialogOpen:false,
        }
    }
    handleChatBlock = () =>{
        this.setState({
            dialogOpen:true,
        })
    }
    handleClose = () => {
        this.setState({
            dialogOpen:false,
        })
      };
    render() {
        let {classes} = this.props
        let {dialogOpen} = this.state
        return (
            <div >
                <Dialog 
                 classes={{scrollPaper: classes.scrollPaper }}
                 onClose={this.handleClose}
                 open={dialogOpen}>
                     <div style={{background:'pink'}}>
                         <div style={{display:'flex'}}>
                            <div>How to open asset?</div>
                            <ExpandMoreIcon/>
                         </div>
                        <div style={{width:'100px',height:'100px',background:'green'}}>
                        </div>
                    </div>
                </Dialog>
                {dialogOpen && <div style={{zIndex:'1'}}>
                 <ArrowDropDownIcon color="secondary" fontSize="large"/>
                </div>}
                {/* <Dialog open={dialogSecondOpen}> */}
                    {/* <img src={require("./Images/Vector.png").default} alt="triangle"/> */}
                    {/* <img src={require("./Images/ChatBubble.png").default} alt="triangle"/> */}
                {/* </Dialog> */}
                <div onClick={this.handleChatBlock} className="ChatStyle">
                   <ChatOutlinedIcon/>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(PopUpWithDropdown);
