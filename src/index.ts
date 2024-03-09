import 'dotenv/config'
import TelegramBot from 'node-telegram-bot-api'
import { Server } from 'http'

// Initialise the bot and enable polling
const bot = new TelegramBot(
    process.env.TELEGRAM_BOT_TOKEN, { polling: true }
)

// Configure a generic message to be sent every time someone communicates with the bot
bot.onText(/.*/, async msg => {

    // Extract the first name of a user who has sent the message
    const firstName = msg.chat.first_name

    // Compose a reply with markdown formatting
    const welcomingMsg = `Hello${firstName ? ', ' + firstName : ''}! 👋🏻\nThis is a simple bot that _currently_ do nothing. Configure it in a way you need!`

    // Send the message
    await bot.sendMessage(msg.chat.id, welcomingMsg, {

        // Notify the API that the message utilises Markdown formatting
        parse_mode: 'Markdown',

        // Create an inline keyboard containing one button with a link
        reply_markup: {
            inline_keyboard: [[{
                text: 'Telegram Bot API',
                url: 'https://core.telegram.org/bots/api'
            }]]
        }
    })
})

// Start a polling server
const port = process.env.PORT
new Server().listen({ port }, () =>
    console.log(`💫 The Telegram Bot is running on port ${port}`)
)