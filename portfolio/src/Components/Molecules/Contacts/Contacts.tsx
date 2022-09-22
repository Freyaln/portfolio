import * as React from 'react';
import {FC, useEffect, useRef, useState} from 'react';
import Typo, {TextType} from "../../Atoms/Typo/Typo";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from '@emailjs/browser';
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
    const [sent, setSent] = useState<boolean>(false)
    const [isDisabled, setIdDisabled] = useState<boolean>(true)
    const form = useRef(null);
    const captchaRef = useRef(null)
    const REACT_APP_SERVICE_ID: string = process.env.REACT_APP_SERVICE_ID!;
    const REACT_APP_TEMPLATE_ID: string = process.env.REACT_APP_TEMPLATE_ID!;
    const REACT_APP_PUBLIC_KEY: string = process.env.REACT_APP_PUBLIC_KEY!;
    const REACT_APP_RECAPTCHA_KEY: string = process.env.REACT_APP_RECAPTCHA2!;

    function handleCaptcha() {
        setIdDisabled(!isDisabled)
    }

    const sendEmail = (e:  React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        emailjs.sendForm(REACT_APP_SERVICE_ID, REACT_APP_TEMPLATE_ID, form.current!, REACT_APP_PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                setSent(true)
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <section className='contact' id='contact'>
            <Typo type={TextType.H2} className='contact__title'>
                Get in Touch
            </Typo>
            <div className='contact__block'>
                {sent ? <article className='contact__block__form__sent'>
                    <Typo type={TextType.H2}>
                        I will read you very soon !
                    </Typo>
                </article> :
                <form className='contact__block__form' ref={form} onSubmit={sendEmail}>
                {fullname &&
                 <>
                    <label htmlFor='fullname'>
                    Fullname
                    </label>
                    <input type='text' name='fullname' autoComplete='off' required={true}/>
                 </>}
                {lastname &&
                 <>
                 <label htmlFor='lastname'>
                    Lastname
                 </label>
                    <input type='text' name='lastname' autoComplete='off' required={true}/>
                 </>}
                {firstname &&
                 <>
                <label htmlFor='firstname'>
                    Firstname
                </label>
                    <input type='text' name='firstname' autoComplete='off' required={true}/>
                </>}
                {email &&
                 <>
                <label htmlFor='email'>
                    Email
                </label>
                    <input type='email' name='email' autoComplete='new-password' required={true}/>
                </>}
                {message &&
                 <>
                 <label htmlFor='message'>
                    Message
                 </label>
                     <textarea name='message' rows={messageRowCount} required={true}/>
                 </>}
                    <ReCAPTCHA
                        sitekey={REACT_APP_RECAPTCHA_KEY}
                        ref={captchaRef}
                        onChange={handleCaptcha}/>
                <>
                        <input type='submit' name='submit' value='Get in touch' className='contact__block__form__submit' disabled={isDisabled}/>
                    </>
            </form>
                }
            </div>
            <Separator/>
        </section>
    )
}

export default Contacts;