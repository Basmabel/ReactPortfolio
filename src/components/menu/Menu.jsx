import "./menu.scss";
import GetAppIcon from '@material-ui/icons/GetApp';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

export default function Menu({menuOpen, setMenuOpen}) {
    return (
        <div className ={"menu "+(menuOpen && "active")}>
            <ul>
                <li onClick={()=>setMenuOpen(false)}>
                 <a href="#intro">Home</a>   
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                 <a href="#portfolio">Portfolio</a>   
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                 <a href="#works">Works</a>   
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                 <a href="#contact">Contact</a>   
                </li>
                <li>
                <GetAppIcon className="icon"/>
                <a href='assets/BasmaBelahcen.pdf' download>  Resume</a>   
                </li>
                <li>
                <LinkedInIcon className="icon"/>
                <a href="https://www.linkedin.com/in/basma-belahcen/">  LinkedIn</a>   
                </li>
                <li>
                <GitHubIcon className="icon"/>
                <a href="https://github.com/Basmabel">  github</a>   
                </li>
            </ul>
        </div>
    )
}
