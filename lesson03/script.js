const lang = "en",
    weekday = [
    ["Понедельник, вторник, среда, четверг, пятница"],
    ["Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday"]
];

if (lang === "ru"){
    console.log(weekday[0][0]);
} else if(lang === "en"){
    console.log(weekday[0][0]);
}

switch(lang){
    case "en":
        console.log(weekday[0][0]);
        break;
    case "ru":
        console.log(weekday[0][0]);
        break;
    default: console.log("Something went wrong");
}

(lang === "ru") ? console.log(weekday[0][0]) : console.log(weekday[1][0]);

const namePerson = "Артем";

console.log((namePerson === "Артем") ? "директор" : (namePerson === "Максим") ? "преподаватель" : "студент");