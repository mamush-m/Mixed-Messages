console.log("HELLO AND WELCOME TO OUR MIXED MESSAGE GENERATOR. CLICK ON RUN TO SEE A WIDE ARRAY (get it? array) OF MESSAGES.");

let messageContainer = []

//random generators
let subGen = Math.floor(Math.random() * 4)
let predGen = Math.floor(Math.random() * 3)
let cityGen = Math.floor(Math.random() * 10)



//Setting up the subject(noun) and verb
let subPred = [
    {//He
        noun: "He", 
        verb:[
            {past: 'went to'}, 
            {present: 'is going to'}, 
            {future: 'will be going to'}
        ]
    },
    {//She
        noun: "She",
        verb:[
            {past: 'went to'}, 
            {present: 'is going to'},
            {future: 'will be going to'}
        ]
    },
    {//They
        noun: "They",
        verb:[
            {past: 'went to'},
            {present: 'is going to'},
            {future: 'will be going'}
        ]
    },
    {//We?
        noun: "We",
        verb:[
            {past: 'went to'},
            {present: 'are going to'},
            {future: 'will be going to'},
        ]
    }
]



//Setting up the predicate-noun
let city = [
    {
        city: 'London', 
        country: 'United Kingdom', 
        population: '10 million'
    },
    {
        city: 'Tokyo',
        country: 'Japan', 
        population: '37 million'
    },
    {
        city: 'Paris',
        country: 'France',
        population: '2 million'
    },
    {
        city: 'Dubai',
        country: 'United Arab Emirates (UAE)',
        population: '3 million'
    },
    {
        city: 'New York City',
        country: 'United States',
        population: '8 million'
    },
    {
        city: 'Washington, DC',
        country: 'United States',
        population: '700 thousand'
    },
    {
        city: 'Los Angeles',
        country: 'United States',
        population: '4 million'
    },
    {
        city: 'Beijing',
        country: 'China',
        population: '21 million'
    },
    {
        city: 'Lagos',
        country: 'Nigeria',
        population: '15 million'
    },
    {
        city: 'Cairo',
        country: 'Egypt',
        population: '10 million'
    }

]

console.log(Math.floor(Math.random() * 4))