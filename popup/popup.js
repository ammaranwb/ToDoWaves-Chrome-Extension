// Get references to the input field, button, and task list
const inputField = document.getElementById("input-task-field");
const addButton = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");

// Add a click event listener to the "Add" button
addButton.addEventListener("click", function () {
    // Get the task text from the input field
    const taskText = inputField.value.trim();

    // Check if the input is not empty
    if (taskText !== "") {
        // Create a new list item
        const listItem = document.createElement("li");
        listItem.textContent = taskText;

        // Append the new task to the task list
        taskList.appendChild(listItem);

        // Clear the input field
        inputField.value = "";
    }
});

