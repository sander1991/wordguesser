const words = ["success",
    "appointment",
    "administration",
    "procedure",
    "situation",
    "food",
    "advice",
    "emphasis",
    "vehicle",
    "education",
    "writing",
    "gate",
    "dinner",
    "independence",
    "ratio",
    "wife",
    "possession",
    "alcohol",
    "love",
    "university",
    "importance",
    "committee",
    "decision",
    "session",
    "thanks",
    "replacement",
    "fortune",
    "sister",
    "article",
    "studio",
    "reputation",
    "math",
    "percentage",
    "heart",
    "topic",
    "desk",
    "interaction",
    "homework",
    "grandmother",
    "cell",
    "reaction",
    "combination",
    "indication",
    "baseball",
    "currency",
    "cigarette",
    "client",
    "discussion",
    "breath",
    "actor"]


function createGame() {
    return new Promise(function (resolve, reject) {
        var cardIndex = []
        var cards = []
        var cardsfinal = [];
        for (var i = 0; i < 25; i++) {
            var singleIndex = getRandomInt(words.length)

            while (cardIndex.includes(singleIndex)) {
                singleIndex = getRandomInt(words.length);
            }

            cardIndex.push(singleIndex)
            cards.push(
                {
                    word: words[singleIndex],
                    color: "neutral",
                    selected: false
                })
        }

        for (var red = 0; red < 9; red++) {
            var singleIndex = getRandomInt(cards.length)

            cards[singleIndex].color = "red";
            cardsfinal.push(cards[singleIndex]);
            cards.splice(singleIndex, 1);
        }

        for (var blue = 0; blue < 8; blue++) {
            var singleIndex = getRandomInt(cards.length)

            cards[singleIndex].color = "blue";
            cardsfinal.push(cards[singleIndex]);
            cards.splice(singleIndex, 1);
        }

        var bombIndex = getRandomInt(cards.length)
        cards[bombIndex].color = "black";

        var final = cards.concat(cardsfinal);
        final = shuffle(final);

        resolve(final);
    });
}


function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

module.exports = {
    createGame
};