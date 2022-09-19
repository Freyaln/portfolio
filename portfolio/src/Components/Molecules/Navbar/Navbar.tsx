import * as React from 'react';
import {FC} from 'react';
import Typo, {TextType} from "../../Atoms/Typo/Typo";
import { v4 as uuidv4 } from 'uuid';
import './Navbar.scss';
import {navbarDatas} from "../../../Datas/Datas";
import { Link } from 'react-scroll';

interface INavbarPropsInterface {
    classname: string;
    options: navbarDatas[];
}

const Navbar: FC<INavbarPropsInterface> = ({classname, options }) => {

    return (
        <nav>
            <ol className={classname}>
                {options.map((items, index) =>

                        <li key={uuidv4()}>
                            <Link key={uuidv4()} activeClass='active' to={items.path} smooth={true}>
                                <Typo
                                    type={TextType.TEXT}
                                    className='header__block__navbar__items'>
                                    {items.title}
                                </Typo>
                            </Link>
                        </li>
                    )}
            </ol>
        </nav>
    );
};

export default Navbar;