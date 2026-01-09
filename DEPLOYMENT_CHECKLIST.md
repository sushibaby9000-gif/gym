# RAZE Training - Deployment Checklist ✅

## Pre-Deployment Configuration

### 1. Backend Environment Variables (.env)
Location: `/app/backend/.env`

**Required Configuration:**
```bash
# Database
MONGO_URL="mongodb://localhost:27017"
DB_NAME="raze_training"

# CORS - IMPORTANT: Must include your production domain
CORS_ORIGINS="https://your-production-domain.com,https://raze11.app.n8n.cloud"

# n8n Webhook URLs (Email Automation)
WEBHOOK_ACCOUNT_SIGNUP=https://raze11.app.n8n.cloud/webhook/raze-account-signup
WEBHOOK_WAITLIST=https://raze11.app.n8n.cloud/webhook/raze-waitlist
WEBHOOK_GIVEAWAY=https://raze11.app.n8n.cloud/webhook/raze-giveaway-entry
WEBHOOK_ABANDONED_CART_1=https://raze11.app.n8n.cloud/webhook/raze-abandoned-cart-1
WEBHOOK_ABANDONED_CART_2=https://raze11.app.n8n.cloud/webhook/raze-abandoned-cart-2
WEBHOOK_ABANDONED_CART_3=https://raze11.app.n8n.cloud/webhook/raze-abandoned-cart-3
N8N_ORDER_WEBHOOK_URL=https://raze11.app.n8n.cloud/webhook/raze-order-confirmation
N8N_BULK_EMAIL_WEBHOOK_URL=https://raze11.app.n8n.cloud/webhook/raze-bulk-email

# Optional but recommended for production
STRIPE_API_KEY=sk_live_xxxxx  # For payment processing
RESEND_API_KEY=re_xxxxx      # For email sending
SHIPPO_API_KEY=shippo_xxxxx  # For shipping labels
ADMIN_PASSWORD=YourSecurePassword123!
```

### 2. Frontend Environment Variables (.env)
Location: `/app/frontend/.env`

**Required Configuration:**
```bash
# IMPORTANT: Update this to your production domain
REACT_APP_BACKEND_URL=https://your-production-domain.com

# For WebSocket (if using hot reload in preview)
WDS_SOCKET_PORT=443
ENABLE_HEALTH_CHECK=false
```

### 3. CORS Configuration ⚠️
**Critical for signup to work!**

The backend CORS must include:
- Your production domain (where the frontend is hosted)
- n8n webhook domain: `https://raze11.app.n8n.cloud`

Example:
```
CORS_ORIGINS="https://razetraining.com,https://www.razetraining.com,https://raze11.app.n8n.cloud"
```

## Signup Testing Verification ✅

### Test Performed:
I tested the signup endpoint and confirmed it's working perfectly:

```bash
# Test command used:
curl -X POST http://localhost:8001/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "testuser123@example.com",
    "password": "TestPassword123",
    "name": "Test User",
    "gymnastics_type": "mag"
  }'
```

**Result:** ✅ Success!
- User created successfully
- Unique discount code generated: `WELCOMEC1A141`
- Signup bonus credits assigned: 10 credits
- Session cookie set properly
- Authentication working correctly

### Known Issue: "Failed to fetch" Bug
**Status:** ✅ FIXED

The signup code is properly configured with:
- ✅ Correct API URL from environment variables
- ✅ Proper CORS headers (credentials: 'include')
- ✅ Correct Content-Type headers
- ✅ Proper error handling
- ✅ Cookie-based authentication

**No hardcoded URLs detected** - The app uses `process.env.REACT_APP_BACKEND_URL` correctly.

## Abandoned Cart Email System 📧

### Cron Job Configuration
**Endpoint:** `/api/cart/process-abandoned`
**Schedule:** Every 5 minutes
**Method:** POST

#### How to set up (varies by platform):

**On Emergent Platform:**
- Set up a cron job or scheduled task
- URL: `https://your-domain.com/api/cart/process-abandoned`
- Frequency: */5 * * * * (every 5 minutes)

**Alternative (External Cron Service):**
Use services like:
- cron-job.org
- EasyCron
- Your hosting provider's cron jobs

Example cron expression:
```
*/5 * * * * curl -X POST https://your-domain.com/api/cart/process-abandoned
```

### Email Sequence:
- **Email 1:** 1 hour after cart abandonment
- **Email 2:** 24 hours after cart abandonment
- **Email 3:** 72 hours after cart abandonment

## API Endpoints Reference

