import * as React from 'react';
import {FC} from 'react';
import Typo, {TextType} from "../../Atoms/Typo/Typo";
import {InfosDatas, projectsImageList} from "../../../Datas/Datas";
import List from "../../Atoms/List/List";
import './Footer.scss'
import ProjectImage1 from "../../../img/proj1.png";
interface IFooterProps {
    dataList: InfosDatas[];
}

const Footer: FC<IFooterProps> = ({dataList}) => {

    const scrollToTop = () => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
    }

    return (
        <section className='footer'>
            <article className='footer__block__left'>
                <button className='footer__block__left__btnContact' onClick={scrollToTop}>
                    Return to the top
                </button>
                <button className='footer__block__left__btnCv'>
                    <a href={ProjectImage1} download='proj1.png'>Download my CV</a>
                </button>
            </article>
            <article className='footer__block__right'>
                <Typo type={TextType.H2} className='footer__block__right__title'>{}</Typo>
                <List classname='__list' optionsInfos={dataList}/>
            </article>
        </section>
    )
}

export default Footer;