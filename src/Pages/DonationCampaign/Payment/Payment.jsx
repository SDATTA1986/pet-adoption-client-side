import { loadStripe } from "@stripe/stripe-js";

import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise=loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = ({singleDonation}) => {
    return (
        <div>
           
            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm singleDonation={singleDonation}></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;