import React from "react";
import style from './Button.module.css'


type Button = {
    title: string
}

export function Button(props: Button) {
    return (
        <button className={style.button}>{props.title}</button>
    )
}