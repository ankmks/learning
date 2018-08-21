import React, { Component } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import MainScreen from "../components/mainScreen/MainScreen";
//import axios from "axios";
import { connect } from "react-redux";
import { productsFetch } from "../actions";

class Home extends Component {
  constructor(props){
    super(props);

    //use store instead
    //this.state = {products : ""}
  }


  componentDidMount(){
    //1
  //     this.setState({
  //       products: [
  //         { productId: 1, productName: "Salad", unitPrice: "120", thumbnail: "/images/product/1.jpg" },
  //         { productId: 2, productName: "Fried Chicken", unitPrice: "90", thumbnail: "/images/product/2.jpg" },
  //         { productId: 3, productName: "Bingsu", unitPrice: "200", thumbnail: "/images/product/3.jpg" },
  //         { productId: 4, productName: "French Fried", unitPrice: "140", thumbnail: "/images/product/4.jpg" },
  //         { productId: 5, productName: "Three Layers Cake", unitPrice: "200", thumbnail: "/images/product/5.jpg" },
  //         { productId: 6, productName: "Healthy Food Coffee", unitPrice: "140", thumbnail: "/images/product/6.jpg" }
  //       ]
  // });
  //2 fetch.
    // fetch("http://localhost:3010/products", {method: "GET"})
    // .then(res => res.json())
    // //.then(res => {console.log(res)})
    // .then(res => { this.setState({ products : res})});

//3 axios
// axios.get("http://localhost:3011/products/").then(res => {
//       console.log("products  == ");
//       console.log(res.data);
//        this.setState({products : res.data}) 
//     });

//use redux instead
    this.props.productsFetch();
  }

  render() {
    return (
      <div>
        <Header />
        {/* <h2>การส่งข้อมูลไปที่ components สิ่งที่เรียกว่า props</h2> */}
        {/* <ProductItem productName="Iphone X" unitPrice="40500" /> */}
        {/* <MainScreen products={this.state.products} /> */}
        <MainScreen products={this.props.products} />
        <Footer  name="Chai" email="Yo@gmail.com" />
      </div>
    );
  }
}

function mapStateToProps({ products }){//deconstructor style
//function mapStateToProps(state){
  //console.log(state);
  //return { products : state.products }//products up there
  return { products }//products up there
}

export default connect(mapStateToProps, { productsFetch })(Home);
