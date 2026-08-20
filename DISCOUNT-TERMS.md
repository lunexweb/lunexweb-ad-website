# 20% First-Time Client Discount - Terms & Conditions

## Offer Details
**Code:** FIRST20  
**Discount:** 20% off first project  
**Maximum Discount:** R10,000  
**Valid For:** 3 days from first website visit  

---

## How It Works

### For Visitors:
1. First-time visitors see countdown banner
2. Timer starts at 3 days (72 hours)
3. Countdown visible on all pages
4. Exit popup reminds them before leaving
5. Must use code "FIRST20" when contacting via WhatsApp

### For You (Lunexweb):
1. When client WhatsApps with code "FIRST20"
2. Verify they're a first-time client (check CRM)
3. Apply 20% discount to their first project
4. Maximum discount: R10,000
5. Mark client in CRM: "FIRST20 used"
6. One-time use per client (track by phone number)

---

## Technical Implementation

### Cookie/LocalStorage Data:
```json
{
  "expiryTime": 1234567890123,
  "claimed": false
}
```

### Storage Location:
- **localStorage key:** `lunexweb_first_time_offer`
- **Duration:** 3 days (72 hours)
- **Reset:** After 30 days from expiry (if unclaimed)

### Timer Logic:
- Starts on first page visit
- Persists across sessions (localStorage)
- Updates every second (countdown display)
- Expires after 3 days
- Resets after 30 days (becomes "new" visitor)

---

## Terms & Conditions (Display on Website)

### What to Show Visitors:

**"20% First-Time Client Discount"**

Terms:
- Valid for new clients only
- 20% off your first project
- Maximum discount: R10,000
- Applies to: Websites, Business Systems, or Social Media packages
- Cannot be combined with other offers
- Must use code FIRST20 when contacting us
- Valid for 3 days from first website visit
- One-time use per client
- Lunexweb reserves the right to verify eligibility

---

## What Qualifies:

✅ **DISCOUNT APPLIES TO:**
- New website development
- Custom business system
- Social media management setup
- Ad campaign setup
- Any first project with Lunexweb

❌ **DISCOUNT DOES NOT APPLY TO:**
- Monthly retainer services
- Domain registration
- Hosting fees
- Third-party costs (ads budget, software licenses)
- Projects under R5,000

---

## Tracking in CRM

### When Someone Claims:
1. Record in your CRM/spreadsheet:
   - Client name
   - Phone number
   - Email
   - Date claimed
   - Project type
   - Discount amount (20%, max R10k)

2. Mark as "FIRST20 - USED"

3. If they try to use it again:
   - Politely explain: "This code is for first-time clients only"
   - Offer alternative: "But we can discuss volume discounts"

---

## FAQ for You to Handle

### "Can I use it on a second project?"
**Answer:** "FIRST20 is for your first project only, but we offer loyalty discounts for returning clients. Let's discuss your next project!"

### "Can I split it across two projects?"
**Answer:** "The 20% applies to one project, but we can combine them into a package deal with a similar discount."

### "The timer expired, can I still use it?"
**Answer:** "The timer is for this specific offer, but let me see what I can do. Tell me about your project." (Use discretion)

### "Can I share the code with a friend?"
**Answer:** "Each business gets their own first-time discount when they visit our site."

---

## Legal Compliance (South African Consumer Protection Act)

### Must Do:
✅ Honor the discount when code is used (if eligible)  
✅ Display clear terms (as shown above)  
✅ Verify client is actually first-time  
✅ Cap at R10,000 max discount  
✅ Keep records of who claimed it  

### Must Not Do:
❌ Refuse discount after promise  
❌ Add hidden terms later  
❌ False advertising (must be real 20%)  
❌ Discriminate in application  

---

## Monthly Reporting

### Track These Metrics:
- Visitors who saw offer (check localStorage)
- Number of claims (WhatsApp with code)
- Conversion rate (claims → paying clients)
- Average discount given
- Revenue from discounted clients
- ROI on discount campaign

### Goal:
- 5-10% of visitors should claim
- 30-40% of claims should convert
- ROI: 3x+ (even with 20% off)

---

## Troubleshooting

### If Client Says "I Don't See Timer":
- Check if they cleared cookies
- Ask them to visit in normal browser (not incognito)
- Manually honor it if they're new

### If Timer Shows Wrong Time:
- Client's computer clock might be wrong
- Timer based on client's device time
- Manually verify and honor

### If Same Person Uses Multiple Devices:
- Track by phone number when they WhatsApp
- One code per business, not per device

---

## Automation Ideas (Future)

### Level 2 (When You Scale):
- Email automation: Send code reminder
- SMS: "Your 20% expires in 6 hours"
- WhatsApp API: Auto-send code details
- CRM integration: Auto-verify eligibility

### Level 3 (Advanced):
- Dynamic discounts based on project size
- Personalized offers per industry
- A/B test: 15% vs 20% vs 25%
- Retargeting ads: "Your discount expires soon"

---

## Success Checklist

- [ ] Discount code implemented (FIRST20)
- [ ] 3-day timer working
- [ ] Exit popup shows offer
- [ ] Terms displayed clearly
- [ ] CRM tracking set up
- [ ] Team trained on how to handle claims
- [ ] Facebook Pixel tracking "DiscountClaimed" event
- [ ] Test: Clear cookies and visit as new user
- [ ] Test: Wait 3 days and verify expiry
- [ ] Legal review of terms (if needed)

---

**Need to update terms? Edit this file and display on website.**
