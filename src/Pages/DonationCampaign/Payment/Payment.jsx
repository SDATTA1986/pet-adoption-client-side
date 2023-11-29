import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise=loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = ({donatedAmount}) => {
    return (
        <div>
            <SectionTitle heading={"Donation Details"}></SectionTitle>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm donatedAmount={donatedAmount}></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;