const { Telegraf, Markup } = require("telegraf")
require('dotenv').config()
const bot = new Telegraf(process.env.BOT_TOKEN)
const commands = require('./const')
bot.start((ctx) => ctx.reply(`Добрий день ${ctx.message.from.first_name ?ctx.message.from.first_name : '' }. Ми запрошуємо Вас взяти участь в дослідженні, яке проводить незалежна соціологічна компанія Ipsos.
Будьте впевнені, що всі Ваші відповіді і Ваші особисті дані залишаться суто конфіденційними, а результати будуть включені у звіт тільки в зведеному вигляді.
Просимо Вас відповідати максимально чесно і точно.

Дякуємо за участь!`, Markup.inlineKeyboard(
    [
        [Markup.button.callback('📊 Почати опитування','btn_1')]
    ]
)))
bot.help((ctx) => ctx.reply(commands.commands))

bot.action('btn_1', async (ctx) => {
    try {
       await ctx.answerCbQuery()
       
       await ctx.replyWithHTML('<b>👇 Вкажіть, будь ласка, Ваш вік.</b>', Markup.inlineKeyboard(
        [
            [Markup.button.callback('18 - 24', 'btn_2'), Markup.button.callback('25 - 34', 'btn_3') ],
            [Markup.button.callback('35 - 44', 'btn_4'), Markup.button.callback('45 - 55', 'btn_5') ]
        ]
      )) 
       
    } catch (e) {
        console.error(e)
    }
    
})
function q2(ctx){
     ctx.replyWithHTML('<b>У якому місті Ви проживаєте?</b>', Markup.inlineKeyboard(
        [
            [Markup.button.callback('Київ', 'btn_6'), Markup.button.callback('Львів', 'btn_7') ],
            [Markup.button.callback('Одеса', 'btn_8'), Markup.button.callback('Харків', 'btn_9') ]
        ]
      )) 
}

function q3(ctx){
    ctx.replyWithHTML('<b>Якими типами косметичних засобів ви користуєтесь?</b>', Markup.inlineKeyboard(
        [
            [Markup.button.callback('Засоби для догляду за волоссям', 'btn_10')], 
            [Markup.button.callback('Засоби для догляду за шкірою обличчя', 'btn_11')],
            [Markup.button.callback('Засоби для догляду за тілом', 'btn_12')], 
            [Markup.button.callback('Декоративна косметика', 'btn_13') ],
            [Markup.button.callback('Наступне питання', 'btn_14') ]
        ]
      )) 
}

bot.action('btn_2', async (ctx) => {
    try {
         await ctx.answerCbQuery()
        await ctx.reply('18 - 24')
         q2(ctx)
        } catch (e) {
        console.error(e)
    }
})
bot.action('btn_3', async (ctx) => {
    try {
         await ctx.answerCbQuery()
        await ctx.reply('25 - 34')
         q2(ctx)
        } catch (e) {
        console.error(e)
    }
})
bot.action('btn_4', async (ctx) => {
    try {
         await ctx.answerCbQuery()
        await ctx.reply('35 - 44')
         q2(ctx)
        } catch (e) {
        console.error(e)
    }
})

bot.action('btn_5', async (ctx) => {
    try {
        await ctx.answerCbQuery()
        await ctx.reply('45 - 54')
         q2(ctx)
        } catch (e) {
        console.error(e)
    }
})


bot.action('btn_6', async (ctx) => {
    try {
         await ctx.answerCbQuery()
         await ctx.reply('Київ')
         q3(ctx)
        } catch (e) {
        console.error(e)
    }
})
bot.action('btn_7', async (ctx) => {
    try {
         await ctx.answerCbQuery()
         await ctx.reply('Львів')
         q3(ctx)
        } catch (e) {
        console.error(e)
    }
})

bot.action('btn_8', async (ctx) => {
    try {
         await ctx.answerCbQuery()
         await ctx.reply('Одеса')
         q3(ctx)
        } catch (e) {
        console.error(e)
    }
})
bot.action('btn_9', async (ctx) => {
    try {
         await ctx.answerCbQuery()
         await ctx.reply('Харків')
         q3(ctx)
        } catch (e) {
        console.error(e)
    }
})

bot.action('btn_10', async (ctx) => {
    try {
         await ctx.answerCbQuery()
         await ctx.reply('Засоби для догляду за волоссям')
        } catch (e) {
        console.error(e)
    }
})

bot.action('btn_11', async (ctx) => {
    try {
         await ctx.answerCbQuery()
         await ctx.reply('Засоби для догляду за шкірою обличчя')
        } catch (e) {
        console.error(e)
    }
})
bot.action('btn_12', async (ctx) => {
    try {
         await ctx.answerCbQuery()
         await ctx.reply('Засоби для догляду за тілом')
        } catch (e) {
        console.error(e)
    }
})
bot.action('btn_13', async (ctx) => {
    try {
         await ctx.answerCbQuery()
         await ctx.reply('Декоративна косметика')
        } catch (e) {
        console.error(e)
    }
})
bot.action('btn_14', async (ctx) => {
    try {
         await ctx.answerCbQuery()
         await ctx.reply('Які марки для догляду за волосмям Ви знаєте?')
         
        } catch (e) {
        console.error(e)
    }
})
bot.on('text', (ctx) => ctx.replyWithHTML('Якими з перерахованих марок ви користуєтесь зараз?', 
Markup.inlineKeyboard(
    [
        [Markup.button.callback('Garnier', 'btn_15'), Markup.button.callback('Syouss', 'btn_16')],
        [Markup.button.callback('Pantine', 'btn_17'),Markup.button.callback('Glisscur', 'btn_18') ],
        [Markup.button.callback('Head and shoulders', 'btn_19'), Markup.button.callback('Інше', 'btn_20')],
        [Markup.button.callback('Наступне питання', 'btn_21') ]
        ]
  )) 
  )

bot.action('btn_15', async (ctx) => {
    try {
         await ctx.answerCbQuery()
         await ctx.reply('Garnier')
        } catch (e) {
        console.error(e)
    }
})
bot.action('btn_16', async (ctx) => {
    try {
         await ctx.answerCbQuery()
         await ctx.reply('Syouss')
        } catch (e) {
        console.error(e)
    }
})
bot.action('btn_17', async (ctx) => {
    try {
         await ctx.answerCbQuery()
         await ctx.reply('Pantine')
        } catch (e) {
        console.error(e)
    }
})
bot.action('btn_18', async (ctx) => {
    try {
         await ctx.answerCbQuery()
         await ctx.reply('Glisscur')
        } catch (e) {
        console.error(e)
    }
})
bot.action('btn_19', async (ctx) => {
    try {
         await ctx.answerCbQuery()
         await ctx.reply('Head and shoulders')
        } catch (e) {
        console.error(e)
    }
})
bot.action('btn_20', async (ctx) => {
    try {
         await ctx.answerCbQuery()
         await ctx.reply('Інше')
        } catch (e) {
        console.error(e)
    }
})
bot.action('btn_21', async (ctx) => {
    try {
         await ctx.answerCbQuery()
         await ctx.reply('Зробіть фотографію вашого шампуню і додайте фото.')
         console.log(cxt);
        } catch (e) {
        console.error(e)
    }
})
bot.on('quit', (ctx) => ctx.reply('Оберіть емодзі, яке передає ваше ставлення до шампуню Garnier.'))
console.log(cxt);
bot.launch()
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))