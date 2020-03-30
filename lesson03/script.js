let lang = "en",
    weekday = [
    ["Понедельник, вторник, среда, четверг, пятница"],
    ["Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday"]
];

if (lang === "ru"){
    console.log("Понедельник, вторник, среда, четверг, пятница");
} else if(lang === "en"){
    console.log("Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday");
}

switch(lang){
    case "en":
        console.log("Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday");
        break;
    case "ru": console.log("Понедельник, вторник, среда, четверг, пятница");
}

(lang === "ru") ? console.log(weekday[0][0]) : console.log(weekday[1][0]);

let namePerson = "Артем";

(namePerson === "Артем") ? console.log("директор") :
    (namePerson === "Максим") ? console.log("преподаватель") :
    console.log("студент");