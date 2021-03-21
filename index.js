const cats = ['Milo', 'Otis', 'Garfield'];

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
    const newArr = [ ...cats, name];
    return newArr;
}

function prependCat(name){
    const newArr = [name, ...cats];
    return newArr;

}

function removeLastCat(){
    return cats.slice(0,cats.length -1);
}

function removeFirstCat(){
    return cats.slice(1, cats.length);
}