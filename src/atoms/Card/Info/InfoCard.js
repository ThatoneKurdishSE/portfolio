import React from "react";
import infoCard from '../Info/infoCard.scss'

function InfoCard() {
    const mailtoHref = "mailto:support@example.com?subject=SendMail&body=Description";

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
                link="https://www.zengines.ai/"
                linkTitle="Zengines AI"
                link1="https://www.theflybook.com/"
                linkTitle1="The Flybook"
                link2="https://www.auddia.com/"
                linkTitle2="Auddia Inc"
            />
            <Card
                title="Get in Touch"
                link="https://www.linkedin.com/in/razaljaf/"
                linkTitle="Linked In"
                link1="https://github.com/ThatoneKurdishSE"
                linkTitle1="Github"
            />
        </div>
    );
};

function Card(props) {
    return (
        <div className='newsCard news-Slide-up'>
        <h2 className='newsCaption-title'>{props.title}</h2>
        <div className='newsCaption'>
            <li>{props.content}</li>
            <li>{props.content1}</li>
            <li>{props.content2}</li>
            <li>{props.content3}</li>
            <a className="newsCaption-link" href={props.link} target="_blank">{props.linkTitle}</a>
            <a className="newsCaption-link" href={props.link1} target="_blank">{props.linkTitle1}</a>
            <a className="newsCaption-link" href={props.link2} target="_blank">{props.linkTitle2}</a>
        </div>
    </div>)
};



export default InfoCard;