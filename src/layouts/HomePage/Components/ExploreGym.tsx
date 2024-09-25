import React from "react";
import { Link, NavLink } from "react-router-dom";

export const ExploreGym = () => {
    return(
        <div className="p-5 bg-dark header">
            <div className="container-fluid py-5 text-white d-flex justify-content-center align-items-center">
                <div>
                    <h1 className="display-5 fw-bold">Welcome to our gym!</h1>
                    <p className="col-md-8 fs-4">Build your Future!</p>
                </div>
            </div>
        </div>
    );
}