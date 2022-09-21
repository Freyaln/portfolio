import * as React from 'react';
import {FC} from 'react';
import Typo, {TextType} from "../../Atoms/Typo/Typo";
import Separator from "../../Atoms/Separator/Seperator";
import './ProjectAbout.scss';

interface IAboutProps {
    title: string;
    titleSteps?: string[];
    about?: string;
    img?: string;
    flow? : string;
    design?: string;
    description?: string[];
}

const ProjectAbout: FC<IAboutProps> = ({title, about, img, titleSteps, description, flow, design}) => {
    return (
        <>
        <section className='project__about' id='about'>
            <article className='project__about__block'>
                <Typo type={TextType.H2} className='project__about__block__title'>{title}</Typo>
                <Typo type={TextType.TEXT} className='project__about__block__description'>
                    {about}
                </Typo>
            </article>
            <article className='project__about__img__block'>
                <img src={img} className='project__about__img'/>
            </article>
            <Separator/>
        </section>
        <section className='project__flow__block'>
            <section className='project__flow__steps'>
                <article className='project__flow__steps'>
                    {titleSteps && <Typo type={TextType.H2} className='project__flow__steps__title'>
                        {titleSteps[0]}
                    </Typo>}
                    <article className='project__flow__steps__block__description'>
                        {description && <Typo type={TextType.TEXT} className='project__flow__steps__block__description__text'>
                            {description[0]}
                        </Typo> }
                        {flow && <img src={flow} className='project__flow__img'/>}
                    </article>
                </article>
                <article className='project__flow__steps'>
                    {titleSteps && <Typo type={TextType.H2} className='project__flow__steps__title'>
                        {titleSteps[1]}
                    </Typo>}
                    <article className='project__flow__steps__block__description'>
                        {description && <Typo type={TextType.TEXT} className='project__flow__steps__block__description__text'>
                            {description[1]}
                        </Typo> }
                        {flow && <img src={design} className='project__flow__img'/>}
                    </article>
                </article>
            </section>
            <Separator/>
        </section>
        </>
    )
}

export default ProjectAbout;