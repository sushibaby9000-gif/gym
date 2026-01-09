import React from 'react';
import { Shield, Truck, RefreshCw, Lock, CreditCard, Bitcoin } from 'lucide-react';

const TrustBadges = () => {
  return (
    <div className="trust-badges">
      <div className="trust-badge">
        <Shield size={24} />
        <div>
          <span className="trust-title">Secure Checkout</span>
          <span className="trust-subtitle">SSL Encrypted</span>
        </div>
      </div>
      <div className="trust-badge">
        <Truck size={24} />
        <div>
          <span className="trust-title">Free Shipping</span>
          <span className="trust-subtitle">Orders $100+</span>
        </div>
      </div>
      <div className="trust-badge">
        <RefreshCw size={24} />
        <div>
          <span className="trust-title">Easy Returns</span>
          <span className="trust-subtitle">30 Days</span>
        </div>
      </div>
      <div className="trust-badge">
        <Lock size={24} />
        <div>
          <span className="trust-title">100% Secure</span>
          <span className="trust-subtitle">Payment Protected</span>
        </div>
      </div>
    </div>
  );
};

// SVG Icons for payment methods - Clear and visible
const VisaIcon = () => (
  <svg viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="32" rx="4" fill="#1A1F71"/>
    <path d="M19.5 21h-3l1.9-11.5h3L19.5 21zm12.5-11.2c-.6-.2-1.5-.5-2.6-.5-2.9 0-5 1.6-5 3.8 0 1.7 1.5 2.6 2.6 3.1 1.1.6 1.5.9 1.5 1.4 0 .8-.9 1.1-1.8 1.1-1.2 0-1.8-.2-2.8-.6l-.4-.2-.4 2.6c.7.3 2 .6 3.3.6 3.1 0 5.1-1.5 5.2-3.9 0-1.3-.8-2.3-2.5-3.1-1-.5-1.7-.9-1.7-1.4 0-.5.5-1 1.7-1 1-.01 1.7.2 2.2.5l.3.1.4-2.5zm7.6-.3h-2.3c-.7 0-1.2.2-1.5 1l-4.4 10.5h3.1l.6-1.7h3.8l.4 1.7h2.7l-2.4-11.5zm-3.6 7.4l1.2-3.2.3-.8.2 1.2.7 2.8h-2.4zm-18-7.4l-2.9 7.8-.3-1.6c-.5-1.8-2.2-3.8-4.1-4.8l2.6 10h3.1l4.6-11.4h-3z" fill="#fff"/>
    <path d="M8 9.5H3l-.04.3c3.7.9 6.2 3.2 7.2 6l-1-5.3c-.2-.7-.7-.9-1.3-1H8z" fill="#F9A533"/>
  </svg>
);

const MastercardIcon = () => (
  <svg viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="32" rx="4" fill="#1A1A1A"/>
    <circle cx="18" cy="16" r="9" fill="#EB001B"/>
    <circle cx="30" cy="16" r="9" fill="#F79E1B"/>
    <path d="M24 8.5a9 9 0 000 15 9 9 0 000-15z" fill="#FF5F00"/>
  </svg>
);

