import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51MuzrbSA5uEUTqOaw7V8Y4lyLCyAdL5t8YeGuQobsnfO8o4Utdg4g5t1sHMUTw5R8xKLaaqIqMG6oRAyjuSwTiC0006DdZ96OA');


function Payment() {
const options = {
    // passing the client secret obtained from the server
    clientSecret: 'pi_3N0pCcSA5uEUTqOa0d4fcRum_secret_U4VdFm2thXoHhn1BQ8WNutNLN',
    };

  return (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm />
    </Elements>
    // <div>
    //     Hello
    // </div>
  );
};

export default Payment;