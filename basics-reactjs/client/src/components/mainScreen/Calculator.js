import React, { Component } from "react";


class Calculator extends Component {

    showOrders(orders){
        if(!orders || orders.length === 0){
            return <li className="text-right text-muted title">No items added.</li>
        } else {
            return orders.map(order => {
                return (
                    <li className="text-right text-success title">
                    {order.product.productName} x {order.quantity} = {order.product.unitPrice * order.quantity}
                    <button className="btn btn-light btn-sm" onClick={() => this.props.onDelOrder(order.product)}>X</button>
                    </li>
                )
                
            })
        }
    }


    render(){
        //1. take these from props.
        const { totalPrice, orders } = this.props;


        return(
            <div>
                <h1 className="text-right">{totalPrice}</h1>
                <hr />
                <ul className="list-unstyled">
                    {/* <li className="text-right text-success title">
                        Bing Su x 1 = 200.0
                        <button className="btn btn-light btn-sm">X</button>
                    </li>
                    <li  className="text-right text-success title">
                        French Fried x 1 = 140.0
                        <button className="btn btn-light btn-sm">X</button>
                    </li> */}
                    {this.showOrders(orders)}
                </ul>
                <hr />
                <button className="btn btn-block btn-danger title" onClick={() => this.props.onConfirmOrder()}>Ok</button>
                <button className="btn btn-block btn-secondary title" onClick={() => this.props.onCancelOrder()}>Cancel</button>
            </div>
        );
    }
    
}

export default Calculator;