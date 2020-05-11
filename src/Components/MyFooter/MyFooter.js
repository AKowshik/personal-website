import React from 'react';
import { Divider } from 'rsuite';
import footerStyles from'./MyFooter.module.css'

const myFooter = () => {
    return (
        <div className={footerStyles.myFooter}>
                <a style={{color: "white"}} href='//github.com/AKowshik'>GitHub</a>
                <Divider vertical />
                <a style={{color: "white"}} href='//linkedin.com/in/ankith-c-kowshik-306860168/'>LinkedIn</a>
                <Divider vertical />
                <a style={{color: "white"}} href='//www.instagram.com/ankith_c_kowshik/'>Instagram</a>
        </div>
    )
}

export default myFooter;