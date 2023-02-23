const { Telegraf, Markup } = require("telegraf")
require('dotenv').config()
const userAnswers ={}
const q3Answers = []
const q5Answers = []
const bot = new Telegraf(process.env.BOT_TOKEN)
const questions = require('./questions/questionsData')
const commands = require('./const')
const chatId = 561308012
bot.start((ctx) => {ctx.reply(`Добрий день ${ctx.message.from.first_name ?ctx.message.from.first_name : '' }. Ми запрошуємо Вас взяти участь в дослідженні, яке проводить незалежна соціологічна компанія Ipsos.
Будьте впевнені, що всі Ваші відповіді і Ваші особисті дані залишаться суто конфіденційними, а результати будуть включені у звіт тільки в зведеному вигляді.
Просимо Вас відповідати максимально чесно і точно.

 Дякуємо за участь!`, Markup.inlineKeyboard(
    [
        [Markup.button.callback('📊 Почати опитування','btn_1')]
    ]
))

userAnswers.name = ctx.message.from.first_name
userAnswers.startTime = Date()
})

bot.action('btn_1', async (ctx) => {
    try {
       console.log('ctx',ctx) 
       await ctx.answerCbQuery()
       const Q1 = questions.Q1
       await ctx.deleteMessage()
       await ctx.replyWithHTML(`<b>👇 ${Q1.question}</b>`, Markup.inlineKeyboard(
        [
            [Markup.button.callback(`${Q1.answers[0]}`, 'btn_2'), Markup.button.callback(`${Q1.answers[1]}`, 'btn_3') ],
            [Markup.button.callback(`${Q1.answers[2]}`, 'btn_4'), Markup.button.callback(`${Q1.answers[3]}`, 'btn_5') ]
        ]
  
      )) 
       
    } catch (e) {
        console.error(e)
    }
})

function q2(ctx){
    const Q2 = questions.Q2
     ctx.replyWithHTML(`<b>${Q2.question}</b>`, Markup.inlineKeyboard(
        [
            [Markup.button.callback(`${Q2.answers[0]}`, 'btn_6'), Markup.button.callback(`${Q2.answers[1]}`, 'btn_7') ],
            [Markup.button.callback(`${Q2.answers[2]}`, 'btn_8'), Markup.button.callback(`${Q2.answers[3]}`, 'btn_9') ]
        ]
      )) 
}

function q3(ctx){
    const Q3 = questions.Q3
    ctx.replyWithHTML(`<b>${Q3.question}</b>`, Markup.inlineKeyboard(
        [
            [Markup.button.callback(`${Q3.answers[0]}`, 'btn_10')], 
            [Markup.button.callback(`${Q3.answers[1]}`, 'btn_11')],
            [Markup.button.callback(`${Q3.answers[2]}`, 'btn_12')], 
            [Markup.button.callback(`${Q3.answers[3]}`, 'btn_13')],
            [Markup.button.callback('Наступне питання', 'btn_14')]
        ]
      )) 
}

bot.action('btn_2', async (ctx) => {
    try {
        await ctx.deleteMessage()
         await ctx.answerCbQuery()
        //  await ctx.reply(`${questions.Q1.question}`)
        // await ctx.reply(`${questions.Q1.question}`, questions.Q1.answers[0])
         q2(ctx)
         userAnswers.Q1 = questions.Q1.answers[0]
         console.log('userAnswers',userAnswers)
        } catch (e) {
        console.error(e)
    }
})
bot.action('btn_3', async (ctx) => {
    try {
        await ctx.deleteMessage()
         await ctx.answerCbQuery()
        // await ctx.reply(questions.Q1.answers[1])
         q2(ctx)
         userAnswers.Q1 = questions.Q1.answers[1]
         console.log('userAnswers',userAnswers)
        } catch (e) {
        console.error(e)
    }
})
bot.action('btn_4', async (ctx) => {
    try {
        await ctx.deleteMessage()
         await ctx.answerCbQuery()
        // await ctx.reply(questions.Q1.answers[2])
         q2(ctx)
         userAnswers.Q1 = questions.Q1.answers[2]
         console.log('userAnswers',userAnswers)
        } catch (e) {
        console.error(e)
    }
})


