import * as React from 'react';
import { FC } from 'react';

export enum TextType {
    TEXT,
    H1,
    H2,
    H3,
    H4,
    H5,
    H6,
}

/** @typedef ITypoProps
 * @prop { TextType } type Enum for 'p to h6' tags
 * @prop { string } classname The className of the tag
 * @prop { React.ReactNode } children
 */
interface ITypoProps {
    type?: TextType;
    className?: string;
    children: React.ReactNode;
}

/** @param {ITypoProps} props */
const Typo: FC<ITypoProps> = ({ type, children, className }) => {
    switch (type) {
        case TextType.TEXT:
            return <p className={className}>{children}</p>;
        case TextType.H1:
            return <h1 className={className}>{children}</h1>;
        case TextType.H2:
            return <h2 className={className}>{children}</h2>;
        case TextType.H3:
            return <h3 className={className}>{children}</h3>;
        case TextType.H4:
            return <h4 className={className}>{children}</h4>;
        case TextType.H5:
            return <h5 className={className}>{children}</h5>;
        case TextType.H6:
            return <h6 className={className}>{children}</h6>;
        default:
            return <span className={className}>{children}</span>;
    }
};

export default Typo;
