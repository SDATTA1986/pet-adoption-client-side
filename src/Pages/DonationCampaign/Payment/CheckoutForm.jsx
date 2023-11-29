import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import axiosSecure from "../../../Components/hooks/useAxiosSecure";
import useDonation from "../../../Components/hooks/useDonation";
import useAuth from "../../../Components/hooks/useAuth";


const CheckoutForm = ({ donatedAmount }) => {
    const { user } = useAuth();
    const stripe = useStripe();
    const elements = useElements();
    console.log(donatedAmount);
    // const [donation]=useDonation();
    // console.log(donation);
    const [clientSecret, setClientSecret] = useState('');
    // const totalAmount=donation.reduce((total,item)=>total+item.donatedAmount,0)
    // console.log(totalAmount);
    useEffect(() => {
        axiosSecure.post('/create-payment-intent', { donatedAmount })
            .then(res => {
                console.log(res.data.clientSecret);
                setClientSecret(res.data.clientSecret);
            })
    }, [donatedAmount])
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
        } else {
            console.log('[PaymentMethod]', paymentMethod);
        }

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        })
        if (confirmError) {
            console.log('confirm error');
        }
        else {
            console.log('payment intent', paymentIntent);
        }

    };


    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Enter Amount</span>
                </label>
                <input type="number" name="amount" placeholder="Enter Amount" className="input input-bordered" required />
            </div>
            <button className="btn btn-sm btn-primary my-4" type="submit" disabled={!stripe || !clientSecret}>
                Pay
            </button>
        </form >
    );
}

export default CheckoutForm;