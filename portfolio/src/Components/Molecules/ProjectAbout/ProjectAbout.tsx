import * as React from 'react';
import {FC} from 'react';
import Typo, {TextType} from "../../Atoms/Typo/Typo";
import Separator from "../../Atoms/Separator/Seperator";
import './ProjectAbout.scss';

interface IAboutProps {
    title: string;
    titleSteps?: string[];
    img?: string;
    flow? : string;
    design?: string;
    description?: string[];
}

const ProjectAbout: FC<IAboutProps> = ({title, img, titleSteps, description, flow, design}) => {
    return (
        <>
        <section className='project__about' id='about'>
            <article className='project__about__block'>
                <Typo type={TextType.H2} className='project__about__block__title'>{title}</Typo>
                <Typo type={TextType.TEXT} className='project__about__block__description'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla elementum rutrum ullamcorper.
                    Mauris et tincidunt elit. Aenean convallis lacinia quam. Nunc sit amet condimentum libero.
                    In ullamcorper turpis placerat massa posuere, id pellentesque sapien euismod. Mauris tincidunt laoreet eros,
                    nec fermentum enim consequat a.
                    {'\n'}{'\n'}
                    Nulla eu risus consequat, tempor diam ac, laoreet nisl. Etiam ac cursus sapien, ac tempor eros.
                    In fringilla neque at ultricies mollis. Nulla ullamcorper eros mauris
                    {'\n'}{'\n'}
                    Praesent volutpat enim in nulla euismod, sit amet pellentesque augue suscipit. Phasellus nec finibus felis.
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
        </section>
        </>
    )
}

export default ProjectAbout;