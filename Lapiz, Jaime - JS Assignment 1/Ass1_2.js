let obj = [{username : "user1", password: "password"},

{username : "user2", password: "password1"},

{username : "user3", password: "password2"},

{username : "user4", password: "thispassword"} ];

let checkEntry = (userPass, userName) => {
    switch (userName) {
        case obj[0].username: 
            if (userPass === obj[0].password)
                alert("You have successfully logged in!");
            else
                alert("Invalid password!");
            break;
        case obj[1].username:
            if (userPass === obj[1].password)
                alert("You have successfully logged in!");
            else
                alert("Invalid password!");
            break;
        case obj[2].username:
            if (userPass === obj[2].password)
                alert("You have successfully logged in!");
            else
                alert("Invalid password!");
            break;
        case obj[3].username:
            if (userPass === obj[3].password)
                alert("You have successfully logged in!");
            else
                alert("Invalid password!");
            break;
        default: alert("Invalid username!");
    }
}

let userName = prompt("Please enter your username: ");
let userPass = prompt("Please enter your password: ");

checkEntry(userPass, userName);

