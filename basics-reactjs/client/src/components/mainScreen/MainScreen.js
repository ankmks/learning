import React, { Component } from "react";
import Calculator from "./Calculator";
import ProductList from "../product/ProductList";
import axios from "axios";

class MainScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {totalPrice: 0, orders: [], confirm: false, msg: ''};

        this.addOrder = this.addOrder.bind(this);
        this.delOrder = this.delOrder.bind(this);
        this.cancelOrder = this.cancelOrder.bind(this);
        this.confirmOrder =  this.confirmOrder.bind(this);
    }
//product come from mains screen.
    addOrder(product){
        let findOrder = this.state.orders.find(order => order.product.productId === product.productId);//product come from main screen.
        //do what matched.
        if(findOrder){
            findOrder.quantity++;
        }else{
            this.state.orders.push({product: product, quantity: 1});//for the first time.
        }

        const totalPrice = this.state.totalPrice + parseInt(product.unitPrice);
        this.setState({totalPrice: totalPrice, orders: this.state.orders, confirm: false});
    }

     delOrder(product){
        let findOrder = this.state.orders.find(order => order.product.productId === product.productId);
        let resultOrder = this.state.orders.filter(order => order.product.productId !== product.productId);
        const totalPrice = this.state.totalPrice - (findOrder.quantity * parseInt(findOrder.product.unitPrice));
        this.setState({totalPrice: totalPrice, orders: resultOrder, confirm: false});
    }

    cancelOrder(){
        this.setState({ totalPrice: 0, orders: [], confirm: false });
    }


    confirmOrder(){
        const { totalPrice, orders } = this.state;
        if(orders && orders.length > 0){
            axios.post("http://localhost:3010/orders", {orderedDate : new Date(), totalPrice, orders})
            .then(res => {this.setState({totalPrice: 0, orders: [], confirm: true, msg: 'Order saved successfully.'});
            })  
        }else{
            this.setState({totalPrice: 0, orders: [], confirm: true, msg: 'Please select from menu.'});
        }
    }

    render(){
        return (
            <div className="container-fluid">
                {this.state.confirm &&
                <div className="alert alert-secondary title text-right" role="alert">
                    {this.state.msg}                    
                    {/* <h6>Your order has been successfully submitted and will be processed immediately.</h6> */}
                </div>
                   }
                <div className="row">
                    <div className="col-md-9">
                    {/* //props came from App.js */}
                        <ProductList products={this.props.products} onAddOrder={this.addOrder} />
                    </div>
                    <div className="col-md-3">
                        <Calculator totalPrice={this.state.totalPrice} orders={this.state.orders} onDelOrder={this.delOrder}
                        onCancelOrder={this.cancelOrder}  onConfirmOrder = {this.confirmOrder} />
                    </div>
                </div>
            </div>
        );
    }
}


export default MainScreen;