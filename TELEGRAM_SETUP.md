# 📱 Telegram Bot Integration Guide

This guide will help you set up the Telegram bot integration for your portfolio's contact form.

## 🎯 What This Does

When someone fills out your contact form, you'll instantly receive a notification on Telegram with:
- Person's name
- Email address
- Their message
- Timestamp

## 📋 Prerequisites

- A Telegram account
- Access to Telegram on your phone or desktop

## 🔧 Step-by-Step Setup

### Step 1: Create Your Bot with BotFather

1. **Open Telegram** on your device

2. **Search for BotFather**
   - In the search bar, type: `@BotFather`
   - Click on the official BotFather (verified with a blue checkmark)

3. **Start a conversation**
   - Click "START" or send `/start`

4. **Create a new bot**
   - Send the command: `/newbot`
   
5. **Name your bot**
   - BotFather will ask for a name
   - Example: "My Portfolio Bot"
   - This is the display name users will see

6. **Choose a username**
   - Must end with 'bot'
   - Example: "myportfolio_contact_bot"
   - Must be unique

7. **Save your Bot Token**
   - BotFather will send you a message with your token
   - It looks like: `1234567890:ABCdefGHIjklMNOpqrsTUVwxyz`
   - **⚠️ IMPORTANT**: Keep this token secret! Don't share it publicly

### Step 2: Get Your Chat ID

**Method 1: Using a Bot**

1. **Search for @userinfobot**
   - In Telegram search: `@userinfobot`

2. **Start the bot**
   - Click "START"
   - The bot will immediately send you your Chat ID
   - It's a number like: `123456789`

**Method 2: Manual Method**

1. Start a chat with your bot (search for the username you created)
2. Send any message to your bot (e.g., "Hello")
3. Open this URL in your browser (replace YOUR_BOT_TOKEN):
   ```
   https://api.telegram.org/botYOUR_BOT_TOKEN/getUpdates
   ```
4. Look for `"chat":{"id":123456789}` in the response
5. That number is your Chat ID

### Step 3: Configure Your Application

1. **Open the Contact component**
   ```
   src/components/Contact/Contact.jsx
   ```

2. **Find these lines** (around line 13-14):
   ```javascript
   const TELEGRAM_BOT_TOKEN = 'YOUR_BOT_TOKEN_HERE'
   const TELEGRAM_CHAT_ID = 'YOUR_CHAT_ID_HERE'
   ```

3. **Replace with your actual values**:
   ```javascript
   const TELEGRAM_BOT_TOKEN = '1234567890:ABCdefGHIjklMNOpqrsTUVwxyz'
   const TELEGRAM_CHAT_ID = '123456789'
   ```

4. **Save the file**

### Step 4: Test Your Integration

1. **Start your development server**
   ```bash
   npm run dev
   ```

2. **Navigate to the Contact section** on your website

3. **Fill out the form** with test data:
   - Name: Test User
   - Email: test@example.com
   - Message: This is a test message

4. **Click "Send Message"**

5. **Check your Telegram**
   - You should receive a message from your bot
   - It will contain all the form details

### Step 5: Customize Message Format (Optional)

You can customize how messages appear in Telegram by editing the `sendToTelegram` function in `Contact.jsx`:

```javascript
const message = `
🔔 *New Contact Form Submission*

👤 *Name:* ${data.name}
📧 *Email:* ${data.email}

💬 *Message:*
${data.message}

---
Sent from Portfolio Website
`
```

**Formatting Options:**
- `*text*` - Bold text
- `_text_` - Italic text
- `[text](url)` - Links
- `` `code` `` - Inline code
- Emojis work directly

## 🔒 Security Best Practices

### 1. Environment Variables (Production)

For production, don't hardcode your tokens! Use environment variables:

**Create `.env` file:**
```env
VITE_TELEGRAM_BOT_TOKEN=your_bot_token_here
VITE_TELEGRAM_CHAT_ID=your_chat_id_here
```

**Update Contact.jsx:**
```javascript
const TELEGRAM_BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN
const TELEGRAM_CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID
```

**Add to .gitignore:**
```
.env
.env.local
```

### 2. Vercel Environment Variables

When deploying to Vercel:

1. Go to your project settings
2. Navigate to "Environment Variables"
3. Add:
   - `VITE_TELEGRAM_BOT_TOKEN`: your bot token
   - `VITE_TELEGRAM_CHAT_ID`: your chat ID
4. Redeploy your application

### 3. Netlify Environment Variables

When deploying to Netlify:

1. Go to Site settings → Build & deploy → Environment
2. Click "Edit variables"
3. Add the same variables as above
4. Redeploy

## 🐛 Troubleshooting

### Issue: Not receiving messages

**Solution 1: Verify Bot Token**
- Copy your token again from BotFather
- Make sure there are no extra spaces
- Token should be one continuous string

**Solution 2: Check Chat ID**
- Verify your Chat ID is correct
- It should be a number (can be negative for groups)

**Solution 3: Start the Bot**
- Make sure you've sent at least one message to your bot
- The bot can't message you until you start a conversation

### Issue: "Unauthorized" Error

**Cause**: Wrong Bot Token

**Solution**:
- Double-check your token from BotFather
- Create a new bot if token is lost
- Update the token in your code

### Issue: "Chat not found" Error

**Cause**: Wrong Chat ID or bot hasn't been started

**Solution**:
1. Verify your Chat ID is correct
2. Send a message to your bot first
3. Use @userinfobot to confirm your Chat ID

### Issue: Messages sent but not formatted

**Cause**: Markdown parsing errors

**Solution**:
- Check your message template for syntax errors
- Ensure `parse_mode: 'Markdown'` is set
- Escape special characters if needed

## 💡 Advanced Features

### Multiple Recipients

To send to multiple people/groups:

```javascript
const TELEGRAM_CHAT_IDS = ['123456789', '987654321']

const sendToTelegram = async (data) => {
  const message = `...` // your message template
  
  const promises = TELEGRAM_CHAT_IDS.map(chatId => 
    fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: 'Markdown',
      }),
    })
  )
  
  return Promise.all(promises)
}
```

### Rate Limiting

To prevent spam, add a cooldown:

```javascript
const [lastSubmit, setLastSubmit] = useState(null)

const handleSubmit = async (e) => {
  e.preventDefault()
  
  // 1-minute cooldown
  if (lastSubmit && Date.now() - lastSubmit < 60000) {
    toast.error('Please wait before sending another message')
    return
  }
  
  // ... rest of submit logic
  
  setLastSubmit(Date.now())
}
```

### Auto-Reply

Make your bot send a confirmation back:

1. After successful send, make another API call:
   ```javascript
   await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
     method: 'POST',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify({
       chat_id: TELEGRAM_CHAT_ID,
       text: 'Auto-reply: Thanks for contacting me! I\'ll respond soon.',
     }),
   })
   ```

## 📚 Additional Resources

- [Telegram Bot API Documentation](https://core.telegram.org/bots/api)
- [BotFather Commands](https://core.telegram.org/bots#botfather)
- [Markdown Formatting](https://core.telegram.org/bots/api#markdown-style)

## ❓ Still Having Issues?

If you're still experiencing problems:

1. Check the browser console for errors
2. Verify all credentials are correct
3. Test the API directly using curl:
   ```bash
   curl "https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getMe"
   ```
4. Ensure your bot is not blocked or deactivated

---

Need more help? Open an issue on GitHub or reach out via email!