const AmexIcon = () => (
  <svg viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="32" rx="4" fill="#006FCF"/>
    <path d="M10 20h3l.6-1.5h1.4l.6 1.5h5.5v-1.2l.5 1.2h2.8l.5-1.2v1.2h11v-2.3h-1.1c-.5 0-.6-.1-.6-.6v-1.8h1.7v-2.3h-1.7V11h1.7l1.2 2.5h3l-2-3 1.7-2.5h-2.8l-1.2 2.2h-.5V8h-6l-1 2-1-2h-6v1l-.5-1h-3L13 14h2.7l.6-1.4h1.4l.6 1.4h4v-1.5l.5 1.5h3l.5-1.5v1.5h9v-2h-1c-.5 0-.6-.1-.6-.5v-1h1.5v-1.5h-1.5V8h1.5l1 2h2l-1.3-2 1-1.5h-2l-.6 1-.5-1h-1.8l-.3.7-.3-.7H23l-.6 1.5-.6-1.5h-3v1l-.4-1h-2l-2 4.5h1.8l.5-1.2h1l.5 1.2h3v-1l.4 1h2l.4-1v1h6v-1h-.6c-.4 0-.5-.1-.5-.4v-.8h1.1v-1h-1.1V8h1.1l.8 1.5h1.5l-1-1.7.8-1.3h-1.5l-.4.8h-.3V6h-4l-.7 1.6-.7-1.6h-3v1l-.3-1h-2l-1.6 3.5h1.3l.4-1h1l.4 1h2.5v-.7l.3.7h1.5l.3-.7v.7h4v-.8h-.4c-.3 0-.4-.1-.4-.3V8h.7v-.7h-.7V6h.7l.6 1.2h1.2l-.8-1.3.6-1h-1.2l-.3.6-.3-.6h-1.8l-.3.7-.3-.7h-2v.7l-.3-.7h-1.5L16 8.5h1l.3-.6h.7l.3.6h2v-.6l.3.6h1l.3-.6v.6h3v-.6h-.3c-.2 0-.3 0-.3-.2V7h.5v-.5h-.5v-.3h.5l.5 1h1l-.6-1 .5-.8h-1l-.2.5-.2-.5h-1.3l-.2.5-.2-.5h-1.5v.5l-.2-.5h-1.2L18 8h.7l.2-.5h.5l.2.5h1.8v-.5l.2.5h1l.2-.5v.5h3v-.5h-.2c-.2 0-.2 0-.2-.1v-.3h.4v-.4h-.4V6h.4l.4.8h.8l-.5-.9.4-.7h-.8l-.2.4-.2-.4H23l-.2.4-.2-.4h-1.2v.4l-.2-.4h-1l-.8 1.7h.6l.2-.4h.4l.2.4h1.4v-.4l.2.4h.7l.2-.4v.4h2.5v-.4h-.2v-.2h.3v-.3h-.3v-.2h.3l.3.6h.6l-.4-.6.3-.5h-.5l-.1.3-.1-.3h-1l-.2.4-.1-.4h-.8v.3l-.1-.3h-.6l-.5 1.2h.4l.1-.3h.3l.1.3h1v-.3l.1.3h.5l.1-.3v.3h1.5v-.3h-.1v-.1h.2v-.2h-.2v-.2h.2z" fill="#fff"/>
  </svg>
);

const DiscoverIcon = () => (
  <svg viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="32" rx="4" fill="#fff"/>
    <rect x="0.5" y="0.5" width="47" height="31" rx="3.5" stroke="#E5E5E5"/>
    <ellipse cx="35" cy="16" rx="8" ry="8" fill="#F76F00"/>
    <path d="M7 13h2c1.1 0 1.8.8 1.8 1.8v1c0 1-.7 1.8-1.8 1.8H7v-4.6zm1 .8v3h.8c.6 0 1-.4 1-1v-.9c0-.6-.4-1-1-1h-.8zm4.5 3.8h1v-4.6h-1v4.6zm3.7 0h1l-1.2-2 1.2-1.8h-1l-.8 1.2-.8-1.2h-1l1.2 1.8-1.2 2h1l.8-1.3.8 1.3zm5.3-2.3c0 1.3-.9 2.3-2.2 2.3-1.3 0-2.2-1-2.2-2.3s.9-2.3 2.2-2.3c1.3 0 2.2 1 2.2 2.3zm-1 0c0-.8-.5-1.4-1.2-1.4-.7 0-1.2.6-1.2 1.4s.5 1.4 1.2 1.4c.7 0 1.2-.6 1.2-1.4zm4.7 2.3l1-4.6h-.9l-.6 2.8-.6-2.8h-.8l-.6 2.8-.6-2.8h-.9l1 4.6h1l.5-2.5.5 2.5h1zm2 0v-1.6h1.4v-.8h-1.4v-1.4h1.6V13h-2.6v4.6h2.7v-.8h-1.7zm3 0v-1.8h.6l.9 1.8h1.1l-1-2c.5-.2.9-.7.9-1.3 0-.9-.6-1.5-1.6-1.5h-1.9v4.6h1zm0-3.8h.8c.4 0 .6.2.6.6 0 .3-.2.6-.6.6h-.8v-1.2z" fill="#000"/>
  </svg>
);