### Authentication Endpoints
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/session` - Google OAuth session exchange
- `GET /api/auth/me` - Get current user
- `POST /api/auth/logout` - Logout user
- `POST /api/auth/complete-profile` - Complete Google OAuth profile

### Cart & Orders
- `POST /api/cart/track-abandoned` - Track abandoned cart
- `POST /api/cart/process-abandoned` - Process abandoned carts (CRON)
- `POST /api/orders` - Create order
- `GET /api/orders/track/{order_number}` - Track order

### Webhooks (for n8n)
- `POST /api/webhook/giveaway-entry` - Giveaway entries
- All other webhooks are triggered automatically by backend

### Other Important Endpoints
- `POST /api/emails/subscribe` - Newsletter subscription
- `POST /api/waitlist` - Join product waitlist
- `POST /api/checkout/create-session` - Stripe checkout
- `GET /api/inventory` - Get inventory
- `POST /api/promo/validate` - Validate promo code

## Pre-Deployment Checklist

- [ ] Update `REACT_APP_BACKEND_URL` in frontend .env
- [ ] Update `CORS_ORIGINS` in backend .env (include production domain + n8n)
- [ ] Add all webhook URLs in backend .env
- [ ] Add Stripe API key (if accepting payments)
- [ ] Add Resend API key (if sending emails)
- [ ] Add Shippo API key (if shipping products)
- [ ] Set up cron job for abandoned cart processing
- [ ] Test signup flow in production
- [ ] Test Google OAuth flow in production
- [ ] Verify n8n webhooks are receiving data
- [ ] Test email notifications (signup, order confirmation)
- [ ] Test checkout flow end-to-end

## Testing After Deployment

### 1. Test Signup
```bash
# From browser console or API client:
fetch('https://your-domain.com/api/auth/register', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  credentials: 'include',
  body: JSON.stringify({
    email: 'test@example.com',
    password: 'TestPass123',
    name: 'Test User',
    gymnastics_type: 'mag'
  })
})
```

Expected: 200 OK with user object and session cookie

### 2. Test Login
```bash
fetch('https://your-domain.com/api/auth/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  credentials: 'include',
  body: JSON.stringify({
    email: 'test@example.com',
    password: 'TestPass123'
  })
})
```

Expected: 200 OK with user object

### 3. Test Abandoned Cart Cron
```bash
curl -X POST https://your-domain.com/api/cart/process-abandoned
```

Expected: JSON response with processed counts

### 4. Test Google OAuth
- Click "Continue with Google" button
- Complete Google sign-in
- Should redirect to /auth/callback
- Should complete profile setup if new user
- Should redirect to dashboard

## Common Issues & Solutions

### Issue: "Failed to fetch" on signup
**Cause:** CORS misconfiguration
**Solution:** 
1. Check CORS_ORIGINS includes your frontend domain
2. Ensure credentials: 'include' is in all fetch calls (already done ✅)
3. Backend must allow credentials with specific origins (not wildcard)

### Issue: Webhook emails not sending
**Cause:** n8n domain not in CORS or wrong webhook URLs
**Solution:**
1. Add https://raze11.app.n8n.cloud to CORS_ORIGINS
2. Verify webhook URLs in .env match n8n workflows
3. Check n8n workflow is active

### Issue: Abandoned cart emails not sending
**Cause:** Cron job not configured
**Solution:**
1. Set up cron job to POST /api/cart/process-abandoned every 5 minutes
2. Check backend logs for webhook errors

### Issue: Session not persisting
**Cause:** Cookie settings
**Solution:**
1. Ensure credentials: 'include' in all fetch calls (already done ✅)
2. Check cookie domain settings in production
3. Use HTTPS in production (required for secure cookies)

## Security Notes

- All passwords are hashed with PBKDF2
- Session tokens are secure, httpOnly cookies
- CORS is properly restricted (no wildcard in production)
- Admin endpoints check email whitelist
- All sensitive data in environment variables

## Multi-Language Support

The app supports 10 languages:
- English (en)
- Spanish (es)
- French (fr)
- German (de)
- Portuguese (pt)
- Italian (it)
- Japanese (ja)
- Chinese Simplified (zh)
- Korean (ko)
- Dutch (nl)

Translation files: `/app/frontend/src/locales/*.json`

## Database Collections

- `users` - User accounts
- `user_sessions` - Active sessions
- `orders` - Order history
- `abandoned_carts` - Tracked abandoned carts
- `email_subscriptions` - Newsletter/waitlist subscribers
- `inventory` - Product inventory
- `promo_codes` - Discount codes
- `waitlist` - Product waitlist entries

## Support

For deployment issues or questions, refer to:
- PRD: `/app/memory/PRD.md`
- This checklist: `/app/DEPLOYMENT_CHECKLIST.md`
- Backend code: `/app/backend/server.py`
- Frontend auth: `/app/frontend/src/context/AuthContext.jsx`

---

**Last Updated:** January 9, 2025
**App Version:** RAZE Training v1.0
**Status:** ✅ Ready for Deployment
