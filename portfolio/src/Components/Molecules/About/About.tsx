import * as React from 'react';
import {FC} from 'react';
import Typo, {TextType} from "../../Atoms/Typo/Typo";
import './About.scss'
import {InfosDatas, SkillDetail} from "../../../Datas/Datas";
import List from "../../Atoms/List/List";
import Separator from "../../Atoms/Separator/Seperator";

interface IAboutProps {
    titleLeft: string;
    titleRight: string;
    aboutMe: string;
    skillList:SkillDetail[];
}

const About: FC<IAboutProps> = ({titleLeft, titleRight, aboutMe, skillList}) => {
    return (
        <section className='about' id='about'>
            <article className='about__block__left'>
                <Typo type={TextType.H2} className='about__block__left__title'>{titleLeft}</Typo>
                <p className='about__block__left__description'>{aboutMe}</p>
            </article>
            <div className='about__middle'></div>
            <article className='about__block__right'>
                <Typo type={TextType.H2} className='about__block__right__title'>{titleRight}</Typo>
                <List classname='__list' optionsSkills={skillList}/>
            </article>
            <Separator/>
        </section>
    )
}

export default About;