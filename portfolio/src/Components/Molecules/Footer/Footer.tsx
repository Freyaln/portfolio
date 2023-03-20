import * as React from 'react';
import { FC } from 'react';
import Typo, { TextType } from '../../Atoms/Typo/Typo';
import { InfosDatas } from '../../../Datas/Datas';
import List from '../../Atoms/List/List';
import CvEn from '../../../CV/CvEnglish.pdf';
import './Footer.scss';

/** @typedef IFooterProps
 * @prop { InfosDatas[] } dataList Display a predifined list from the List component (must include a dataset with img + text)
 */
interface IFooterProps {
    dataList: InfosDatas[];
}

/** @param { IFooterProps } props */
const Footer: FC<IFooterProps> = ({ dataList }) => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };

    return (
        <section className="footer">
            <article className="footer__block__left">
                <button className="footer__block__left__btnContact" onClick={scrollToTop}>
                    Return to the top
                </button>
                <button className="footer__block__left__btnCv">
                    <a href={CvEn} download="CV-English">
                        Download my CV
                    </a>
                </button>
            </article>
            <article className="footer__block__right">
                <List classname="__list" optionsInfos={dataList} />
            </article>
        </section>
    );
};

export default Footer;
