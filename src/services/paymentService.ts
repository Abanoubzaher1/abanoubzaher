import { initStripe, createToken, confirmPayment } from "@stripe/stripe-react-native"

class PaymentService {
  async init() {
    await initStripe({
      publishableKey: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!,
    })
  }

  async createPaymentMethod(cardDetails: {
    number: string
    expMonth: number
    expYear: number
    cvc: string
  }) {
    const { token, error } = await createToken({ type: "Card", ...cardDetails })
    if (error) {
      throw new Error(error.message)
    }
    return token
  }

  async processPayment(amount: number, currency: string, paymentMethodId: string) {
    const { paymentIntent, error } = await confirmPayment(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY!, {
      paymentMethodId,
      amount,
      currency,
    })

    if (error) {
      throw new Error(error.message)
    }

    return paymentIntent
  }
}

export default new PaymentService()

