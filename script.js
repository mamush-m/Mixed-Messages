console.log(">>>HELLO AND WELCOME TO OUR MIXED MESSAGE GENERATOR. CLICK ON RUN TO SEE A WIDE ARRAY (get it? array) OF MESSAGES.<<<");

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
            {present: 'are going to'},
            {future: 'will be going to'}
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
let cityList = [
    {
        city: 'London', 
        country: 'The United Kingdom', 
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
        country: 'The United Arab Emirates (UAE)',
        population: '3 million'
    },
    {
        city: 'New York City',
        country: 'The United States',
        population: '8 million'
    },
    {
        city: 'Washington, DC',
        country: 'The United States',
        population: '700 thousand'
    },
    {
        city: 'Los Angeles',
        country: 'The United States',
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

let peopleStr = (subGen, predGen) => {
    let tense
    if (predGen === 0) {
        tense = 'past'
    }else if (predGen === 1) {
        tense = 'present'
    }else if (predGen === 2) {
        tense = 'future'
    }


    let str = subPred[subGen].noun + ' ' + subPred[subGen].verb[predGen][tense]
    return str
}


let cityStr = cityGen => cityList[cityGen].city + '. It is located in ' + cityList[cityGen].country + ' and it has a population of ' + cityList[cityGen].population + ' people.'



function strGen(subGen, predGen, cityGen) {
    let firstStr = peopleStr(subGen, predGen);
    let lastsStr = cityStr(cityGen);

    let finStr = [firstStr + ' ' + lastsStr];

    return finStr;
}

console.log(strGen(subGen, predGen, cityGen));

