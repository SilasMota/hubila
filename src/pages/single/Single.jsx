import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

const Single = () => {
    return (
        <div className="single">
            <Sidebar />
            <div className="singleContainer">
                <Navbar />
                <div className="top">
                    <div className="left">
                        <h1 className="title">Information</h1>
                        {/* <div className="item">
                            <img src="https://thispersondoesnotexist.com/" alt="" className="itemImg" />
                        </div> */}
                    </div>
                    <div className="right"></div>
                </div>
                <div className="bottom"></div>
            </div>
        </div>
    );
}

export default Single;