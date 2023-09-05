//make a box that has an animated and a non-animated option
import React from "react";
import { box } from "../Box/box.scss"


const Box = () => {

return (

    <div className="body">

        <div className="content">
            <div className="content__container">
            <p className="content__container__text">
                Hello, I'm Raz
            </p>

            <ul className="content__container__list">
                <li className="content__container__list__item">Engineer</li>
                <li className="content__container__list__item">Creative</li>
                <li className="content__container__list__item">Problem solver</li>
                <li className="content__container__list__item">Polyglot</li>
                <li className="content__container__list__item">Aerospace Enthusiast</li>
            </ul>
        </div>
    </div>
</div>
    )
};

export default Box;