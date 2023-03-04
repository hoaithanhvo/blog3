import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { dataAccordion } from './data';
import './Accordition.module.css'

import React from 'react'

function Accordion() {

    return (
        // <div>
        //     {dataAccordion.map((item) =>

        //         <div className="card">
        //             <div className="card-top">

        //                 <h1 style={{ textAlign: "center", }}>{item.title}</h1>
        //             </div>
        //         </div>

        //     )}

        // </div>
        <div>
            <h1 className="đt">ĐT</h1>
            <h1 className="ipad">IPAD</h1>
            <h1 className="pc">PC</h1>
        </div>
    )
}

export default Accordion;