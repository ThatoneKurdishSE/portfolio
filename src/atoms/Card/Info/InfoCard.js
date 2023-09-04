import React from "react";
import infoCard from '../Info/infoCard.scss'

function InfoCard() {

    return (
        <div className="wrappa">
            <Card 
                title="Technical Experience"
                content="Frontend: TypeScript && JavaScript"
                content1="Frameworks: React, Vue && Angular"
                content2="Backend: RoR, C#, && Golang"
                content3="Query languages: SQL && Graphql"
                />
            <Card
                title="Projects"
                content="Zengines AI"
                content1="The Flybook"
                content2="Auddia Inc"
            />
        </div>
    );
};

function Card(props) {
    return (
        <div class='newsCard news-Slide-up'>
        <h2 class='newsCaption-title'>{props.title}</h2>
        <div class='newsCaption'>
            <li>{props.content}</li>
            <li>{props.content1}</li>
            <li>{props.content2}</li>
            <li>{props.content3}</li>
        </div>
    </div>)
};



export default InfoCard;