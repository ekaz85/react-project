import React from "react";
import classes from "./Music.module.css";

const Music = (props) => {
    return (
        <div>
            <iframe src={"https://www.audacy.com/stations"} height={"600px"} width={"100%"}></iframe>
        </div>
    )
}

export default Music;