# Deployment Instructions - Signup/Waitlist Fix

## Changes Made (Need Redeployment)

### 1. Frontend Changes
**File:** `/app/frontend/src/pages/Register.jsx`
- ✅ **Fixed:** Removed `required` attribute from Age field (line 182)
- This was blocking form submission via HTML5 validation

**File:** `/app/frontend/src/context/AuthContext.jsx`
- ✅ **Added:** Debug console logging to track API calls
- ✅ **Added:** Better error handling for registration

### 2. Environment Configuration
**File:** `/app/backend/.env`
- ✅ **Configured:** All n8n webhook URLs
- ✅ **Configured:** CORS for preview domain + n8n

**File:** `/app/frontend/.env`
- ✅ **Configured:** REACT_APP_BACKEND_URL for preview

---

## Pre-Deployment Checklist

### Update Environment Variables for Production

**IMPORTANT:** Before deploying, update these files with your PRODUCTION URLs:

#### Backend `.env` - Update CORS_ORIGINS
```bash
# Change this line in /app/backend/.env:
CORS_ORIGINS="https://YOUR-PRODUCTION-DOMAIN.com,https://raze11.app.n8n.cloud"

# Example:
# CORS_ORIGINS="https://razetraining.com,https://www.razetraining.com,https://raze11.app.n8n.cloud"
```

#### Frontend `.env` - Update Backend URL
```bash
# Change this line in /app/frontend/.env:
REACT_APP_BACKEND_URL=https://YOUR-PRODUCTION-DOMAIN.com

# Example:
# REACT_APP_BACKEND_URL=https://razetraining.com
```

---

## Deployment Steps

### Option 1: Emergent Platform Native Deployment

1. **Save to GitHub** (if you haven't already)
   - Use the "Save to GitHub" feature in Emergent chat interface
   - Or commit and push your changes manually

2. **Update Environment Variables**
   - In Emergent dashboard, go to your app settings
   - Update environment variables:
     - `REACT_APP_BACKEND_URL` → Your production domain
     - `CORS_ORIGINS` → Your production domain + n8n domain

3. **Deploy**
   - Click "Deploy" button in Emergent dashboard
   - Wait for deployment to complete (usually 2-5 minutes)

4. **Verify**
   - Visit your production site
   - Test signup with a NEW email
   - Check browser console (F12) for debug logs

### Option 2: Manual Git Deployment

```bash
# 1. Commit changes
git add .
git commit -m "Fix: Remove required attribute from Age field, add debug logging"

# 2. Push to GitHub
git push origin main

# 3. Trigger deployment (depends on your hosting platform)
# - For Vercel/Netlify: Automatic on push
# - For other platforms: Follow your deployment process
```

---

## Post-Deployment Verification

### 1. Test Signup Flow
1. Go to your production website
2. Navigate to /register
3. Fill out the form (use a NEW email that hasn't been registered)
4. Open Browser DevTools (F12) → Console tab
5. Click "Create Account"
6. You should see console logs:
   ```
   🔍 API_URL loaded: https://your-domain.com
   🔍 Register called with: {email: ..., name: ...}
   🔍 Register response status: 200
   ```

### 2. Test Waitlist Flow
1. Go to a product page with waitlist
2. Click "Join Waitlist"
3. Fill in email and size selections
4. Submit
5. Should see success message

### 3. Check CORS
Open browser console and run:
```javascript
fetch('https://your-domain.com/api/', {credentials: 'include'})
  .then(r => console.log('✅ CORS working:', r.status))
  .catch(e => console.log('❌ CORS error:', e))
```

---

## Common Deployment Issues

### Issue: "CORS Error" or "Failed to fetch"
**Solution:** 
- Verify `CORS_ORIGINS` in backend .env includes your production domain
- Make sure there are no typos in the domain name
- Include both www and non-www versions if applicable

### Issue: "API_URL is undefined" 
**Solution:**
- Verify `REACT_APP_BACKEND_URL` is set in frontend .env
- Rebuild frontend: The env var must be set BEFORE building React app
- React env vars are embedded at BUILD time, not runtime

### Issue: Still getting "Please fill out this field"
**Solution:**
- Clear browser cache (Ctrl+Shift+R)
- Verify the new Register.jsx code was deployed
- Check that Age field doesn't have `required` attribute in deployed HTML

### Issue: 422 Validation Error
**Common causes:**
- Email already registered → Use a different email
- Password too short → Use 6+ characters
- Missing required fields → Fill all required fields (Name, Email, Password, Gymnastics Type)

---

## Files Changed Summary

```
Modified:
  /app/frontend/src/pages/Register.jsx (Age field - removed required)
  /app/frontend/src/context/AuthContext.jsx (Added debug logging)
  /app/backend/.env (Added webhook URLs, updated CORS)
  /app/frontend/.env (Set REACT_APP_BACKEND_URL)

Created:
  /app/DEPLOYMENT_CHECKLIST.md (Comprehensive deployment guide)
  /app/DEPLOYMENT_HEALTH_CHECK.md (Health check report)
  /app/DEPLOYMENT_INSTRUCTIONS.md (This file)
```

---

## Need Help?

If signup still doesn't work after deployment:

1. **Check browser console logs** (F12 → Console)
2. **Look for the debug messages** starting with 🔍
3. **Check the HTTP status code** in Network tab
4. **Share the exact error message** you see

Common error codes:
- **401** → Authentication issue (expected on /api/auth/me if not logged in)
- **422** → Validation error (check which field is invalid)
- **500** → Server error (check backend logs)
- **CORS error** → Domain not in CORS_ORIGINS

---

**Last Updated:** January 9, 2025  
**Version:** Post-Fix - Age Field Optional + Debug Logging
