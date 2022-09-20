import * as React from 'react';
import {FC} from 'react';
import Typo, {TextType} from "../../Atoms/Typo/Typo";
import Separator from "../../Atoms/Separator/Seperator";
import './ProjectAbout.scss';

interface IAboutProps {
    title: string;
    img?: string;
}

const ProjectAbout: FC<IAboutProps> = ({title, img}) => {
    return (
        <section className='project__about' id='about'>
            <article className='project__about__left'>
                <Typo type={TextType.H2} className='project__about__left__title'>{title}</Typo>
                <p className='project__about__block__left__description'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla elementum rutrum ullamcorper.
                    Mauris et tincidunt elit. Aenean convallis lacinia quam. Nunc sit amet condimentum libero.
                    In ullamcorper turpis placerat massa posuere, id pellentesque sapien euismod. Mauris tincidunt laoreet eros,
                    nec fermentum enim consequat a.
                    {'\n'}{'\n'}
                    Nulla eu risus consequat, tempor diam ac, laoreet nisl. Etiam ac cursus sapien, ac tempor eros.
                    In fringilla neque at ultricies mollis. Nulla ullamcorper eros mauris
                    {'\n'}{'\n'}
                    Praesent volutpat enim in nulla euismod, sit amet pellentesque augue suscipit. Phasellus nec finibus felis.
                </p>
            </article>
            <Separator/>
            <article className='project__about__img__block'>
                <img src={img} className='project__about__img'/>
            </article>
        </section>
    )
}

export default ProjectAbout;