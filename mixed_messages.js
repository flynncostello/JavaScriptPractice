const randomWords = [
    "coffee",
    "sunshine",
    "adventure",
    "laughter",
    "galaxy",
    "melody",
    "dream",
    "tranquility",
    "harmony",
    "mystery",
    "whisper",
    "serendipity",
    "serenity",
    "blossom",
    "echo",
    "luminous",
    "ethereal",
    "cascade",
    "wanderlust",
    "jubilant",
];

function pickWord() {
    const newWordIndex = Math.floor(Math.random() * randomWords.length);
    const newWord = randomWords[newWordIndex];
    return newWord;
}


function generateMessage() {
    const messageLength = Math.floor(Math.random() * randomWords.length);
    let msg = "";
    let i = 0;
    while(i < messageLength) {
        let newWord = pickWord();
        if(i === 0) {
            newWord = newWord.charAt(0).toUpperCase() + newWord.slice(1);
        }
        msg += newWord + " ";
        i++;
    }
    msg = msg.trim();
    msg += '.';
    console.log(msg);
}

generateMessage();