bot.action('btn_5', async (ctx) => {
    try {
        await ctx.deleteMessage()
        await ctx.answerCbQuery()
        // await ctx.reply(questions.Q1.answers[3])
         q2(ctx)
         userAnswers.Q1 = questions.Q1.answers[3]
         console.log('userAnswers',userAnswers)
        } catch (e) {
        console.error(e)
    }
})


bot.action('btn_6', async (ctx) => {
    try {
        await ctx.deleteMessage()
         await ctx.answerCbQuery()
        //  await ctx.reply(questions.Q2.answers[0])
         q3(ctx)
         userAnswers.Q2 = questions.Q2.answers[0]
         console.log('userAnswers',userAnswers)
        } catch (e) {
        console.error(e)
    }
})
bot.action('btn_7', async (ctx) => {
    try {
        await ctx.deleteMessage()
         await ctx.answerCbQuery()
        //  await ctx.reply(questions.Q2.answers[1])
         q3(ctx)
         userAnswers.Q2 = questions.Q2.answers[1]
         console.log('userAnswers',userAnswers)
        } catch (e) {
        console.error(e)
    }
})

bot.action('btn_8', async (ctx) => {
    try {
        await ctx.deleteMessage()
        await ctx.answerCbQuery()
        //  await ctx.reply(questions.Q2.answers[1])
         q3(ctx)
         userAnswers.Q2 = questions.Q2.answers[2]
         console.log('userAnswers',userAnswers)
        } catch (e) {
        console.error(e)
    }
})
bot.action('btn_9', async (ctx) => {
    try {
        await ctx.deleteMessage()
         await ctx.answerCbQuery()
        //  await ctx.reply(questions.Q2.answers[3])
         q3(ctx)
         userAnswers.Q2 = questions.Q2.answers[3]
         console.log('userAnswers',userAnswers)
        } catch (e) {
        console.error(e)
    }
})
let mesChatId =  null
let upIp3 = null
bot.action('btn_10', async (ctx) => {
    try {
         await ctx.answerCbQuery()
         if (q3Answers.indexOf(questions.Q3.answers[0]) === -1){
         q3Answers.push(questions.Q3.answers[0])  
         await ctx.reply(questions.Q3.answers[0])
         console.log('questions.Q3.answers',ctx.update.callback_query.message.chat.id);
         mesChatId = ctx.update.callback_query.message.chat.id
         upIp3 = ctx.update.callback_query.message.message_id
        //  console.log('q3Answers',q3Answers);
        }
        else{
            const i = q3Answers.indexOf(questions.Q3.answers[0])
            if (i !== -1) {
            q3Answers.splice(i, 1)
            console.log('q3Answers',q3Answers);
            }

            await ctx.editMessageText(questions.Q3.answers[0]) 
        }
        } catch (e) {
        console.error(e)
    }
})

bot.action('btn_11', async (ctx) => {
    try {
         await ctx.answerCbQuery()
         if (q3Answers.indexOf(questions.Q3.answers[1]) === -1){
            q3Answers.push(questions.Q3.answers[1])  
            await ctx.reply(questions.Q3.answers[1])
            
            console.log('q3Answers',q3Answers);
           }
        } catch (e) {
        console.error(e)
    }
})
bot.action('btn_12', async (ctx) => {
    try {
         await ctx.answerCbQuery()
         if (q3Answers.indexOf(questions.Q3.answers[2]) === -1){
            q3Answers.push(questions.Q3.answers[2])  
            await ctx.reply(questions.Q3.answers[2])
            
            console.log('q3Answers',q3Answers);
           }
        } catch (e) {
        console.error(e)
    }
})
bot.action('btn_13', async (ctx) => {
    try {
         await ctx.answerCbQuery()
         if (q3Answers.indexOf(questions.Q3.answers[3]) === -1){
            q3Answers.push(questions.Q3.answers[3])  
            await ctx.reply(questions.Q3.answers[3])
            
            console.log('q3Answers',q3Answers);
           }
        } catch (e) {
        console.error(e)
    }
})
bot.action('btn_14', async (ctx) => {
    try {
         
         userAnswers.Q3 = q3Answers
         console.log('userAnswers',userAnswers);
        //  await bot.delete_message(5830703746)
         await ctx.answerCbQuery()
         await ctx.reply('Які марки для догляду за волосмям Ви знаєте?')
        
         await ctx.deleteMessage()
        //  console.log(mesChatId,upIp3);
         bot.delete_message(mesChatId,upIp3)
        } catch (e) {
        console.error(e)
    }
})

