import * as React from 'react';
import {FC} from 'react';
import './ProjectBar.scss';
import Typo, {TextType} from "../../Atoms/Typo/Typo";

interface ProjectDetail {
    client? : string;
    year? : number;
    lang? : string[] | string;
    collab? : string;
    collabLink? : string;
    finished? : string;
}

const ProjectBar: FC<ProjectDetail> = ({client, year, lang, collab, collabLink, finished}) => {
    return (
        <section className='__main__detailbar__block'>
            <div className='__main__detailbar__block__section'>
                <span className='__main__detailbar__block__section__title'>Client</span>
                {'\n'}
                <Typo type={TextType.TEXT} className='__main__detailbar__block__section__text'>{client}</Typo>
            </div>
            <div className='__main__detailbar__block__section'>
                <span className='__main__detailbar__block__section__title'>Year</span>
                {'\n'}
                <Typo type={TextType.TEXT} className='__main__detailbar__block__section__text'>{year}</Typo>
            </div>
            <div className='__main__detailbar__block__section'>
                <span className='__main__detailbar__block__section__title'>Technologies</span>
                {'\n'}
                <Typo type={TextType.TEXT} className='__main__detailbar__block__section__text'>{lang}</Typo>
            </div>
            <div className='__main__detailbar__block__section'>
                <span className='__main__detailbar__block__section__title'>Collaborator</span>
                {'\n'}
                <Typo type={TextType.TEXT} className='__main__detailbar__block__section__text'><a href={collabLink} target='_blank' rel="noreferrer">{collab}</a></Typo>
            </div>
            <div className='__main__detailbar__block__section'>
                <span className='__main__detailbar__block__section__title'>Current state</span>
                {'\n'}
                <Typo type={TextType.TEXT} className='__main__detailbar__block__section__text'>{finished}</Typo>
            </div>
        </section>
    )
}

export default ProjectBar;