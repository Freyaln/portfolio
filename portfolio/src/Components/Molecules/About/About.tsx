import * as React from 'react';
import {FC} from 'react';
import Typo, {TextType} from "../../Atoms/Typo/Typo";
import './About.scss'
import {SkillDetail, skillsDatas} from "../../../Datas/Datas";
import List from "../../Atoms/List/List";
import Separator from "../../Atoms/Separator/Seperator";

interface IAboutProps {
    titleLeft?: string;
    titleRight?: string;
    aboutMe?: string;
    skillList?:SkillDetail[];
}

const About: FC<IAboutProps> = ({titleLeft, titleRight, aboutMe, skillList}) => {
    return (
        <section className='about' id='about'>
            <article className='about__block__left'>
                <Typo type={TextType.H2} className='about__block__left__title'>About me</Typo>
                <p className='about__block__left__description'>
                    Hello ! I am <span className='about__block__left__description__name'>Aurélien</span> (still) young junior developer eager to learn more.
                    You are currently visiting my portfolio written exclusively in Reactjs with Typescript.
                    {'\n'}{'\n'}
                    I am where I am today thanks to
                    <span className='about__block__left__description__name'>
                    <a href='https://becode.org/fr/'> @Becode.org</a>
                    </span> and
                    <span className='about__block__left__description__name'>
                     <a href='https://eonix.be/'> @Eonix SA</a>
                    </span>.
                    Becode is a bootcamp-like in development where I learned the basics of Javascript, PHP, CSS and Reactjs.It is the place that taught me to love the code and gave me the will to practice, experiment and go further.
                    {'\n'}{'\n'}
                    My internship at Eonix gave me the opportunity to learn Typescript in depth, the hard way. Since then I cannot code without it.
                </p>
            </article>
            <div className='about__middle'></div>
            <article className='about__block__right'>
                <Typo type={TextType.H2} className='about__block__right__title'>Skills</Typo>
                <List classname='__list' optionsSkills={skillsDatas}/>
            </article>
            <Separator/>
        </section>
    )
}

export default About;