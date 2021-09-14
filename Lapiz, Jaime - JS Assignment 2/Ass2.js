let obj = [{
    "name": "Luke Skywalker",
    "height": "172",
    "mass": "77",
    "hair_color": "blond",
    "skin_color": "fair",
    "eye_color": "blue",
    "birth_year": "19BBY",
    "gender": "male"
},
{
    "name": "C-3PO",
    "height": "167",
    "mass": "75",
    "hair_color": "n/a",
    "skin_color": "gold",
    "eye_color": "yellow",
    "birth_year": "112BBY",
    "gender": "n/a"
},
{
    "name": "R2-D2",
    "height": "96",
    "mass": "32",
    "hair_color": "n/a",
    "skin_color": "white, blue",
    "eye_color": "red",
    "birth_year": "33BBY",
    "gender": "n/a"
},
{
    "name": "Darth Vader",
    "height": "202",
    "mass": "136",
    "hair_color": "none",
    "skin_color": "white",
    "eye_color": "yellow",
    "birth_year": "41.9BBY",
    "gender": "male"
},
{
    "name": "Leia Organa",
    "height": "150",
    "mass": "49",
    "hair_color": "brown",
    "skin_color": "light",
    "eye_color": "brown",
    "birth_year": "19BBY",
    "gender": "female"
}]

let arrName = new Array();

let returnMale = () => {
    for (let i = 0; i < obj.length; i++) {
        if (obj[i].gender === "male") 
            arrName.push(obj[i].name);
    }      
}

let returnFemale = () => {
    for (let i = 0; i < obj.length; i++) {
        if (obj[i].gender === "female") 
            arrName.push(obj[i].name);
    } 
}

let returnNA = () => {
    for (let i = 0; i < obj.length; i++) {
        if (obj[i].gender === "n/a") 
            arrName.push(obj[i].name);
    } 
}

let returnHeight = () => {
    for (let i = 0; i < obj.length; i++) {
        if (parseInt(obj[i].height) > 150) 
            arrName.push(obj[i].name);
    } 
}

let choice = prompt("Select an option from [1] to [4]\n[1] Display Male Characters\n[2] Display Female Characters\n[3] Display N/A Characters\n[4] Characters with height greater than 150");

switch (choice) {
    case '1':   returnMale();
                alert("Male Characters\n" + arrName);
        break;
    case '2':   returnFemale();
                alert("Female Characters\n" + arrName);
        break;
    case '3':   returnNA();
                alert("N/A Characters\n" + arrName);
        break;
    case '4':   returnHeight();
                alert("Characters with height greater than 150\n" + arrName);
        break;
    default: alert("Invalid Selection!");
}