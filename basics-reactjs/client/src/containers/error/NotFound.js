import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const NotFound = () => {
    return (
        <div>
            <Header />
                <div className="container col-md-8 text-center">
                    <h1>404</h1>
                    <h3>Page can not be found.</h3>
                </div>
            <Footer />
        </div>
    )
}

export default NotFound;