import { KeyboardArrowUpRounded, PeopleRounded, AssignmentRounded, AttachMoneyRounded, AccountBalanceWalletRounded } from "@mui/icons-material";
import "./widget.scss"

const Widget = ({ type }) => {

    let data;

    //temp
    const amount = 100;
    const diff = 20;

    switch(type){
        case "user":
            data = {
                title:"USERS",
                isMoney: false,
                link: "See all users",
                incon: <PeopleRounded className="icon"/>
            }
            break;
        case "order":
            data = {
                title:"ORDERS",
                isMoney: false,
                link: "View all orders",
                incon: <AssignmentRounded className="icon"/>
            }
            break;
        case "earning":
            data = {
                title:"EARNINGS",
                isMoney: true,
                link: "View net earnings",
                incon: <AttachMoneyRounded className="icon"/>
            }
            break;
        
        case "balance":
            data = {
                title:"BALANCE",
                isMoney: true,
                link: "See details",
                incon: <AccountBalanceWalletRounded className="icon"/>
            }
            break;
        default :
            data = {
            title:"",
            isMoney: true,
            link: "See details",
            incon: ""
        }
            break;
    }

    return ( 
        <div className="widget">
            <div className="left">
                <span className="title">{data.title}</span>
                <span className="counter">{data.isMoney && "$"} {amount}</span>
                <span className="link">{data.link}</span>
            </div>
            <div className="right">
                <div className="percentage positive">
                    <KeyboardArrowUpRounded/>
                    {diff}%
                </div>
                {data.incon}
            </div>
        </div>
     );
}
 
export default Widget;