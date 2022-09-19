import * as React from 'react';
import { FC } from 'react';
import Header from "../Molecules/Header/Header";
import About from "../Molecules/About/About";
import {aboutMeText, personnalInfos, skillsDatas} from "../../Datas/Datas";
import './Homepage.scss';
import Projects from "../Molecules/Projects/Projects";
import Contacts from "../Molecules/Contacts/Contacts";
import Footer from "../Molecules/Footer/Footer";

const Homepage = () => {

    return (
        <>
            <Header headerClassname='header__block' catchPhrase='Always wondering how things work, experimenting and developing amazing projects'/>
            <main>
                <About titleLeft='About me' aboutMe={aboutMeText} titleRight='Skills' skillList={skillsDatas}/>
                <Projects/>
                <Contacts fullname={true} email={true} message={true} messageRowCount={10}/>
            </main>
            <footer>
                <Footer dataList={personnalInfos}/>
            </footer>
        </>
    )
}

export default Homepage;