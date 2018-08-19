import React, {Component} from 'react';
import axios from "axios";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

class Order extends Component{
    constructor(props){
        super(props);
        this.state = {orders:null}
    }

    componentDidMount(){
        axios.get("http://localhost:3010/orders")
        .then(
            res => {
                this.setState({orders: res.data});
            }
        );
    }

    delOrder(order){
        console.log("deleting "+ order.id);
        axios.delete("http://localhost:3010/orders/" + order.id).then(res => {
                axios.get("http://localhost:3010/orders").then(
                    res => {
                        this.setState({orders : res.data});
                    }
                );     
            });
    }


    showOrders(){
        return this.state.orders && this.state.orders.map(order => {
                const date = new Date(order.orderedDate);
                return(
                    <div key={order.id} className="col-md-3">
                        <hr />
                        <p className="text-right">
                            <button className="btn btn-danger btn-sm title" onClick={() => this.delOrder(order)}>X</button>
                        </p>
                        <h6>Date: {date.toLocaleDateString()} {date.toLocaleTimeString()}</h6>
                        <ul>
                            //check first if there are data exist. && 
                            {order.orders && order.orders.map(record => {
                                return (
                                    <li 
                                    key={record.product.id}
                                    >
                                        {record.product.productName} x {record.quantity} = {record.product.unitPrice * record.quantity }
                                    </li>)
                            })}
                        </ul>
                        <p className="title">Total {order.totalPrice}</p>
                    </div>
                )
            })
    }


    render(){
        return(
            <div>
                <Header />
                    <div className="container-fluid">
                        <h1>Orders</h1>
                        <div className="row">
                            {this.showOrders()}
                        </div>
                    </div>
                    <Footer  name="Chai" email="Yo@gmail.com" />
            </div>
        );
    }

}

export default Order;