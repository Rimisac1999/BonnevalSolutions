# Contact Form & Calendly Setup Guide

This guide will help you set up your contact form (with email delivery) and Calendly integration.

## 🎯 Overview

Your website now has two ways for clients to reach you:

1. **Contact Form** - Sends emails directly to you (no data stored on website)
2. **Calendly Booking** - Lets clients schedule consultations directly

## 📧 Step 1: Set Up Contact Form Email Delivery

We're using **Web3Forms** (free service) to send form submissions directly to your email.

### Get Your Free Access Key

1. **Visit**: https://web3forms.com
2. **Click**: "Get Started Free"
3. **Enter your email**: `casimir@bonnevalsolutions.com`
4. **Verify your email**: Check your inbox and click the verification link
5. **Copy your Access Key**: You'll get a key like `abc123-def456-ghi789`

### Add Access Key to Your Website

You have two options:

#### Option A: Environment Variable (Recommended for Production)

1. Create a file called `.env.local` in the `BonnevalSolutions` folder
2. Add this line (replace with your actual key):
   ```
   NEXT_PUBLIC_WEB3FORMS_KEY=your-actual-access-key-here
   ```
3. Save the file
4. **Important**: This file is already in `.gitignore` so it won't be committed

For Vercel deployment:
1. Go to your Vercel project settings
2. Navigate to "Environment Variables"
3. Add: `NEXT_PUBLIC_WEB3FORMS_KEY` with your access key
4. Redeploy your site

#### Option B: Direct in Code (Quick Test)

1. Open `BonnevalSolutions/components/Contact.tsx`
2. Find line 42: `access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY || 'YOUR_ACCESS_KEY_HERE'`
3. Replace `'YOUR_ACCESS_KEY_HERE'` with your actual key
4. **Security Note**: Don't commit this to public repositories

### Test the Form

1. Run your website locally: `npm run dev`
2. Go to the contact section
3. Fill out and submit the form
4. Check your email (`casimir@bonnevalsolutions.com`)
5. You should receive the form submission!

## 📅 Step 2: Set Up Calendly

### Create Your Calendly Account

1. **Visit**: https://calendly.com
2. **Sign up** with your email: `casimir@bonnevalsolutions.com`
3. **Connect your calendar** (Google Calendar, Outlook, etc.)

### Create Your Event Type

1. Click **"+ New Event Type"**
2. Choose **"One-on-One"**
3. **Event name**: "Consultation" or "Discovery Call"
4. **Duration**: 30 minutes (or whatever you prefer)
5. **Location**: Zoom, Google Meet, or Phone
6. Set your **availability** (when you're free for meetings)
7. Click **"Save & Close"**

### Get Your Calendly Link

1. Go to your event type
2. Click **"Copy Link"**
3. Your link will look like: `https://calendly.com/casimir-bonnevalsolutions/consultation`

### Add Calendly Link to Website

1. Open `BonnevalSolutions/config/company.ts`
2. Find line 93: `calendly: 'https://calendly.com/your-username/consultation'`
3. Replace with your actual Calendly link
4. Save the file

**Example**:
```typescript
calendly: 'https://calendly.com/casimir-bonnevalsolutions/consultation',
```

### Customize Your Calendly (Optional)

1. **Custom Questions**: Add questions to collect more info
2. **Email Reminders**: Set up automatic reminders
3. **Custom Branding**: Add your logo (paid plans)
4. **Buffer Time**: Add time before/after meetings

## 🎨 Where Calendly Links Appear

Your Calendly booking link now appears in:

1. **Contact Section** - Link in the form header
2. **Services Section** - "Schedule a Consultation" button
3. **Portfolio Page** - CTA section at bottom
4. **Founder Page** - "Schedule a Call" button

## ✅ Testing Everything

### Test Contact Form

1. Submit a test message through the form
2. Check your email for the submission
3. Verify all fields are included

### Test Calendly

1. Click any "Schedule a Consultation" button
2. Verify it opens your Calendly page
3. Try booking a test meeting
4. Check if you receive calendar invite

## 🔒 Privacy & Data Storage

### What Gets Stored

- **Nothing on your website**: Zero data storage
- **Web3Forms**: Doesn't store data, just forwards emails
- **Calendly**: Stores booking information (required for calendar sync)

### GDPR Compliance

- Contact form submissions go straight to email
- No cookies or tracking on form submission
- Calendly handles its own data privacy (GDPR compliant)

## 🚨 Troubleshooting

### Form Not Sending Emails

1. **Check Access Key**: Make sure it's correct in `.env.local` or code
2. **Check Email**: Verify `casimir@bonnevalsolutions.com` in `config/company.ts`
3. **Check Spam**: Form emails might go to spam initially
4. **Console Errors**: Open browser console (F12) and check for errors

### Calendly Link Not Working

1. **Check URL Format**: Should be `https://calendly.com/username/event-name`
2. **Event Active**: Make sure your Calendly event is active
3. **Public Link**: Ensure the event link is public, not private

### Form Shows Error Message

1. **Internet Connection**: Check if you're online
2. **Web3Forms Status**: Visit https://web3forms.com/status
3. **CORS Errors**: Should work fine with Web3Forms API

## 📞 Need Help?

If you encounter issues:

1. **Web3Forms Support**: https://web3forms.com/support
2. **Calendly Help**: https://help.calendly.com
3. **Check Console**: Browser Developer Tools (F12) → Console tab

## 🎉 You're Done!

Your website now has:
- ✅ Working contact form with email delivery
- ✅ Calendly integration for bookings
- ✅ No data stored on your website
- ✅ Professional appearance with dual options

Clients can either:
- Send a quick message via the form
- Schedule a proper consultation call

**Next Steps:**
1. Get your Web3Forms access key
2. Set up your Calendly account
3. Update both in the config
4. Test everything works
5. Deploy to production!

