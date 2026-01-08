let file = "file.txt";
let data = [];
let val;
let poem = [];
let tmppoem;

//(
    //function() {
        fetch(file)
        .then((x) => {
            //console.log(x)
            //console.log(typeof(x))
            //console.log(Object.values(x))
            return x.text() 
        })
        .then((y) => {
            data = [y]
            
            data = data.toString()
            //console.log(typeof(data))
            //console.log(data)
            val = data.split("\n").join("").split("\r") //.join(" ").split("!").join(" ").split("?").join(" ").split(".").join(" ").split(";")
            //console.log(val)
            //Recreate(val)
        });
    //}
//)();

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function Recreate(val) {
    //cancella la poesia precedente
    poem = []

    //console.log(val)
    //console.log("ciaone")

    //trova la prima riga con carattere maiscolo
    var input = val[getRandomInt(val.length-1)]
    //console.log(input)
    //console.log(input[0])
    //var output = Array.from(input, c => 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.includes(c) ? c : 0);
    if ("ABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(input[0]) !== -1) {
        //console.log("ok è buona")
        
        //aggiungila ad un array
        poem.push(input)
        //se termina con un carattere di stop
        //finisci la poesia
        if (".;!?".indexOf(input[input.length-1]) !== -1) {
            //console.log("OOOHHHHH")
            //console.log(input[input.length-1])
            document.getElementById("poetry").innerHTML = poem
            document.getElementById("w279").innerHTML = "<i>- I fiori di ran</i>"
        }
        else {
            Compose(val)
        }
        
    }    
    else Recreate(val)    
}

function Compose(val) {
    //continua ad aggiungere righe all'array 
    //finché non trovi un carattere di stop
    //. ; ? !
    var input = val[getRandomInt(val.length-1)]
    if (".;!?".indexOf(input[input.length-1]) !== -1) {
        poem.push(input)

        console.log(poem)
        //poem.reverse()
        poem = poem.toString().split(",").join("<br>")
        console.log(poem)
        //console.log(poem)
        document.getElementById("poetry").innerHTML = poem
        document.getElementById("w279").innerHTML = "<i>- I fiori di ran</i>"

    }
    else if ("ABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(input[0]) == -1){
        poem.push(input)
        Compose(val)
    }

    //aggiungi l'array di frasi ad HTML

    //aggiungi l'effetto scrittura (opz)

    
}