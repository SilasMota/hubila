import Charts from "../../components/chart/Chart";
import Featured from "../../components/featured/Featured";
import Navabar from "../../components/navbar/Navbar";
import Sidbar from "../../components/sidebar/Sidebar";
import Widget from "../../components/widgets/Widget";
import "./home.scss";

const Home = () => {
    return (
        <div className="home">
            <Sidbar/>
            <div className="homeContainer">
                <Navabar/>
                <div className="widgets">
                    <Widget type="user"/>
                    <Widget type="order"/>
                    <Widget type="earning"/>
                    <Widget type="balance"/>
                </div>
                <div className="charts">
                    <Featured/>
                    <Charts/>
                </div>
                <div className="listContainer">
                    <div className="listTitle">Latest Transactions</div>
                </div>
            </div>
        </div>
    );
}

export default Home;