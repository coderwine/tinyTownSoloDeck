import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
import env from 'react-dotenv';

export default class TakeMoney extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            value: this.props
        }
    }

    onToken = (token) => {
        fetch('/save-stripe-token', {
        method: 'POST',
        body: JSON.stringify(token),
        }).then(response => {
        response.json().then(data => {
            alert(`We are in business, ${data.email}`);
        });
        });
    }
    // NOTE: Trying to convert the state of the user input in the donation modal to be passed down into the amount attribute (currently set to 1 cent) of the Checkout button.  
    // const convertMoney = () => {
    //     let originalValue = this.state.value;
    //     console.log(originalValue)
    // }

    

    render() {
        return (
                <StripeCheckout
                    name="ericjwinebrenner.com"
                    description='Tiny Towns Solo Donation'
                    amount={100}
                    currancy='USD'
                    stripeKey={env.STRIPE_KEY}
                    token={this.onToken}
                    email="eric@ericjwinebrenner.com"
                    billingAddress={true}
                    zipCode={true}
                />
        )
    }
}