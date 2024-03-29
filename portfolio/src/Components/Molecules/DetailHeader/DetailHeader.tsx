import * as React from 'react';
import { FC } from 'react';
import Typo, { TextType } from '../../Atoms/Typo/Typo';
import './DetailHeader.scss';
import BackTo from '../../Atoms/BackTo/BackTo';

/** @typedef IDetailHeaderPropsInterface
 * @prop { string } title Used in the 'header' of the project page
 * @prop { string } src Used to display the img of the header of the project clicked
 */
interface IDetailHeaderPropsInterface {
    title?: string;
    src?: string;
}

/** @param {IDetailHeaderPropsInterface} props */
const DetailHeader: FC<IDetailHeaderPropsInterface> = ({ title, src }) => {
    return (
        <header className="detail__header" id="detail__header">
            <div className="detail__header__block">
                <img className="detail__header__block__image" src={src} />
                <BackTo />
                <Typo type={TextType.H1} className="detail__header__block__title">
                    {title}
                </Typo>
            </div>
        </header>
    );
};

export default DetailHeader;
