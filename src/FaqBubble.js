import React, { useState } from "react"
import styled from "styled-components"
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined"
import ClearIcon from "@material-ui/icons/Clear"
import backgroundPattern from "../images/product/background-pattern.svg"
import FaqBubbleData from "../Data/FaqBubbleData"
import KeyboardArrowUpOutlinedIcon from "@material-ui/icons/KeyboardArrowUpOutlined"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"

function FaqBubble() {
  const [hidePopUp, setHidePopUp] = useState(false)
  const [clicked, setClicked] = useState(false)

  const toggle = index => {
    if (clicked === index) {
      //if clicked question is already active then just close it
      return setClicked(null)
    }
    setClicked(index)
  }

  const handleChatBlock = () => {
    setHidePopUp(!hidePopUp)
    console.log("hidePopUp", hidePopUp)
  }
  console.log("faqbubble", FaqBubbleData)

  return (
    <>
      {!hidePopUp && (
        <ParentPopUp>
          <UpperCard>
            <img
              style={{ width: "35px", height: "35px" , marginTop: '45px'}}
              src={require("../images/product/whatsapp.svg")}
              alt="Email"
            />
            <WhatsappHeader>
              WhatsApp us anytime to understand our assets better
            </WhatsappHeader>
            <WhatsappLink>click here</WhatsappLink>
          </UpperCard>
          <LowerCard>
            <FaqHeader>FAQs & Resources</FaqHeader>
            {/* <AccordianSection> */}
              <Container>
                {FaqBubbleData.map((item, index) => {
                  return (
                    <div>
                      <Wrap onClick={() => toggle(index)} key={index}>
                        <QuestionTag>{item.question}</QuestionTag>
                        <span>
                          {clicked === index ? (
                            <KeyboardArrowUpOutlinedIcon />
                          ) : (
                            <ExpandMoreIcon />
                          )}
                        </span>
                      </Wrap>
                      {clicked === index ? (
                        <Dropdown>
                          <p>{item.answer}</p>
                        </Dropdown>
                      ) : null}
                      <div
                        style={{ border: '1px solid rgba(0, 0, 0, 0.15)', width: "100%"}}
                      ></div>
                    </div>
                  )
                })}
              </Container>
            {/* </AccordianSection> */}
          </LowerCard>
          {/* <ArrowStyle></ArrowStyle> */}
        </ParentPopUp>
      )}
      <ChatIcon onClick={() => handleChatBlock()}>
        {hidePopUp ? <ChatOutlinedIcon /> : <ClearIcon />}
      </ChatIcon>
    </>
  )
}
export default FaqBubble

const ParentPopUp = styled.div`
  right: 40px;
  position: fixed;
  box-shadow: rgb(0 0 0 / 15%) 0px 5px 40px 0px;
  border-radius: 3px;
  display: flex;
  width: 30%;
  flex-direction: column;
  //   bottom: 145px;
  z-index: 1;
  animation-duration: 0.5s !important;
  box-sizing: border-box;
  background-color: #ffffff;
  border-top: 5px solid #53bb53;
`
const ArrowStyle = styled.div`
  width: 0;
  height: 0;
  border-left: 12px solid transparent;
  border-right: 12px solid transparent;
  border-top: 15px solid #ffffff;
  position: fixed;
  right: 76px;
  bottom: 129px;
  color: #ffffff;
  z-index: 1;
`
const ChatIcon = styled.div`
  width: 55px;
  height: 55px;
  border-radius: 100%;
  background: #53bb53;
  display: flex;
  align-items: center;
  justify-content: center;
  right: 58px;
  position: fixed;
  bottom: 60px;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    transition: all 0.2s ease-in-out;
    background-color: rgb(90, 214, 90);
  }
`
const UpperCard = styled.div`
  background-color: #f6eada;
  width: 100%;
  height: 20%;
  background-image: url(${backgroundPattern});
  display: flex;
  flex-direction: column;
  align-items: center;
`
const WhatsappHeader = styled.div`
//   width: 340px;
  font-family: Tanger Serif Narrow;
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  margin-top: 10px;
  margin-bottom: 7px;
  // line-height: 100%;
  text-align: center;
  line-height: 1;
  //   letter-spacing: -0.02em;
  color: #000000;
`
const WhatsappLink = styled.a`
  font-family: Inter;
  font-weight: 700;
  font-size: 16px;
  text-decoration-line: underline;
  color: #000;
  margin-bottom: 27px;
`
const LowerCard = styled.div`
  background: #ffffff;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  margin: 11%;
`
const FaqHeader = styled.div`
  font-size: 28px;
  font-family: Tanger Serif Narrow;
  font-weight: 600;
  line-height: 1;
  margin-bottom:1%;
//   width: 75%;
//   align-self: baseline;
`
const AccordianSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100vh;
  background: #fff;
`
const Container = styled.div`
  // position:absolute;
  // top:30%;
//   box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);
`
const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
//   padding-top:3%;
  align-items: center;
  width: 100%;
  text-align: center;
  cursor: pointer;

  span {
    margin-right: 1.5rem;
  }
`
const Dropdown = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
//   align-items: center;
  justify-content: center;
  p {
    font-size: 16px;
    line-height: 150%;
    height: 24px;
    font-family: Inter;
  }
`
const QuestionTag = styled.div`
  font-size: 16px;
  line-height: 150%;
//   height: 24px;
  font-family: Inter;
//   color: rgba(0, 0, 0, 0.65);
`
