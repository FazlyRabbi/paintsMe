import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartElement from "@/components/CartElement";
import useProtectedRoute from "Hooks/useProtectedRoute";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

// connect stripe
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

export default function shopping() {
  
  useProtectedRoute();



  return (
    <>
      <Header />
      <div className="card element">
        <Elements stripe={stripePromise}>
          <CartElement />
        </Elements>
      </div>

      <Footer />
    </>
  );
}
