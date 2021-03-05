// Write your solution here!

let cats = ["Milo","Otis", "Garfield"];

function destructivelyAppendCat(name){
    cats.push(name);
}

function destructivelyPrependCat(name){
    cats.unshift(name);
}

function destructivelyRemoveLastCat(){
    cats.pop();
}

function destructivelyRemoveFirstCat(){
    cats.shift();
}

function appendCat(name){
    let newCat = [...cats, name];
    return newCat;
}

function prependCat(name){
    let newCat = [name, ...cats];
    return newCat;
}

function removeLastCat(){
    let newCat = cats.slice(0,-1);
    return newCat;
}

function removeFirstCat(){
    let newCat = cats.slice(1);
    return newCat;
}