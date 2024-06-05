// function redirect() {
//     window.location.href = 'loginn.html';
// }

// function printt() {
//     var usersData = JSON.parse(localStorage.getItem("users"))
//     console.log(usersData)
//     var Name = document.getElementById('NAME').value;


//     var Email = document.getElementById('EMAIL').value;
//     var Password = document.getElementById('PASSWORD').value;

//     var gender = document.querySelector('input[name="gender"]:checked').value;

//     // Check if user with the same username, email, and password already exists
//     var userExists = usersData.some(function (user) {
//         return user.username === Name || user.mailid === Email;
//     });
//     console.log(userExists)

//     if (userExists) {
//         document.getElementById('errorMessage').textContent = 'User with the same username, email, or password already exists!';
//         return; // Exit function if user already exists
//     }

//     const user = {
//         username: Name,
//         mailid: Email,
//         PASSWORD: Password,
//         Gender: gender,
//     };

//     console.log("entered data is", user);




//     usersData.push(user);

//     localStorage.setItem("users", JSON.stringify(usersData));
// }




function redirect() {
    window.location.href = 'loginn.html';
}

function printt() {
    var usersData = JSON.parse(localStorage.getItem("users")) || []; // Initialize as an empty array if null
    console.log(usersData);

    var Name = document.getElementById('NAME').value;
    var Email = document.getElementById('EMAIL').value;
    var Password = document.getElementById('PASSWORD').value;
    var genderInput = document.querySelector('input[name="gender"]:checked');

    if (!genderInput) {
        console.error('Gender not selected');
        return; // Exit function if gender is not selected
    }

    var gender = genderInput.value;

    // Check if user with the same username or email already exists
    var userExists = usersData.some(function (user) {
        return user.username === Name || user.mailid === Email;
    });

    console.log(userExists);

    if (userExists) {
        document.getElementById('errorMessage').textContent = 'User with the same username or email already exists!';
        return; // Exit function if user already exists
    }

    const user = {
        username: Name,
        mailid: Email,
        PASSWORD: Password,
        Gender: gender,
    };

    console.log("entered data is", user);

    usersData.push(user);

    localStorage.setItem("users", JSON.stringify(usersData));
}
