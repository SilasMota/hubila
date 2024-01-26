import "./new.scss";
import Sidbar from "../../components/sidebar/Sidebar";
import Navabar from "../../components/navbar/Navbar";
import { DriveFolderUploadRounded } from "@mui/icons-material";
import { useState } from "react";

const New = ({ inputs, title }) => {

    const [file, setFile] = useState("");

    return (
        <div className="new">
            <Sidbar />
            <div className="newContainer">
                <Navabar />
                <div className="top">
                    <h1>{title}</h1>
                </div>
                <div className="bottom">
                    <div className="left">
                        <img src={
                            file ? URL.createObjectURL(file) : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg" 
                        } alt="" />
                    </div>
                    <div className="right">
                        <form>
                            <div className="formInputs">
                                <div className="formInput" >
                                    <label htmlFor="file" >Image: <DriveFolderUploadRounded className="icon" /></label>
                                    <input type="file" id="file" onChange={(e) => setFile(e.target.files[0])} style={{ display: "none" }} />
                                </div>

                                {inputs.map((input) => (
                                    <div className="formInput" key={input.id}>
                                        <label>{input.label}</label>
                                        <input type={input.type} placeholder={input.placeholder} />
                                    </div>
                                ))}
                            </div>
                            <button>Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default New;