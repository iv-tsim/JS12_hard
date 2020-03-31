const lang = "en",
    weekday = new Map([
        ["ru", "Понедельник, вторник, среда, четверг, пятница"],
        ["en", "Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday"]
    ]);

if (lang === "ru"){
    console.log(weekday.get(lang));
} else if(lang === "en"){
    console.log(weekday.get(lang));
}

switch(lang){
    case "en":
        console.log(weekday.get(lang));
        break;
    case "ru":
        console.log(weekday.get(lang));
        break;
    default: console.log("Something went wrong");
}

console.log(weekday.get(lang));

const namePerson = "Артем";

console.log((namePerson === "Артем") ? "директор" : (namePerson === "Максим") ? "преподаватель" : "студент");