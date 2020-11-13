import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfo } from '@fortawesome/free-solid-svg-icons'

import '../styles/FrontSection.css'

export default function FrontSection() {
    return (
        <div className="frontpage">
            <div className="frontpage__header">
                <div className="header">
                    <div className="options__left">
                        <ul className="options__list">
                            <li>projects</li>
                            <li>resume</li>
                        </ul>
                    </div>
                    <div className="brand__logo">
                        <img src="./letter-a.png" alt=""/>
                    </div>
                    <div className="options__right">
                        <ul className="options__list">
                            <li>blog</li>
                            <li>journey</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="frontpage__greetings">
                <div className="greetings">
                    <div className="avatar">
                        <img src="./avatar.jpg" alt=""/>
                    </div>
                    <div className="message">
                        
                        <p className="hello">Hello, I'm</p>
                        <p className="name">Aditya Saxena</p>
                        <p className="dsg">and I'm a 
                            <span className="post">
                                <span className="green">Soft</span><span className="blue">ware</span> 
                                <span className="orange">Engi</span><span className="red">neer</span>
                            </span>
                        </p>
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
