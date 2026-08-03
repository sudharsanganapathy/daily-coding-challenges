function debounce(callback, delay){

    let timer;

    return function(...args){

        clearTimeout(timer);

        timer = setTimeout(()=>{
            callback(...args);
        }, delay);
    }
}

// Example :

function searching(text){
    console.log("Search : ", text);
}

let debouncing = debounce(searching, 3000);

debouncing("H");
debouncing("He");
debouncing("Hel");
debouncing("Hell");
debouncing("Hello");

