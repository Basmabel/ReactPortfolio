import PortfolioList from "../portfolioList/PortfolioList"
import "./portfolio.scss"
import { useState, useEffect } from "react"
import {websitePortfolio,
    webappPortfolio,
    javaAppPortfolio,
    chatAppPortfolio,
    CppPortfolio,
    otherPortfolio} from "../../data";


export default function Portfolio() {
    const [selected, setSelected] = useState("website");
    const [data, setData] = useState([]);
    const list =[
        {
            id: "website",
            title: "Website",
        },
        {
            id: "WebApp",
            title: "Web Application",
        },
        {
            id: "JavaApp",
            title: "Java Application",
        },
        {
            id: "ChatApp",
            title: "Chat Application",
        },
        {
            id: "C++App",
            title: "C++ Application",
        },
        {
            id: "Other",
            title: "Other",
        }
    ];

    useEffect(() => {
        switch(selected){
            case "website":
                setData(websitePortfolio);
                break;
            case "WebApp":
                setData(webappPortfolio);
                break;
            case "JavaApp":
                setData(javaAppPortfolio);
                break;
            case "ChatApp":
                setData(chatAppPortfolio);
                break;
            case "C++App":
                setData(CppPortfolio);
                break;
            case "Other":
                setData(otherPortfolio);
                break;
            default:
                setData(websitePortfolio);
        }
    }, [selected])
    return (
        <div className = "portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map(item=>(
                <PortfolioList 
                    title={item.title} 
                    active={selected === item.id} 
                    setSelected ={setSelected}
                    id = {item.id}
                />
                ))}
            </ul>
            <div className="container">
                {data.map(data=>(
                    <div className="item">
                    <img src = {data.img} alt="" />
                    <h3>{data.title}</h3>
                </div>
                ))}
                
            </div>
        </div>
    )
}
