import * as React from 'react';
import {faArrowLeftLong} from "@fortawesome/free-solid-svg-icons/faArrowLeftLong";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";
import './BackTo.scss';

const BackTo = () => {
    return (
        <div className='__detail__header__back'>
            <Link to={'/'}>
                <FontAwesomeIcon icon={faArrowLeftLong} style={{color: "white" }}/>
            </Link>
        </div>
    )
}

export default BackTo;