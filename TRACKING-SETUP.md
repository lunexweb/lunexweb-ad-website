# Tracking & Pixel Setup Guide

## 🎯 Before Running Any Ads - SET THESE UP!

### 1. Facebook Pixel Setup

**Step 1: Get Your Pixel ID**
1. Go to: https://business.facebook.com/events_manager
2. Click "Connect Data Sources" → "Web" → "Facebook Pixel"
3. Name it "Lunexweb Pixel"
4. Copy your Pixel ID (looks like: 123456789012345)

**Step 2: Replace in Code**
File: `src/routes/index.tsx`
Find: `YOUR_PIXEL_ID_HERE`
Replace with your actual Pixel ID

**Step 3: Test It**
- Install Facebook Pixel Helper Chrome extension
- Visit your site
- Check if pixel fires (green checkmark)

**Events to Track:**
```javascript
// When someone clicks WhatsApp
fbq('track', 'Contact');

// When someone submits problem selector
fbq('track', 'Lead');

// When someone views packages section
fbq('trackCustom', 'ViewPricing');
```

---

### 2. Google Analytics 4 Setup

**Step 1: Create GA4 Property**
1. Go to: https://analytics.google.com
2. Click "Create Property"
3. Name: "Lunexweb"
4. Select South Africa timezone
5. Copy your Measurement ID (looks like: G-XXXXXXXXXX)

**Step 2: Replace in Code**
File: `src/routes/index.tsx`
Find: `G-XXXXXXXXXX` (appears twice)
Replace with your actual Measurement ID

**Step 3: Set Up Conversions**
In GA4, create these events as conversions:
- `contact_whatsapp` - When WhatsApp clicked
- `lead_generated` - When problem selector clicked
- `view_pricing` - When packages section viewed

---

### 3. Google Ads Conversion Tracking

**After setting up Google Ads account:**

1. Go to: Tools → Conversions → New Conversion
2. Create conversions for:
   - WhatsApp clicks
   - Phone calls
   - Problem selector submissions
3. Add the conversion tag to your site

**Conversion Tag Location:**
Add to `src/routes/index.tsx` in the Landing function

---

### 4. TikTok Pixel (If Running TikTok Ads)

**Step 1: Get Pixel**
1. Go to TikTok Ads Manager
2. Assets → Events → Web Events
3. Create pixel
4. Copy pixel code

**Step 2: Add to Site**
Similar to Facebook Pixel, add to `<head>` section

---

## 📊 Events to Track (Priority)

### High Priority
- [x] Page views (automatic)
- [ ] WhatsApp button clicks
- [ ] Problem selector submissions
- [ ] Email link clicks
- [ ] Scroll depth (75% = interested visitor)

### Medium Priority
- [ ] Video play (if you add video)
- [ ] Specific section views (services, pricing)
- [ ] Time on page
- [ ] Exit intent popup shown

### Nice to Have
- [ ] Portfolio item clicks
- [ ] FAQ expansions
- [ ] Navigation clicks

---

## 🎯 Conversion Goals to Set

### Primary Conversions
1. **WhatsApp Click** (Most Important)
   - Value: R500 (average lead value)
   - Goal: 20 per month

2. **Problem Selector Click**
   - Value: R500
   - Goal: 30 per month

3. **Email Click**
   - Value: R300
   - Goal: 10 per month

### Secondary Conversions
4. **Engaged Visitor** (75% scroll or 2+ min on site)
   - Value: R50
   - For retargeting

---

## 🚀 Ad Campaign Structure

### Campaign 1: Awareness (Facebook/Instagram)
- Objective: Reach
- Audience: Business owners, South Africa, 25-55
- Budget: R50/day
- Creative: Social proof, testimonials
- Track: Page views, engaged visitors

### Campaign 2: Lead Generation (Google Ads)
- Keywords: 
  - "web development south africa"
  - "custom business systems"
  - "website design cape town"
- Budget: R100/day
- Landing Page: Homepage
- Track: WhatsApp clicks

### Campaign 3: Retargeting (Facebook)
- Audience: Website visitors (last 30 days)
- Objective: Conversions
- Budget: R30/day
- Creative: "Come back" offer, guarantee
- Track: WhatsApp clicks, problem selector

---

## ✅ Checklist Before Launch

- [ ] Facebook Pixel installed and firing
- [ ] Google Analytics installed and tracking
- [ ] WhatsApp clicks tracked as events
- [ ] Problem selector tracked as leads
- [ ] Test all tracking with real clicks
- [ ] Set up conversion values in ad platforms
- [ ] Create custom audiences for retargeting
- [ ] Verify mobile tracking works
- [ ] Set up Google Tag Manager (optional but recommended)

---

## 📱 Quick Test Steps

1. Visit site on phone
2. Click WhatsApp button
3. Check Facebook Events Manager (should see "Contact" event)
4. Check Google Analytics Realtime (should see event)
5. Go back, click problem selector
6. Check if "Lead" event fires
7. Test on desktop too

---

## 💰 Budget Recommendations

**Starting Budget (First Month):**
- Google Ads: R3,000/month (R100/day)
- Facebook Ads: R1,500/month (R50/day)
- Retargeting: R900/month (R30/day)
- **Total: R5,400/month**

**Expected Results (Month 1):**
- 50-100 WhatsApp messages
- 5-10 qualified leads
- 1-3 paying customers
- Cost per lead: R500-R1,000

**After Optimization (Month 3+):**
- Lower cost per lead
- Higher conversion rate
- Better ad targeting
- Scale up budget
