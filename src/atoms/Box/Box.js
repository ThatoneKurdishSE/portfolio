//make a box that has an animated and a non-animated option
import React from "react";
import { box } from "../Box/box.scss"


const Box = () => {

return (

    <div class="body">

        <div class="content">
            <div class="content__container">
            <p class="content__container__text">
                Hello, I'm Raz
            </p>

            <ul class="content__container__list">
                <li class="content__container__list__item">Engineer</li>
                <li class="content__container__list__item">Creative</li>
                <li class="content__container__list__item">Problem solver</li>
            </ul>
        </div>
    </div>
</div>
    )
};

export default Box;