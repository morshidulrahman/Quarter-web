import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import PaymentBox from "./PaymentBox";

// TODO: add publishable key
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_KEY);
const CardPayment = ({ rent, date }) => {
  // convert date time
  let dates = new Date(date + "-01");
  let options = { month: "long" };
  let formattedDate = new Intl.DateTimeFormat("en-US", options).format(dates);
  const convertlower = formattedDate.toLocaleLowerCase();
  return (
    <div className="mt-5">
      <Elements stripe={stripePromise}>
        <PaymentBox rent={rent} date={convertlower} />
      </Elements>
    </div>
  );
};

export default CardPayment;
