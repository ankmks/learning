import React, { Component } from "react";
import ProductItem from "./ProductItem";

class ProductList extends Component {
      
    showProducts(){
        if(this.props.products){
            // return this.props.products.map(product => (
            //     <ProductItem productName={product.productName} unitPrice={product.unitPrice} />
            // ))


            //map each product passed via props and render  the html tag [ProductItem].
            return this.props.products && this.props.products.map(product =>  
            <ProductItem key={product.productId}
               //{...product} 
               product={product} 
                   onAddOrder={this.props.onAddOrder} 
                   onDelProduct={this.props.onDelProduct}
                   onEditProduct={this.props.onEditProduct}

                   consoleTest={this.props.consoleTest}
               />

            )
        }
    }
    
    render(){
        return(
            <div className="row">
                {this.showProducts()}
            </div>
        );
    }
}

export default ProductList;