const getcard = document.querySelector(".getcard");
fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
    .then((response) => {
        return response.json();
    })
    .then((cardjson) => {
        console.log(cardjson);
        deckid=cardjson.deck_id;
    })
    .catch((err) => {
        // handle errors
    });
getcard.onclick=draw;
let i=0;
function draw(){
    const pic=document.getElementById("pic");
    fetch(`https://deckofcardsapi.com/api/deck/${deckid}/draw/?count=1`)
        .then((response) => {
            return response.json();
        })
        .then((drawjson) => {
            console.log(drawjson);
            let cards=drawjson.cards[i];
            pic.src=cards.image;
        })
        .catch((err) => {
            // handle errors
        });
}