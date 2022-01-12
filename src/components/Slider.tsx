import React from 'react';
import ReactSlick, { Settings } from 'react-slick';
import styled from "@emotion/react";
import { HdArrowBack} from 'react-icons/md';


const DEFAULT_SETTINGS: Settings = {
    dots: false,
    arrows : true,
    infinite : false,
    speed : 500,
    slidesToShow : 5,
    slidesToScroll : 5,
    swipe : true,
    draggable : true,
    prevArrow : (
        <ArrowButton>

        </ArrowButton>
    ),
    nextArrow : (
        <
    )
}

interface Props {
    settings? : Settings;
}

const Slider : React.FC<Props> = ( { settings :Settings|undefined = DEFAULT_SETTINGS }) => {

    return (
        <ReactSlick {...settings}>

        </ReactSlick>
    )
}

export default Slider;