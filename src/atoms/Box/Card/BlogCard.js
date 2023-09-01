import React from "react";
import { blogCard } from "./blogCard.scss"

const BlogCard = () => {

    return (
        <div class="card">
            <img src="https://miro.medium.com/v2/resize:fit:640/format:webp/1*szlsZC24vK9iTv6iin1_eg.jpeg" class="card__image" alt="brown couch" />
            <div class="card__content">
                <time datetime="2021-03-30" class="card__date">30 März 2021</time>
                <span class="card__title">
                    <a class="card__title" href="https://medium.com/@razaljaf/traveling-with-my-spices-and-learning-from-turtles-through-our-shared-home-of-planet-earth-594307172eae">
                        Traveling with my spices and learning from turtles through our shared home of planet earth.
                    </a>
                </span>
            </div>
        </div>
    );

};

export default BlogCard;
