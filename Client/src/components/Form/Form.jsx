import React from "react";
import style from "./Form.module.css"
import {useState} from "react";
import validation from "../Validation/Validation";
import { IonIcon } from '@ionic/react';
import { mailOutline, lockClosedOutline } from 'ionicons/icons'; 

const Form = ({login}) =>{
    const[userData,setUserData] = useState({
        email:'',
        password:''
     })

     const[errors, setErrors] = useState({})

     const handleChange =(event)=>{
        setUserData({
            ...userData,
           [event.target.name]:event.target.value

        })
        setErrors(validation({
            ...userData,
            [event.target.name]:event.target.value
        }))
     }
     const handleSubmit = (event)=>{
        event.preventDefault();
        login(userData);
     }
    return(
        <div className={style.principalContainer} >
        <form className = {style.containerForm} onClick={handleSubmit}>
            <h2 className={style.loginText}  >Login</h2>
            <div className={style.divEmail} >
                <IonIcon icon={mailOutline}  className={style.icon} />
                <label htmlFor = "email" className={style.aLabel} >email</label>
                <input type = "email" name ="email" value ={userData.email}
                onChange ={handleChange} id = "email"  className={style.divEmailInput} />
                {errors.email && <p className= {style.messageError}>{errors.email}</p> }
            </div>
            <div className= {style.divPassword} >
                <IonIcon icon={lockClosedOutline} className={style.icon}/>
                <label htmlFor = "password" className={style.aLabel}>password</label>
                <input type = "text" name="password" value ={userData.password} 
                onChange ={handleChange} id = "password"  className={style.divPasswordInput} />
                {errors.password && <p className= {style.messageError}>{errors.password}</p> }
            </div>
            <button className={style.button} >Submit</button>
        </form>
        </div>
    )
}
export default Form;