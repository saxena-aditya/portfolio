import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfo } from '@fortawesome/free-solid-svg-icons'

import '../styles/FrontSection.css'

export default function FrontSection() {
    return (
        <div className="frontpage">
            <div className="frontpage__header">

            </div>
            <div className="frontpage__greetings">
                <div className="greetings">
                    <div className="avatar">
                        <img src="./avatar.jpg" alt=""/>
                    </div>
                    <div className="message">
                        
                        <p className="hello">Hello, I'm</p>
                        <p className="name">Aditya Saxena</p>
                        <p className="dsg">and I'm a <span className="post">Software Engineer</span></p>
                        <p className="company"> @ Samsung Research Institute</p>
                        <div className="bg__icon"><FontAwesomeIcon icon={faInfo} /></div>
                    </div>
                </div>
            </div>
            <div className="frontpage__footer">
                <img src="./bg.png" alt="" className="footer__image"/>
            </div>
        </div>
    )
}
