import React from 'react';
import { Divider } from 'rsuite';
import footerStyles from'./MyFooter.module.css'

const myFooter = () => {
    return (
        <div className={footerStyles.myFooter}>
                <a style={{color: "white"}} href='//github.com/AKowshik' target='_blank'>GitHub</a>
                <Divider vertical />
                <a style={{color: "white"}} href='//linkedin.com/in/ankith-c-kowshik-306860168/' target='_blank'>LinkedIn</a>
                <Divider vertical />
                <a style={{color: "white"}} href='//www.instagram.com/ankith_c_kowshik/' target='_blank'>Instagram</a>
        </div>
    )
}

export default myFooter;