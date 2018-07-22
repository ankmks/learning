import React, { Component } from "react";

class Header extends Component{

    constructor(props){
        super(props);
        this.state = {date : new Date()};
        setInterval(() => this.tick(),1000);
    }

    tick(){
        this.setState({date : new Date()});
    }

    render(){
        return (
            <div className="container-fluid">
                <div className="row">
                        <div className="col-md-1 text-left ">
                            <img src="/images/logo/logo.png" alt="" />
                        </div>
                            <div className="col-md-2 text-left">
                            <h3 className="text-success mt-4">Healthy Cafe</h3>   
                        </div>
                        <div className="col-md-5"></div>
                        <div className="col-md-4 text-right">
                            <h5 className="text-muted mt-3">{this.state.date.toLocaleTimeString()}</h5>
                        </div>
                </div>
                <hr />                
            </div>

        );
    }
}



// const Header = () => {
//     return <h1>HEADER</h1>
// }

export default Header;