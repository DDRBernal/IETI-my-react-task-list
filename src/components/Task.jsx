import {useEffect, useState } from "react";

export const Task = (props) => {
    const { name, end } = props;

    const [checked, setChecked] = useState(end);
    
    const handleCheckButton = () =>{
        setChecked(!checked);
    }

    return (
        <li>
                <h4>{name}</h4>
                <label>
                <input type="checkbox" checked={checked} onChange={handleCheckButton}> </input>

                </label>
                  
                
            
        </li>
    );
    
}