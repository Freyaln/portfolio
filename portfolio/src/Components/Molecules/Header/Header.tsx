import * as React from 'react';
import { FC } from 'react';
import Typo, { TextType } from '../../Atoms/Typo/Typo';
import Navbar from '../Navbar/Navbar';
import { navbarProps } from '../../../Datas/Datas';
import './Header.scss';

/** @typedef IHeaderPropsInterface
 * @prop { string } headerClassname classname for the container inside the header
 * @prop { string } catchPhrase Text on top of the header
 */
interface IHeaderPropsInterface {
    headerClassname?: string;
    catchPhrase?: string;
}

/** @param {IHeaderPropsInterface} props */
const Header: FC<IHeaderPropsInterface> = ({ headerClassname, catchPhrase }) => {
    return (
        <header className="header" id="header">
            <div className={headerClassname}>
                <Typo type={TextType.H1} className="header__block__title">
                    {catchPhrase}
                </Typo>
                <Navbar classname="header__block__navbar" options={navbarProps} />
            </div>
        </header>
    );
};

export default Header;