bot.on('text', (ctx) => {
    
    ctx.replyWithHTML('Якими з перерахованих марок ви користуєтесь зараз?', 
Markup.inlineKeyboard(
    [
        [Markup.button.callback('Garnier', 'btn_15'), Markup.button.callback('Syouss', 'btn_16')],
        [Markup.button.callback('Pantine', 'btn_17'),Markup.button.callback('Glisscur', 'btn_18') ],
        [Markup.button.callback('Head and shoulders', 'btn_19'), Markup.button.callback('Інше', 'btn_20')],
        [Markup.button.callback('Наступне питання', 'btn_21') ]
        ]
        
  )) 

userAnswers.Q4 = `${ctx.message.text}`
console.log('userAnswers', userAnswers);
}
  )

  bot.action('btn_15', async (ctx) => {
    try {
         await ctx.answerCbQuery()
         if (q5Answers.indexOf(questions.Q5.answers[0]) === -1){
            q5Answers.push(questions.Q5.answers[0])  
            await ctx.reply(questions.Q5.answers[0])
            
            console.log('q5Answers',q5Answers);
           }
        } catch (e) {
        console.error(e)
    }
})
bot.action('btn_16', async (ctx) => {
    try {
         await ctx.answerCbQuery()
         if (q5Answers.indexOf(questions.Q5.answers[1]) === -1){
            q5Answers.push(questions.Q5.answers[1])  
            await ctx.reply(questions.Q5.answers[1])
            
            console.log('q5Answers',q5Answers);
           }
        } catch (e) {
        console.error(e)
    }
})
bot.action('btn_17', async (ctx) => {
    try {
         await ctx.answerCbQuery()
         if (q5Answers.indexOf(questions.Q5.answers[2]) === -1){
            q5Answers.push(questions.Q5.answers[2])  
            await ctx.reply(questions.Q5.answers[2])
            
            console.log('q5Answers',q5Answers);
           }
        } catch (e) {
        console.error(e)
    }
})
bot.action('btn_18', async (ctx) => {
    try {
         await ctx.answerCbQuery()
         if (q5Answers.indexOf(questions.Q5.answers[3]) === -1){
            q5Answers.push(questions.Q5.answers[3])  
            await ctx.reply(questions.Q5.answers[3])
            
            console.log('q5Answers',q5Answers);
           }
        } catch (e) {
        console.error(e)
    }
})
bot.action('btn_19', async (ctx) => {
    try {
         await ctx.answerCbQuery()
         if (q5Answers.indexOf(questions.Q5.answers[4]) === -1){
            q5Answers.push(questions.Q5.answers[4])  
            await ctx.reply(questions.Q5.answers[4])
            
            console.log('q5Answers',q5Answers);
           }
        } catch (e) {
        console.error(e)
    }
})
bot.action('btn_20', async (ctx) => {
    try {
         await ctx.answerCbQuery()
         if (q5Answers.indexOf(questions.Q5.answers[5]) === -1){
            q5Answers.push(questions.Q5.answers[5])  
            await ctx.reply(questions.Q5.answers[5])
            
            console.log('q5Answers',q5Answers);
           }
        } catch (e) {
        console.error(e)
    }
})
bot.action('btn_21', async (ctx) => {
    try {
        ctx.deleteMessage()
         userAnswers.Q5 = q5Answers
         console.log('userAnswers',userAnswers);
         await ctx.answerCbQuery()
         await ctx.reply('Зробіть фотографію вашого шампуню і додайте фото.')
        //  console.log(cxt);
        } catch (e) {
        console.error(e)
    }
})
bot.on('photo', (ctx) => {
    console.log('ctxPhoto', ctx.message.chat);
    ctx.reply('Оберіть емодзі, яке передає ваше ставлення до шампуню Garnier.')}
    )
bot.hears('sticker', (ctx) => ctx.reply('Дякую за увагу'))
bot.launch()
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))