const PayPalIcon = () => (
  <svg viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="32" rx="4" fill="#fff"/>
    <rect x="0.5" y="0.5" width="47" height="31" rx="3.5" stroke="#E5E5E5"/>
    <path d="M17.5 8h-4.3c-.3 0-.6.2-.6.5L11 20c0 .2.2.4.4.4h2c.3 0 .6-.2.6-.5l.5-3c0-.3.3-.5.6-.5h1.4c2.8 0 4.4-1.4 4.9-4 .2-1.1 0-2-.5-2.6-.6-.7-1.6-1.1-3-1.1l-.4.3zm.5 4c-.2 1.5-1.4 1.5-2.5 1.5H15l.5-2.8c0-.2.2-.3.3-.3h.2c.8 0 1.5 0 1.9.4.2.3.3.7.1 1.2z" fill="#003087"/>
    <path d="M29.8 8h-4.3c-.3 0-.6.2-.6.5L23.3 20c0 .2.2.4.4.4h2.2c.2 0 .4-.2.5-.4l.5-3.1c0-.3.3-.5.6-.5h1.4c2.8 0 4.4-1.4 4.9-4 .2-1.1 0-2-.5-2.6-.6-.7-1.6-1.1-3-1.1l-.5.3zm.5 4c-.2 1.5-1.4 1.5-2.5 1.5h-.6l.5-2.8c0-.2.2-.3.3-.3h.2c.8 0 1.5 0 1.9.4.2.3.3.7.2 1.2z" fill="#009CDE"/>
    <path d="M12 23.6c0 .2.2.4.4.4h2c.3 0 .6-.2.6-.5l1.6-10c0-.2-.2-.4-.4-.4h-2c-.2 0-.3.1-.4.3L12 23.6z" fill="#003087"/>
  </svg>
);

const ApplePayIcon = () => (
  <svg viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="32" rx="4" fill="#000"/>
    <path d="M14.5 10.5c-.5.6-1.2 1-2 1-.1-.7.2-1.5.6-2 .5-.6 1.2-1 1.8-1 .1.6-.1 1.4-.4 2zm.5 1.2c-1 0-1.9.6-2.4.6-.5 0-1.3-.5-2.1-.5-1.1 0-2.1.6-2.7 1.6-1.1 2-.3 4.9.8 6.5.5.8 1.2 1.6 2 1.6.8 0 1.1-.5 2.1-.5.9 0 1.2.5 2 .5.9 0 1.5-.8 2-1.6.6-.9.9-1.7.9-1.8s-1.7-.6-1.7-2.5c0-1.5 1.4-2.6 1.4-2.6-.8-1.1-2-1.2-2.3-1.2v-.1zm8.3.5h-2.1v7.5h2.1v-2.5h2c1.9 0 3.2-1.3 3.2-3.1s-1.3-3-3.2-3h-2zm0 1.5h1.7c1.1 0 1.9.6 1.9 1.5 0 1-.8 1.5-1.9 1.5h-1.7v-3zm7.7 6.2c1.1 0 2.2-.6 2.7-1.6v1.5h1.8v-4.4c0-1.8-1.4-2.9-3.5-2.9-2 0-3.5 1.2-3.5 2.8h1.8c.1-.8.7-1.3 1.7-1.3 1.1 0 1.7.5 1.7 1.5v.6l-2.2.1c-2.1.1-3.3 1-3.3 2.5 0 1.5 1.1 2.5 2.8 2.5v-.3zm.5-1.4c-.9 0-1.5-.4-1.5-1.1 0-.7.6-1.1 1.6-1.2l2-.1v.6c0 1.1-.9 1.8-2.1 1.8zm7 4.1c1.6 0 2.5-.6 3.2-2.5l3.1-8.8h-2l-2 6.8-2-6.8h-2l3 8.3-.2.5c-.3.9-.8 1.3-1.6 1.3-.2 0-.4 0-.5 0v1.5c.2 0 .5 0 .8 0h.2z" fill="#fff"/>
  </svg>
);

