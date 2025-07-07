const quotes=[
    "Don't give up! You are doing your best.",
    "You are stronger than you think .",
    "Every day is a second chance .",
    "You' ve survived 100% of your worst days",
    "Your fellings are valid .",
    "Take one step a a time.",
    "It's okay to not be okay.",
    "Believe in Yourself and all that you are."
];
function getRandomQuote(){
    const index=Math.floor(Math.random()*quotes.length);
    return quotes[index];
}