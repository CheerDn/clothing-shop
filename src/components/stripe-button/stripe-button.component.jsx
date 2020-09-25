import React from "react"
import StripeCheckout from "react-stripe-checkout"

function StripeCheckoutButton({ price }) {
  const priceForStripe = price * 100 //in cents
  const publishableKey =
    "pk_test_51HVE15E4GLcAtN9ZFqe8yraR6UedoG0VgHkT6Nx3Z5crbeEFjJBq8VdiPZjBMdEsrqFos0iCfCSOpX0uCYbzWjjC00FWZ6EHFC"

  function onToken(token) {
    alert("Payment Successful")
  }

  return (
    <StripeCheckout
      label="Pay Now"
      name="CHEER Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton
