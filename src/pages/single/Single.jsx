import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart"
import List from "../../components/table/Table"

const Single = () => {
    return (
        <div className="single">
            <Sidebar />
            <div className="singleContainer">
                <Navbar />
                <div className="top">
                    <div className="left">
                        <div className="editButton">Edit</div>
                        <h1 className="title">Information</h1>
                        <div className="item">
                            <img src="https://thispersondoesnotexist.com/" alt="" className="itemImg" />
                            <div className="details">
                                <h1 className="itemTitle">Jane Doe</h1>
                                <div className="detailItem">
                                    <span className="itemKey">Email:</span>
                                    <span className="itemValue">janedoew@gmail.com</span>
                                </div>

                                <div className="detailItem">
                                    <span className="itemKey">Phone:</span>
                                    <span className="itemValue">+69 9420 1345</span>
                                </div>

                                <div className="detailItem">
                                    <span className="itemKey">Adress:</span>
                                    <span className="itemValue">Rua dos boobos numero 0</span>
                                </div>
                            </div>
                        </div>                        
                    </div>
                    <div className="right">
                        <Chart aspect={4/1} title={"User spending last 6 Months"}/>
                    </div>
                </div>
                <div className="bottom">
                    <h1 className="title">Last Transactions</h1>
                    <List/>
                </div>
            </div>
        </div>
    );
}

export default Single;