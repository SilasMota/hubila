import { ChatRounded, DarkModeRounded, FullscreenRounded, LightModeRounded, MenuRounded, NotificationsRounded, SearchRounded, TranslateRounded } from "@mui/icons-material";
import "./navbar.scss"
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";

const Navabar = () => {
    const { darkMode, dispatch } = useContext(DarkModeContext);

    return ( 
        <div className="navbar">
            <div className="wrapper">
                <div className="search">
                    <input type="text" placeholder="Search..."/>
                    <SearchRounded className="icon"/>
                </div>
                <div className="items">
                    <div className="item">
                        <TranslateRounded/>
                        English
                    </div>
                    <div className="item" onClick={() => dispatch({type:"TOGGLE"})}>
                        {darkMode? <LightModeRounded/> : <DarkModeRounded/>}                        
                    </div>
                    <div className="item">
                        <FullscreenRounded/>
                    </div>
                    <div className="item">
                        <NotificationsRounded/>
                        <div className="counter">2</div>
                    </div>
                    <div className="item">
                        <ChatRounded/>
                        <div className="counter">4</div>
                    </div>
                    <div className="item">
                        <MenuRounded/>
                    </div>
                    <div className="item">
                        <img src="https://thispersondoesnotexist.com/"
                        className="avatar"
                        alt=""/>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Navabar;