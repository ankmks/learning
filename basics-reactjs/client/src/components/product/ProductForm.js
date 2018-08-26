import React, { Component } from "react";

import { reduxForm, Field } from "redux-form";

import FormField from "../common/FormField";

import { productFormFields } from "./formFields";

import { connect } from "react-redux";

class ProductForm extends Component {

    renderFields (formFields) {
        // const formFields = [
        //     { label: "Product Name", name : "productName", type: "text", required : true },
        //     { label: "Unit Price", name : "unitPrice", type: "number", required : true },
        //     { label: "Thumbnail", name : "thumbnail", type: "text", required : true }
        // ];

        return formFields.map(({ label, name , type, required}) => {
            return (
                <Field key={name} label={label} name={name} type={type} required={required} component={FormField} />
            )
        })
    }

    render() {
        const { onProductSubmit } = this.props;
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(onProductSubmit)} >
                    {this.renderFields(productFormFields)}
                    <button className="btn btn-block btn-info title" type="submit">
                        Save
                    </button>
                </form>
            </div>
        )
    }
}

function validate(values){
    //console.log(values);
    const errors = {};
    productFormFields.forEach(({ name, required }) => {
        if(!values[name] && required){
            errors[name] = 'Enter data.'
        }
    });
    return errors;
}


function mapStateToProps({ products }){
    if(products && products.id) {
        return { initialValues : products};
    } else {
        return {};
    }
}


ProductForm = reduxForm({ validate, form : "productForm"})(ProductForm);

export default connect(mapStateToProps)(ProductForm);