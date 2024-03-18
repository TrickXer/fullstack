import fs from 'fs'
import { NlpManager } from 'node-nlp'


// load model
export const load = () => {
    const manager = new NlpManager(({ languages: ['en'] }))

    if (!fs.existsSync('model.nlp')) return manager

    const data = fs.readFileSync('model.nlp', 'utf-8')
    manager.import(data)

    return manager
}

// train model
export const train = () => {
    manager.train().then(() => {
        manager.save()
        console.log('Model successfully saved')
    }).catch((err) => {
        console.log(err)
    })
}

// process the query
export const process = async (query) => await manager.process('en', query)


const manager = load()

// // greetings queries
// manager.addDocument('en', 'hello', 'greeting')
// manager.addDocument('en', 'hi', 'greeting')
// manager.addDocument('en', 'hey', 'greeting')
// manager.addDocument('en', 'hey you', 'greeting')
// manager.addDocument('en', 'yo', 'greeting')
// manager.addDocument('en', 'good morning', 'greeting')
// manager.addDocument('en', 'good afternoon', 'greeting')
// manager.addDocument('en', 'good evening', 'greeting')
// manager.addDocument('en', 'howdy', 'greeting')
// manager.addDocument('en', 'greetings', 'greeting')
// manager.addDocument('en', "what's up?", 'greeting')
// manager.addDocument('en', "what's new?", 'greeting')
// manager.addDocument('en', 'wassup?', 'greeting')

// // greetings answers
// manager.addAnswer('en', 'greeting', 'Greetings!')
// manager.addAnswer('en', 'greeting', 'Hey, how can I assist you today?')
// manager.addAnswer('en', 'greeting', 'Hi! What can I do for you?')
// manager.addAnswer('en', 'greeting', "Hello! I'm here to help. What do you need?")
// manager.addAnswer('en', 'greeting', "Hi there! How may I be of service?")
// manager.addAnswer('en', 'greeting', "Hey! What can I do to make your day better?")
// manager.addAnswer('en', 'greeting', "Wassup? How can I assist you?")
// manager.addAnswer('en', 'greeting', "Yo! What's on your mind?")



// // booking queries
// manager.addDocument('en', 'book venue for party', 'booking')
// manager.addDocument('en', 'advance book venue for party', 'booking.timing')
// manager.addDocument('en', 'early book venue for party', 'booking.timing')

// // booking answers
// manager.addAnswer('en', 'booking', "You can book a venue by browsing through our available options on our website and selecting your preferred date and time. Alternatively, you can chat with me directly, and I can assist you in finding the perfect venue for your event.")
// manager.addAnswer('en', 'booking.timing', "It's best to book your party as early as possible to secure your preferred date and venue. Popular dates tend to fill up quickly, so we recommend booking at least a few months in advance, especially for larger events.",)



// // party queries
// manager.addDocument('en', 'party types', 'party.type')
// manager.addDocument('en', 'types of parties', 'party.type')

// // party answers
// manager.addAnswer('en', 'party.type', "We cater to a wide range of parties including birthdays, anniversaries, corporate events, weddings, and more. Just let us know the type of party you're planning, and we'll help you make it a memorable one!")



// // services queries
// manager.addDocument('en', 'decorations', 'services')
// manager.addDocument('en', 'customize decorations', 'services')

// // services answers
// manager.addAnswer('en', 'services', "Absolutely! We offer customizable decoration packages to suit your theme and preferences. Whether you're going for a classic look or something more unique, we'll work with you to bring your vision to life.")



// // catering queries
// manager.addDocument('en', 'catering ', 'catering')
// manager.addDocument('en', 'arrange catering', 'catering')

// // catering answers
// manager.addAnswer('en', 'catering', "We have a variety of catering options available, from buffet-style to plated meals, and everything in between. Simply let us know your dietary preferences and budget, and we'll handle the rest.")



// // entertainment queries
// manager.addDocument('en', 'entertainment', 'entertainments')
// manager.addDocument('en', 'entertainment options', 'entertainments')

// // entertainment answers
// manager.addAnswer('en', 'entertainments', "We have a range of entertainment options to choose from including DJs, live bands, magicians, photo booths, and more. Whether you want to keep it classy or get the dance floor pumping, we've got you covered!")


// train()

const queries = [
    "How do I book a venue for my party?",
    "What types of parties can I organize with your services?",
    "Can I customize the decorations for my party?",
    "How can I arrange for catering at my party?",
    "What entertainment options do you offer for parties?",
    "How far in advance should I book my party?",
]


queries.map((query, id) => {
    const response = process(query)
    response.then(res => console.log(`${id+1}. ${res.answer}\n`))
})
