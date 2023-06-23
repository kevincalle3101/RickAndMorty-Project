import React from "react";
import style from "./About.module.css"
const About = () => {

    return (
        <div className= {style.containerAbout}>
            <h1 className = {style.projectIn}>
                Project in progress...
            </h1>
            <h2>Hi, my name is Kevin Calle, I'm from Peru and I'm 22 years old and this it's my Rick and Morty Project</h2>
            <h2 className={style.isWorking}>
                kevincalle3101@gmail.com
            </h2>
            <br/>
            <br/>
            <br/>
            <br/>
            <h3 className = {style.projectIn} >Thank you for watching</h3>
        </div>
    )

}

export default About;
