function greeting(){
    let username = "Bryan";
    function displayUsername(){
        return `Hello ${username}`;
    }
    return displayUsername;
}

const gree = greeting();
console.log(gree);
console.log(gree());