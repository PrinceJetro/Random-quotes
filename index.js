Quotes=[
    {
       "quote" : "We cannot solve problems with the kind of thinking we employed when we came up with them",
       "author" : " Albert Einstein"
    },
    {
        "quote" : "Learn as if you will live forever, live like you will die tomorrow.",
        "author" : "Mahatma Gandhi"
    },
    {'author': 'Jim Rohn', 
     'quote': 'Beware of what you become in pursuit of what you want.'
    },
    {'author': 'Epictetus', 
     'quote': 'It\'s not what happens to you, but how you react to it that matters.'
    },
    {'author': 'Frank Sinatra', 
     'quote': 'The best revenge is massive success.'
    },
    {'author': 'Wayne Gretzy', 
     'quote': 'You miss 100% of the shots you don\'t take.'
    },
    {'author': 'Nelson Mandela', 
     'quote': 'Resentment is like drinking poison and waiting for your enemies to die.'
    },
    {'author': 'Elbert Hubbard', 
     'quote': 'Do not take life too seriously. You will not get out alive.'
    },
    
];

let random = Math.floor(Math.random()*8)

quotesEl= document.querySelector(".quotes")
authorEl= document.querySelector(".author")

let quotesValue = Quotes[random].quote;
let authorValue = Quotes[random].author;



function getQuotes(){
    quotesEl.innerText =quotesValue;
    authorEl.innerText = authorValue;

    console.log(random)   
}

function reset(){
          clearInterval(random);

}

console.log(quotesEl)