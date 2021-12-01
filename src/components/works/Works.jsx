import { useState } from "react";
import "./works.scss"

export default function Works() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const data = [
        {
            id: "1",
            icon: "./assets/dev.png",
            title: "Exakis-Nelite",
            description:
            "Web development internship: development of a web application for a client while working in an Agile team.",
            img:
            "./assets/Exakis-Nelite.png" 
        },
        {
            id: "2",
            icon: "./assets/pharma.png",
            title: "Pharmaceutical Institute",
            description:
            "Internship carried out in the water and air purification plant of Pharmaceutical Institute",
            img:
            "./assets/PHI.png" 
        }
    ];

    const handleClick =(sens)=>{
        sens ==="left" 
        ? setCurrentSlide(currentSlide > 0? currentSlide-1 :1) 
        : setCurrentSlide(currentSlide<data.length-1 ?currentSlide+1 :0)
    }
    return (
        <div className = "works" id="works">
            <div className="slider" style ={{transform:`translateX(-${currentSlide *100}vw)`}}>
                {data.map(data=>(
                   <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <img src={data.icon} alt=""/>
                                </div>
                                <h2>{data.title}</h2>
                                <p>
                                    {data.description}
                                </p>
                                <span>Projects</span>
                            </div>
                        </div>
                        <div className="right">
                            <img src={data.img} alt=""/>
                        </div>
                    </div>
                </div> ))}
                
            </div>

            <img src="assets/arrow.png" className = "arrow left"alt="" onClick={()=>handleClick("left")}/>
            <img src="assets/arrow.png" className = "arrow right"alt="" onClick={()=>handleClick("right")}/>
            
        </div>
    )
}
