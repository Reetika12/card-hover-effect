import React, { useState } from 'react'
import Accordion from './Accordian'
import './Styles/CustomStyle.css'

function CustomFaq(){
   const [active, setactive] = useState(false)
        return (
            <div>
                <Accordion title="Title1" active={active} setactive={setactive}/>
                <Accordion title="Title2" active={active} setactive={setactive}/>
                <Accordion title="Title3" active={active} setactive={setactive}/>
                <Accordion title="Title4" active={active} setactive={setactive}/>
            </div>
        )
}

export default CustomFaq
