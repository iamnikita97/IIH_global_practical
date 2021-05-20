import React from "react";
import Navbar from "../Container/Navbar";


/**
 * DashBoard
 * 
 * @author: Nikita Mahajan
 * 
 */

function DashBoard() {

    return (
        <div>
            <Navbar />
            <div className="d-flex" id="wrapper">
                <div id="page-content-wrapper">
                    <div className="container-fluid">
                        <h1 className="mt-2 text-primary">WelCome</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default DashBoard;