const GooglePayIcon = () => (
  <svg viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="32" rx="4" fill="#fff"/>
    <rect x="0.5" y="0.5" width="47" height="31" rx="3.5" stroke="#E5E5E5"/>
    <path d="M22 16.5v3.5h-1.1V10h3c.8 0 1.4.2 2 .7.5.5.8 1.1.8 1.8s-.3 1.4-.8 1.9c-.5.5-1.2.7-2 .7H22v1.4zm0-4.3v3.2h2c.5 0 .9-.2 1.2-.5.3-.3.5-.7.5-1.1 0-.4-.2-.8-.5-1.1-.3-.3-.7-.5-1.2-.5H22z" fill="#5F6368"/>
    <path d="M29 13c.9 0 1.6.2 2.1.7.5.5.7 1.1.7 1.9v3.9h-1v-.9c-.4.7-1.1 1-2 1-.6 0-1.2-.2-1.7-.6-.4-.4-.6-.9-.6-1.5s.2-1.1.6-1.5c.4-.4 1-.5 1.8-.5.6 0 1.1.2 1.6.5v-.4c0-.4-.2-.8-.5-1-.3-.3-.6-.4-1.1-.4-.6 0-1.2.3-1.5.8l-.9-.6c.5-.8 1.3-1.2 2.4-1.2h.1zm-.2 5.8c.4 0 .8-.1 1.1-.4.4-.2.5-.5.6-.9v-.9c-.4-.3-.8-.4-1.4-.4-.5 0-.9.1-1.2.4-.3.2-.4.5-.4.9 0 .3.1.6.4.9.3.2.6.4.9.4z" fill="#5F6368"/>
    <path d="M37 21c-.5.4-1 .5-1.7.5-.6 0-1.1-.2-1.5-.6-.4-.4-.6-1-.6-1.7V16h-1v-.8h1V13.5h1.1v1.7h1.7v.8h-1.7v3.4c0 .4.1.7.3.9.2.2.5.3.8.3.3 0 .6-.1.9-.3l.4.7h.3z" fill="#5F6368"/>
    <path d="M12 16c0-.4 0-.8-.1-1.2H8v2.2h2.6c-.1.7-.5 1.2-1 1.6v1.3h1.7c1-.9 1.5-2.3 1.5-3.9h.2z" fill="#4285F4"/>
    <path d="M8 20c1.4 0 2.6-.5 3.4-1.3l-1.7-1.3c-.5.3-1 .5-1.7.5-1.2 0-2.3-.8-2.7-2H2.5v1.4C3.4 19 5.5 20 8 20z" fill="#34A853"/>
    <path d="M5.3 16c0-.4.1-.8.3-1.2v-1.4H2.7c-.5 1-.8 2.1-.8 3.3s.3 2.3.8 3.3l1.7-1.4c-.2-.4-.3-.8-.3-1.2l1.2-.4z" fill="#FBBC04"/>
    <path d="M8 12.5c.7 0 1.3.2 1.8.7l1.3-1.3c-.8-.8-1.9-1.2-3.1-1.2-2.5 0-4.6 1-5.5 2.7l1.7 1.4c.4-1.2 1.5-2 2.7-2l1.1-.3z" fill="#EA4335"/>
  </svg>
);

