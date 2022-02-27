
var row = 1;

var entry = document.getElementById("entry");
entry.addEventListener("click", displayDetails);

function displayDetails() {
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var email = document.getElementById("email").value;
    var gender = document.getElementById("gender").value;
    var city = document.getElementById("city").value;
    var skills = document.getElementById("skills").value;

    if(!name || !age || !email || !gender || !city || !skills) {
        alert("Please fill all the boxes");
        return;
    }

    var display = document.getElementById("display");

    var newRow = display.insertRow(row);

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);
    var cell6 = newRow.insertCell(5);

    cell1.innerHTML = name;
    cell2.innerHTML = age;
    cell3.innerHTML = email;
    cell4.innerHTML = gender;
    cell5.innerHTML = city;
    cell6.innerHTML = skills;

    row++;
}