import React, { Component } from "react";
// const ProductItem = (props) => {
//     const {productName, unitPrice} = props;
//     return (
//         <div>
//             <p>{productName}</p>
//             <p>{unitPrice}</p>
//         </div>
//     )
// }

class ProductItem extends Component {

    constructor(props){
        super(props);
    }

    //e is event object.
    doSomething(e){
        alert(e.target.value);
    }

    render(){
        //console.log(this);
        //const {productName, unitPrice, thumbnail} = this.props;
        const {productName, unitPrice, thumbnail} = this.props.product;

        return (
        <div className="col-md-3 col-sm-6">
            <img className="img-fluid img-thumbnail" src={thumbnail} />
            <h6 className="mt-2">{productName}</h6>
            <p className="title text-right">{unitPrice} THB</p>
            
            {/* to check if there is onAddOrder exist */}
            {/* onAddOrder props trough MainScreen.js */}
            {this.props.onAddOrder &&
                <button className="btn btn-block btn-secondary title" 
                //value={unitPrice} onClick={(e) => this.doSomething(e)}
                
                onClick={() => this.props.onAddOrder(this.props.product)} >
                    buy
                </button>
            }


            {/* <button className="btn btn-block btn-danger title" 
            //onClick={() => console.log("clickedz  .. "+ this.props.product.id)}
            onClick={() => this.props.onDelProduct(this.props.product)} 
            >
                delete
            </button> */}


            {(this.props.onDelProduct || this.props.onEditProduct) &&
            
                <button className="btn btn-info col-5 title"
                onClick={() => this.props.onEditProduct(this.props.product)} >
                    edit
                </button>
            
            }


            {(this.props.onDelProduct || this.props.onEditProduct) &&

                <button className="btn btn-danger col-5 float-right title"
                onClick={() => this.props.onDelProduct(this.props.product)} >
                    delete
                </button>

            }

            <hr/>
            
        </div>
        )
    }
}

export default ProductItem;