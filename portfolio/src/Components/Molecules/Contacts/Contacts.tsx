import * as React from 'react';
import Typo, {TextType} from "../../Atoms/Typo/Typo";
import {FC} from "react";
import './Contacts.scss';
import Separator from "../../Atoms/Separator/Seperator";

interface IContactsProps {
    fullname?: boolean;
    lastname?: boolean;
    firstname?: boolean;
    email?: boolean;
    message?: boolean;
    messageRowCount?: number;
}

const Contacts: FC<IContactsProps>= ({fullname, lastname, firstname, email, message, messageRowCount}) => {

    return (
        <section className='contact' id='contact'>
            <Typo type={TextType.H2} className='contact__title'>
                Get in Touch
            </Typo>
            <div className='contact__block'>
            <form className='contact__block__form'>
                {fullname &&
                 <>
                    <label htmlFor='fullname'>
                    Fullname
                    </label>
                    <input type='text' name='fullname' autoComplete='off'/>
                 </>}
                {lastname &&
                 <>
                 <label htmlFor='lastname'>
                    Lastname
                 </label>
                    <input type='text' name='lastname' autoComplete='off'/>
                 </>}
                {firstname &&
                 <>
                <label htmlFor='firstname'>
                    Firstname
                </label>
                    <input type='text' name='firstname' autoComplete='off'/>
                </>}
                {email &&
                 <>
                <label htmlFor='email'>
                    Email
                </label>
                    <input type='text' name='email' autoComplete='off'/>
                </>}
                {message &&
                 <>
                 <label htmlFor='message'>
                    Message
                 </label>
                     <textarea name='message' rows={messageRowCount}/>
                 </>}
                <>
                        <input type='submit' name='submit' value='Get in touch' className='contact__block__form__submit'/>
                    </>
            </form>
            </div>
            <Separator/>
        </section>
    )
}

export default Contacts;