import React, { Component } from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductItem from "./components/product/ProductItem";
import Monitor from "./components/monitor/Monitor";
import './App.css';
import ProductList from "./components/product/ProductList";
class App extends Component {
  constructor(props){
    super(props);

    this.state = {products : ""}
  }


  componentDidMount(){
      this.setState({
        products: [
          { productId: 1, productName: "Salad", unitPrice: "120", thumbnail: "/images/product/1.jpg" },
          { productId: 2, productName: "Fried Chicken", unitPrice: "90", thumbnail: "/images/product/2.jpg" },
          { productId: 3, productName: "Bingsu", unitPrice: "200", thumbnail: "/images/product/3.jpg" },
          { productId: 4, productName: "French Fried", unitPrice: "140", thumbnail: "/images/product/4.jpg" },
          { productId: 5, productName: "Three Layers Cake", unitPrice: "200", thumbnail: "/images/product/5.jpg" },
          { productId: 6, productName: "Healthy Food Coffee", unitPrice: "140", thumbnail: "/images/product/6.jpg" }
        ]
  });
  }

  render() {
    return (
      <div>
        <Header />
        {/* <h2>การส่งข้อมูลไปที่ components สิ่งที่เรียกว่า props</h2> */}
        {/* <ProductItem productName="Iphone X" unitPrice="40500" /> */}
        <Monitor products={this.state.products} />
        <Footer  name="Chai" email="Yo@gmail.com" />
      </div>
    );
  }
}

export default App;
