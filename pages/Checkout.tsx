import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Checkout: React.FC = () => {
  const { cartTotal, clearCart, items } = useCart();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    cardNumber: "",
    expiry: "",
    cvc: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    const productSummary = items
      .map(
        (item) =>
          `${item.name} (x${item.quantity}) - Size: ${item.selectedSize}`
      )
      .join(", ");

    const payload = {
      emailAddress: formData.email,
      phoneNumber: formData.phone,
      firstName: formData.firstName,
      lastName: formData.lastName,
      address: formData.address,
      city: formData.city,
      state: formData.state,
      zipCode: formData.zipCode,
      productName: productSummary,
      totalAmount: cartTotal.toFixed(2),
    };

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbykUK3w4pZhCA5iFHYasdUx7aghdiSMeagT6KqZkNLcbovHMOxPmynXRQtC1vlOi3Tk/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      clearCart();
      alert("Order placed successfully! Welcome to the Walkin club.");
      navigate("/");
    } catch (error) {
      console.error("Submission error:", error);
      alert("There was an error placing your order. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-2xl shadow-sm p-8">
          <h1 className="font-serif text-3xl font-bold text-stone-900 mb-8 text-center">
            Checkout
          </h1>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Contact Information */}
            <div className="space-y-4">
              <h2 className="font-bold text-stone-900 text-lg border-b border-stone-100 pb-2">
                Contact Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  required
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="input"
                />
                <input
                  required
                  name="phone"
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="input"
                />
              </div>
            </div>

            {/* Shipping Address */}
            <div className="space-y-4">
              <h2 className="font-bold text-stone-900 text-lg border-b border-stone-100 pb-2">
                Shipping Address
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  required
                  name="firstName"
                  type="text"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="input"
                />
                <input
                  required
                  name="lastName"
                  type="text"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="input"
                />
              </div>

              <input
                required
                name="address"
                type="text"
                placeholder="Address"
                value={formData.address}
                onChange={handleChange}
                className="input"
              />

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <input
                  required
                  name="city"
                  type="text"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleChange}
                  className="input"
                />
                <input
                  required
                    name="state"
                    type="text"
                    placeholder="State"
                    value={formData.state}
                    onChange={handleChange}
                    className="input"
                />
                <input
                  required
                  name="zipCode"
                  type="text"
                  placeholder="ZIP Code"
                  value={formData.zipCode}
                  onChange={handleChange}
                  className="input"
                />
              </div>
            </div>

            {/* Payment (Mock) */}
            <div className="space-y-4">
              <h2 className="font-bold text-stone-900 text-lg border-b border-stone-100 pb-2">
                Payment
              </h2>
              <div className="bg-stone-50 p-4 rounded-lg border text-sm text-stone-500 text-center">
                Secure Payment Gateway (Mock)
              </div>
              <input
                required
                name="cardNumber"
                type="text"
                placeholder="Card Number"
                value={formData.cardNumber}
                onChange={handleChange}
                className="input"
              />
              <div className="grid grid-cols-2 gap-4">
                <input
                  required
                  name="expiry"
                  type="text"
                  placeholder="MM/YY"
                  value={formData.expiry}
                  onChange={handleChange}
                  className="input"
                />
                <input
                  required
                  name="cvc"
                  type="text"
                  placeholder="CVC"
                  value={formData.cvc}
                  onChange={handleChange}
                  className="input"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isProcessing}
              className="w-full bg-stone-900 text-white font-bold py-4 rounded-full hover:bg-rose-500 transition-colors disabled:opacity-50"
            >
              {isProcessing
                ? "Processing Order..."
                : `Pay $${cartTotal.toFixed(2)}`}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
