//Variables 
let btn =document.querySelector('#new-quote');
let quote =document.querySelector('.quote');
let person =document.querySelector('.person');

const quotes =[{
    quote:`"The best way to find yourself is to lose yourself in the service of others."`,
    person:`Magatma Gandhi`
},{
    quote:`"If you want to live a happy life , tie it to a goal, not to people or things."`,
    person:`Albert Einstein`
},{
    quote:`"At his best , man is the noblest of all animals; separated from law and justice he is the worst."`,
    person:`Aristotle`
},{
    quote:`"Your time is limited , so dont waste it living someone else's life."`,
    person:`Magatma Gandhi`
},{
    quote:`"The best way to find yourself is to lose yourself in the service of others."`,
    person:`Steve Jobs`
},{
    quote:`"Tell me and i forget. Teach me and i remember . invilve me and I learn."`,
    person:`Benjamin Franklin`
},{
    quote:`"If you look at what you have in life, you'll always have more. if you look at what you don't have in life , you'will never have enough."`,
    person:`Oprah Winfrey`
},{
    quote:`"If you look at what you have in life, you'll always have more. if you look at what you don't have in life , you'will never have enough. "`,
    person:`Oprah Winfrey`
},{
    quote:`"It does not matter how slowly you go as long as you do not stop. `,
    person:`Confucius`
},{
    quote:`"Our lives begin to end the day we become silent about things that matters "`,
    person:`Martin luther King, Jr`
},{
    quote:`"Remember that not getting what you want is sometimes a wonderful stroke of luck"`,
    person:`Dalai Lama`
},{
    quote:`"The journey of a thousand miles begin with one step "`,
    person:`Lao Tzo`
},
];


btn.addEventListener('click',function(){
    let random =Math.floor(Math.random()*quotes.length);
    quote.innerText =quotes[random].quote;
    person.innerText =quotes[random].person;
})
