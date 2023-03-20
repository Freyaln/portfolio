import * as React from 'react';
import { FC } from 'react';
import './ProjectBar.scss';
import Typo, { TextType } from '../../Atoms/Typo/Typo';

/** @typedef IProjectDetail
 * @prop { string } client Who is the client for the project
 * @prop { number } year Build year of the project
 * @prop { string[] | string } lang Languages used to build the project
 * @prop { string } collab If there is multiple person working on the project
 * @prop { string } collbaLink Insert here the link to the github or other social of your collabs
 * @prop { string } finished The current state of the project
 * @prop { string } link Link to a live version of the project
 * @prop { string } title Name of the project
 */
interface IProjectDetail {
    client?: string;
    year?: number;
    lang?: string[] | string;
    collab?: string;
    collabLink?: string;
    finished?: string;
    link?: string;
    title?: string;
}

/** @param { IProjectDetail } props */
const ProjectBar: FC<IProjectDetail> = ({ client, year, lang, collab, link, collabLink, finished, title }) => {
    return (
        <section className="__main__detailbar__block">
            {client && (
                <div className="__main__detailbar__block__section">
                    <span className="__main__detailbar__block__section__title">Client</span>
                    {'\n'}
                    <Typo type={TextType.TEXT} className="__main__detailbar__block__section__text">
                        {client}
                    </Typo>
                </div>
            )}
            {year && (
                <div className="__main__detailbar__block__section">
                    <span className="__main__detailbar__block__section__title">Year</span>
                    {'\n'}
                    <Typo type={TextType.TEXT} className="__main__detailbar__block__section__text">
                        {year}
                    </Typo>
                </div>
            )}
            {lang && (
                <div className="__main__detailbar__block__section">
                    <span className="__main__detailbar__block__section__title">Technologies</span>
                    {'\n'}
                    <Typo type={TextType.TEXT} className="__main__detailbar__block__section__text">
                        {lang}
                    </Typo>
                </div>
            )}
            {collab && (
                <div className="__main__detailbar__block__section">
                    <span className="__main__detailbar__block__section__title">Collaborator</span>
                    {'\n'}
                    <Typo type={TextType.TEXT} className="__main__detailbar__block__section__text">
                        <a href={collabLink} target="_blank" rel="noreferrer">
                            {collab}
                        </a>
                    </Typo>
                </div>
            )}
            {finished && (
                <div className="__main__detailbar__block__section">
                    <span className="__main__detailbar__block__section__title">Current state</span>
                    {'\n'}
                    <Typo type={TextType.TEXT} className="__main__detailbar__block__section__text">
                        {finished}
                    </Typo>
                </div>
            )}
            {link && (
                <div className="__main__detailbar__block__section">
                    <span className="__main__detailbar__block__section__title">Website</span>
                    {'\n'}
                    <Typo type={TextType.TEXT} className="__main__detailbar__block__section__text">
                        <a href={link} target="_blank" rel="noreferrer">
                            {title}
                        </a>
                    </Typo>
                </div>
            )}
        </section>
    );
};

export default ProjectBar;
