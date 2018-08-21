import React, { Component } from "react";
//import axios from "axios";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProductList from "../../components/product/ProductList";

import { withRouter } from "react-router-dom";

import { connect } from "react-redux";
import { productsFetch, productDelete } from "../../actions";


class Product extends Component {

    constructor(props) {
        super(props);
        //this.state = { products : null };

        this.delProduct = this.delProduct.bind(this);
        this.editProduct = this.editProduct.bind(this);
        
        this.consoleTest = this.consoleTest.bind(this);
    }

    componentDidMount(){

        // axios.get("http://localhost:3011/products/")
        // .then(
        //     res => {
        //     this.setState({products: res.data});
        // });

        //redux
        this.props.productsFetch();
    }


    editProduct(product){
        this.props.history.push('products/edit/' + product.id);
    }


    // delProduct(product){
        
    //     // axios({
    //     //     method: 'DELETE',
    //     //     url: 'http://localhost:3010/products/'+product.id,
    //     //     headers: { 'Content-Type': 'application/json' },
    //     //   });


    //      axios.delete("http://localhost:3011/products/" + product.id)
    //     .then(res => {
    //         axios.get("http://localhost:3011/products/").then(
    //             res => {
    //                 this.setState({products : res.data})
    //             }
    //         );
    //     });
    //     console.log("gonna delete"+product.id + " ... " + product.unitPrice);

    // }

        delProduct(product){
            //this works!!
        // console.log("deleting "+ product.id);
        // axios.delete("http://localhost:3011/products/" + product.id).then(res => {
        //         axios.get("http://localhost:3011/products/").then(
        //             res => {
        //                 this.setState({products : res.data});
        //             }
        //         );     
        //     });

        this.props.productDelete(product.id);
    }

    consoleTest(){
        console.log("Clicked is ----- ");
    }

    render(){
        return (
            <div>
                <Header />
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-6">
                                <h1>Products</h1>
                            </div>
                            <div className="col-6">
                                <button className="btn btn-success title float-right"
                                //onClick={() => this.consoleTest()}
                                onClick={() => this.props.history.push('products/add')}
                                >Add</button>
                            </div>                        
                        </div>
                        <ProductList 
                            //products={this.state.products}
                            products={this.props.products}
                            onDelProduct={this.delProduct}
                            onEditProduct={this.editProduct}

                            consoleTest={this.consoleTest}
                        />
                    </div>
                <Footer />
            </div>
        );
    }
}

function mapStateToProps({products}) {
    return { products };
}


export default withRouter(connect(mapStateToProps, {productsFetch, productDelete })(Product));