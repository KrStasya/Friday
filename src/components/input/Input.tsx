import style from './input.module.css'
import React from "react";

export function Input() {
    return (
        <input className={style.input} placeholder={"Enter field"}/>
    )
}