import { ChatRounded, DarkModeRounded, FullscreenRounded, MenuRounded, NotificationsRounded, SearchRounded, TranslateRounded } from "@mui/icons-material";
import "./navbar.scss"

const Navabar = () => {
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
                    <div className="item">
                        <DarkModeRounded/>
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
                        <img src="https://lh3.googleusercontent.com/a/ACg8ocIMeALVbVgpXEZWzKUmmcq-fs0Usv2OWP_xGjjqc9o6=s96-c"
                        className="avatar"
                        ></img>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Navabar;