function trash(){
    let basket = [];
    function trowTrash(item){
        basket.push(item);
        console.log(basket);
    }
    return trowTrash;
}

const human = trash();
human("Paper");
human("B");
human("C");
human("D");
human("F");