const AmazonPayIcon = () => (
  <svg viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="32" rx="4" fill="#232F3E"/>
    <path d="M26 19c-3 2.2-7.3 3.4-11 3.4-5.2 0-9.8-1.9-13.4-5.2-.3-.2 0-.5.3-.4 3.8 2.2 8.5 3.5 13.4 3.5 3.3 0 6.9-.7 10.2-2 .5-.2 1 .3.5.7z" fill="#FF9900"/>
    <path d="M27.5 17.3c-.4-.5-2.4-.2-3.4-.1-.3 0-.3-.2-.1-.4 1.6-1.2 4.3-.8 4.6-.4.3.4-.1 3-1.6 4.2-.2.2-.5.1-.4-.2.4-1 .8-3 .9-3.1z" fill="#FF9900"/>
    <path d="M24.2 9.5v-.9c0-.2.1-.3.3-.3h4.2c.2 0 .3.1.3.3v.8c0 .2-.1.3-.3.4l-2.2 3.1h2.4c.2 0 .3.1.3.3v.9c0 .2-.1.3-.3.3h-4.5c-.2 0-.3-.1-.3-.3v-.8c0-.2.1-.3.3-.4l2.2-3.1h-2.1c-.2 0-.3-.1-.3-.3zm-7.5 6.1h-1.3c-.1 0-.2-.1-.3-.2V8.9c0-.2.1-.3.3-.3h1.2c.1 0 .2.1.3.2v.9c.3-.8 1-1.2 1.8-1.2.8 0 1.3.4 1.7 1.2.3-.8 1-1.2 1.9-1.2.6 0 1.1.2 1.5.7.4.5.3 1.2.3 1.8v4.5c0 .2-.1.3-.3.3h-1.3c-.1 0-.2-.1-.3-.2v-3.8c0-.3 0-.9-.1-1.1-.1-.3-.4-.4-.8-.4-.3 0-.6.2-.8.5-.2.4-.1.8-.1 1.2v3.4c0 .2-.1.3-.3.3h-1.3c-.1 0-.2-.1-.3-.2v-3.8c0-.7 0-1.6-.9-1.6-.9 0-.9.9-.9 1.6v3.6c0 .2-.1.3-.3.3h.2zm20.6-5c-1.9 0-2 2.2-2 3.5 0 1.2 0 3.4 2 3.4 1.9 0 2-2.2 2-3.5 0-1.2 0-3.4-2-3.4zm0-1.1c2 0 3.1 1.7 3.1 3.9 0 2.1-.5 4.1-3.1 4.1-2 0-3.1-1.7-3.1-3.9 0-2.1.5-4.1 3.1-4.1zm-5.5 4.9c0-.6-.1-1.8-.8-1.8-.6 0-.8 1-.8 1.6 0 .6.1 1.8.8 1.8.6 0 .8-1.1.8-1.6zm-2.7-3.5c0-.2.1-.3.3-.3h1.1c.1 0 .2.1.3.2v.6c.3-.5.8-.9 1.5-.9.7 0 1.2.3 1.6.9.3-.6.9-.9 1.6-.9.5 0 1 .2 1.3.6.3.5.3 1.1.3 1.7v3.7c0 .2-.1.3-.3.3h-1.3c-.1 0-.2-.1-.3-.2v-3.7c0-.6 0-1.3-.8-1.3-.3 0-.5.2-.7.4-.1.3-.1.6-.1 1v3.5c0 .2-.1.3-.3.3h-1.3c-.1 0-.2-.1-.3-.2v-3.7c0-.6 0-1.3-.8-1.3-.9 0-.9.8-.9 1.4v3.5c0 .2-.1.3-.3.3h-1.3c-.1 0-.2-.1-.3-.2v-4.7h.3z" fill="#fff"/>
  </svg>
);

const CryptoIcon = () => (
  <svg viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="32" rx="4" fill="#F7931A"/>
    <path d="M30 13c.4-2.4-1.5-3.6-4-4.4l.8-3.2-2-.5-.8 3c-.5-.1-1-.2-1.5-.4l.8-3-2-.5-.8 3.2c-.4-.1-.9-.2-1.3-.3v0l-2.7-.7-.5 2.1s1.5.3 1.4.4c.8.2.9.8.9 1.2l-.9 3.6c.1 0 .1 0 .2.1h-.2l-1.3 5.2c-.1.3-.3.6-.9.5 0 0-1.5-.4-1.5-.4l-1 2.3 2.5.6c.5.1 1 .3 1.4.4l-.8 3.2 2 .5.8-3.2c.5.2 1 .3 1.6.4l-.8 3.1 2 .5.8-3.2c3.4.6 5.9.4 7-2.7.8-2.4 0-3.9-1.8-4.8 1.3-.3 2.3-1.3 2.6-3.2zm-4.6 6.4c-.6 2.4-4.7 1.1-6 .8l1.1-4.3c1.3.3 5.6 1 4.9 3.5zm.6-6.4c-.5 2.2-4 1.1-5.1.8l1-3.9c1.1.3 4.7.8 4.1 3.1z" fill="#fff"/>
  </svg>
);


export const PaymentMethods = () => {
  return (
    <div className="footer-payment-methods">
      <span className="payment-label">WE ACCEPT</span>
      <div className="payment-icons-grid">
        <div className="payment-icon-card" title="Visa">
          <VisaIcon />
        </div>
        <div className="payment-icon-card" title="Mastercard">
          <MastercardIcon />
        </div>
        <div className="payment-icon-card" title="American Express">
          <AmexIcon />
        </div>
        <div className="payment-icon-card" title="Discover">
          <DiscoverIcon />
        </div>
        <div className="payment-icon-card" title="PayPal">
          <PayPalIcon />
        </div>
        <div className="payment-icon-card" title="Apple Pay">
          <ApplePayIcon />
        </div>
        <div className="payment-icon-card" title="Google Pay">
          <GooglePayIcon />
        </div>
        <div className="payment-icon-card" title="Amazon Pay">
          <AmazonPayIcon />
        </div>
        <div className="payment-icon-card" title="Crypto">
          <CryptoIcon />
        </div>
      </div>
    </div>
  );
};

export default TrustBadges;
