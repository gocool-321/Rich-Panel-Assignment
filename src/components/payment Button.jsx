import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { PaymentElement } from "@stripe/react-stripe-js";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  "pk_test_51LPfyrSCPAEv6A9Q0rRqDdD408rIEbyspZ8m0IZ6zFnsflSb5LxJS6o0aJ7DlNynby3DXpWJTPxZwBaPB5kS4KBt00koJ9bFyR"
);

export default function PaymentButton() {
  const options = {
    // passing the client secret obtained from the server
    clientSecret:
      "sk_test_51LPfyrSCPAEv6A9QClDfIdBPFq3aOg5tGZ6aJ6Mm1toKpafwKAZ1nUoN2GqLftG2tX5YDthTo4YmEj6AMI6qYxPl00yte73d1o",
  };

  const handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const result = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      elements,
      confirmParams: {
        return_url: "https://example.com/order/123/complete",
      },
    });

    if (result.error) {
      // Show error to your customer (for example, payment details incomplete)
      console.log(result.error.message);
    } else {
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }
  };
  return (
    <Elements stripe={stripePromise} options={options}>
      <form onSubmit={handleSubmit}>
        <PaymentElement />
        <button>Submit</button>
      </form>
    </Elements>
  );
}
