module.exports = {
  init: (controller) => {
    controller.hears([/I want pizza/], ['direct_message', 'direct_mention', 'ambient'], (bot, message) => {
      bot.reply(message, `Okay fatty...*cough* I mean <@${message.user}>. Wudayuh want?!`)
    })
  },
  help: {
    command: 'order',
    text: `Say "I want pizza" to place your order. We are open W-Sun.`
  }
}
