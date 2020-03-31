const words = "     wordbdsjdfgsdklhgsdlkfghsdjfkjdfsfugbndsfhbnv ";

const stringStuff = function(x) {
    if (typeof x !== "string")
        return "Вы ввели не строку";
    x = x.trim();
    if (x.length > 30)
        return x.slice(0, 30).concat("...");
    return x;
}

console.log(stringStuff(words));