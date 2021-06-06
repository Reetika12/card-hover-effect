import React, { Component } from 'react'
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import './Styles/CardHover.css'
import Dialog from '@material-ui/core/Dialog';
import { withStyles } from "@material-ui/core/styles";
import { createStyles} from '@material-ui/core';

  const styles = theme => createStyles({
    scrollPaper: {
        marginLeft: '66%',
        marginTop: '5%'
    }
  });
class PopUpWithDropdown extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            dialogOpen:false
        }
    }
    handleChatBlock = () =>{
        this.setState({
            dialogOpen:true
        })
    }
    handleClose = () => {
        this.setState({
            dialogOpen:false
        })
      };
    render() {
        let {classes} = this.props
        let {dialogOpen} = this.state
        return (
            <div>
                <Dialog 
                 classes={{scrollPaper: classes.scrollPaper }}
                 onClose={this.handleClose}
                 open={dialogOpen}>
                    hello friends
                    how are you ?
                    how you have been
                    <div style={{width:'100px',height:'100px',background:'green'}}>

                    </div>
                </Dialog>
                <div onClick={this.handleChatBlock} className="ChatStyle">
                   <ChatOutlinedIcon/>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(PopUpWithDropdown);
