import React from "react";
import { blogCard } from "./blogCard.scss"

const BlogCards = () => {

    return (
            <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-evenly"}}>
                <div className="card">
                        <span className="tag tag-medium">Medium article</span>
                    <img src="https://miro.medium.com/v2/resize:fit:640/format:webp/1*szlsZC24vK9iTv6iin1_eg.jpeg" className="card__image" alt="medium" />
                    <div className="card__content">
                        <time dateTime="2023-07-07" className="card__date">7 July 2023</time>
                        <span className="card__title">
                            <a className="card__title" href="https://medium.com/@razaljaf/traveling-with-my-spices-and-learning-from-turtles-through-our-shared-home-of-planet-earth-594307172eae">
                                Traveling with my spices and learning from turtles through our shared home of planet earth.
                            </a>
                        </span>
                    </div>
                </div>
                <div className="card">
                        <span className="tag tag-medium">Medium article</span>
                    <img src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*KfOa-WLu4sB6mHNha52IFQ.png" className="card__image" alt="medium" />
                    <div className="card__content">
                        <time dateTime="2023-06-02" className="card__date">2 June 2023</time>
                        <span className="card__title">
                            <a className="card__title" href="https://medium.com/@razaljaf/traveling-with-my-spices-and-learning-from-turtles-through-our-shared-home-of-planet-earth-594307172eae">
                            Laid off, the capitalistic hook?
                            </a>
                        </span>
                    </div>
                </div>
                <div className="card">
                        <span className="tag tag-medium">Medium article</span>
                    <img src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*RL2AMMGaPI98up7-aG4dsA.jpeg" className="card__image" alt="medium" />
                    <div className="card__content">
                        <time dateTime="2023-02-15" className="card__date">15 February 2023</time>
                        <span className="card__title">
                            <a className="card__title" href="https://medium.com/design-bootcamp/using-interior-design-principles-to-apply-dark-mode-to-your-application-b92ba96f1e66">
                            Using interior design principles to apply dark mode to your application.
                            </a>
                        </span>
                    </div>
                </div>
                <div className="card">
                <span className="tag tag-medium">Medium article</span>
                    <img src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*qeCjWQptNaOyoX8anhez5A.jpeg" className="card__image" alt="medium" />
                    <div className="card__content">
                        <time dateTime="2023-11-05" className="card__date">5 November 2022</time>
                        <span className="card__title">
                            <a className="card__title" href="https://medium.com/@razaljaf/pema-my-non-profit-dream-98e56c832515">
                            Pema, my non-profit dream.
                            </a>
                        </span>
                    </div>
                </div>
                <div className="card">
                <span className="tag tag-medium">Medium article</span>
                    <img src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*mVaNocGVxxv9MPq-N1kCOA.jpeg" className="card__image" alt="medium" />
                    <div className="card__content">
                        <time dateTime="2021-05-06" className="card__date">6 May 2021</time>
                        <span className="card__title">
                            <a className="card__title" href="https://medium.com/@razaljaf/7-junior-developer-job-interviews-in-3-days-the-what-i-learned-edition-74b005bdea14">
                                7 junior developer job interviews in 3 days. (The what I learned edition).
                            </a>
                        </span>
                    </div>
                </div>
                <div className="card">
                <span className="tag tag-medium">Medium article</span>
                    <img src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*85MCi-aJp6UpMSNlGwvVHQ.jpeg" className="card__image" alt="medium" />
                    <div className="card__content">
                        <time dateTime="2021-03-23" className="card__date">23 March 2021</time>
                        <span className="card__title">
                            <a className="card__title" href="https://medium.com/@razaljaf/surviving-a-coding-bootcamp-mindfulness-tools-edition-15ecd3ce110e">
                                Surviving a coding bootcamp: Mindfulness tools edition.
                            </a>
                        </span>
                    </div>
                </div>
                <div className="card">
                <span className="tag tag-medium">Medium article</span>
                    <img src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*XCI9bLo1EjEbVWG6ZaEycw.jpeg" className="card__image" alt="" />
                    <div className="card__content">
                        <time dateTime="2021-03-14" className="card__date">14 March 2021</time>
                        <span className="card__title">
                            <a className="card__title" href="https://medium.com/@razaljaf/go-fiber-the-skinny-28432421a696">
                                Go Fiber(the skinny)
                            </a>
                        </span>
                    </div>
                </div>
        </div>
    );

};

export default BlogCards;
