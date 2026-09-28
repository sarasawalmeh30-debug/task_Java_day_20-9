let inputText = document.getElementById("inputText");
let addButton = document.getElementById("addButton");
let listTask = document.getElementById("listTask");
let arr = JSON.parse(localStorage.getItem("task")) || [];

for (let i = 0; i < arr.length; i++) {
    listTask.innerHTML += "<p>" + arr[i] + "<button onclick='deleteTask(" + i + ")'>Delete</button>" + "</p>";                              

}




addButton.onclick = function () {

    let task = inputText.value;
    if (task === "") {
        return;
    }
    arr.push(task);
    localStorage.setItem("task", JSON.stringify(arr));
    listTask.innerHTML += "<p>" + task + "<button onclick='deleteTask("+(arr.length-1)+")'>Delete</button>" + "</p>";
    inputText.value = "";


}

function deleteTask(i) {
    arr.splice(i, 1);
    localStorage.setItem("task", JSON.stringify(arr));
    listTask.innerHTML = ""
    for (let i = 0; i < arr.length; i++) {
        listTask.innerHTML += "<p>" + arr[i] + "<button onclick='deleteTask(" + i + ")'>Delete</button>" + "</p>";
        inputText.value = "";

    }

}