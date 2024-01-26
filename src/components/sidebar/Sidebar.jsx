import { AssignmentRounded, EditNotificationsRounded, EqualizerRounded, Inventory, LogoutRounded, PeopleRounded, PersonRounded, SettingsRounded, SpaceDashboard } from "@mui/icons-material";
import "./sidebar.scss"
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";

const Sidbar = () => {

    const { dispatch } = useContext(DarkModeContext);

    return ( 
        <div className="sidebar">
            <div className="top">
                <Link to="/">
                    <span className="logo">HUBILA</span>
                </Link>
            </div>
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <Link to = "/">
                        <li>
                            <SpaceDashboard className="icon"/>
                            <span>Dashboard</span>
                        </li>
                    </Link>
                    
                    <p className="title">LISTS</p>
                    <Link to = "/users">
                        <li>
                            <PeopleRounded className="icon"/>
                            <span>User</span>
                        </li>
                    </Link>
                    <Link to = "/products">
                        <li>
                            <Inventory className="icon"/>
                            <span>Products</span>
                        </li>
                    </Link>
                    <li>
                        <AssignmentRounded className="icon"/>
                        <span>Orders</span>
                    </li>
                    <li>
                        <EqualizerRounded className="icon"/>
                        <span>Stats</span>
                    </li>
                    <li>
                        <EditNotificationsRounded className="icon"/>
                        <span>Notifications</span>
                    </li>
                    <p className="title">USER</p>
                    <li>
                        <SettingsRounded className="icon"/>
                        <span>Settings</span>
                    </li>
                    <li>
                        <PersonRounded className="icon"/>
                        <span>Profile</span>
                    </li>
                    <li>
                        <LogoutRounded className="icon"/>
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
            <div className="bottom">
                <div className="colorOption" onClick={() => dispatch({type:"LIGHT"})}></div>
                <div className="colorOption" onClick={() => dispatch({type:"DARK"})}></div>
            </div>
        </div>
     );
}
 
export default Sidbar;