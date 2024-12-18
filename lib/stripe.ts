// First, import the Stripe package
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  // Set your preferred API version
  apiVersion: '2023-10-16', // Change this to a supported version
  // Enable TypeScript type suggestions
  typescript: true,
});

export default stripe;

// Helper function to format amounts for Stripe (converts dollars to cents)
export const formatAmountForStripe = (amount: number): number => {
  return Math.round(amount * 100);
};

// Helper function to format amounts from Stripe (converts cents to dollars)
export const formatAmountFromStripe = (amount: number): number => {
  return amount / 100;
};

// Helper function to create a payment intent
export async function createPaymentIntent(amount: number, currency: string = 'usd') {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: formatAmountForStripe(amount),
      currency: currency,
    });
    return paymentIntent;
  } catch (error) {
    console.error('Error creating payment intent:', error);
    throw error;
  }
}

// Helper function to retrieve a payment intent
export async function retrievePaymentIntent(paymentIntentId: string) {
  try {
    const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);
    return paymentIntent;
  } catch (error) {
    console.error('Error retrieving payment intent:', error);
    throw error;
  }
}

// Type definitions for common Stripe objects you might use
export interface StripeCustomer {
  id: string;
  email: string;
  // Add other fields you need
}

export interface StripePrice {
  id: string;
  unit_amount: number;
  currency: string;
  // Add other fields you need
}