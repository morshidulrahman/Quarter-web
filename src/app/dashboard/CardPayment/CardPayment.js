import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import PaymentBox from "./PaymentBox";

// TODO: add publishable key
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_KEY);
const CardPayment = ({ rent, date }) => {
  return (
    <div className="mt-5">
      <Elements stripe={stripePromise}>
        <PaymentBox rent={rent} date={date} />
      </Elements>
    </div>
  );
};

export default CardPayment;
