// Get references to the input field, add button, and task list container
const inputField = document.getElementById("input-write-down-task");
const addButton = document.getElementById("add-button");
const taskList = document.getElementById("task-list");

// Function to add a new task
addButton.addEventListener("click", function () {
    const taskText = inputField.value;
    if (taskText.trim() === "") return; // Don't add empty tasks

    const taskItem = document.createElement("div");
    taskItem.classList.add("task");
    taskItem.innerHTML = `
        <input id="output-task" type="text" placeholder="${taskText}">
        <button class="done">Done</button>
    `;

    taskList.appendChild(taskItem);
    inputField.value = "";

    const doneButton = taskItem.querySelector(".done");
    doneButton.addEventListener("click", function () {
        taskItem.classList.toggle("completed");
        if (taskItem.classList.contains("completed")) {
            doneButton.textContent = "Delete";
            doneButton.classList.add("delete");
            doneButton.classList.remove("done");
        } else {
            doneButton.textContent = "Done";
            doneButton.classList.add("done");
            doneButton.classList.remove("delete");
        }
    });

    doneButton.addEventListener("click", function () {
        taskList.removeChild(taskItem);
    });
});