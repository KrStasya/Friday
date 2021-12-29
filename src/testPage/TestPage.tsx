import React from 'react'
import {Button} from "../components/button/Button";
import {Input} from "../components/input/Input";
import Checkbox from "../components/checkbox/Checkbox";


function TestPage(){
    return (
        <div>
            <hr/>
            <Button title={'Example'}/>
            <Input/>
            <Checkbox/>
        </div>
    )
}
export default TestPage