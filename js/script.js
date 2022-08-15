$(document).ready(function(){
    let suits = ["H", "C", "D", "S"];
    let ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "T", "J", "Q", "K", "A"];
    
    for (let suitCounter =0; suitCounter < 4; suitCounter ++) {
        // console.log(suits[suitCounter])
        for (let rankCounter = 0; rankCounter < 13; rankCounter ++) {
            console.log(ranks[rankCounter] + suits[suitCounter]);

            $("#Deck").show()
        }
    }
})
