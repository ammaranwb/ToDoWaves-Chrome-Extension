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

        listItem.innerHTML = `
        ${taskText}
        <button class="edit">Edit</button>
        <button class="done">Done</button>
        <button class="delete">Delete</button>
    `;

        // Append the new task to the task list
        taskList.appendChild(listItem);

        // Clear the input field
        inputField.value = "";

        // Add event listeners for the edit, done, and delete buttons within this task
        const editBtn = listItem.querySelector(".edit");
        const doneBtn = listItem.querySelector(".done");
        const deleteBtn = listItem.querySelector(".delete");

        editBtn.addEventListener("click", function () {
            // Implement edit functionality here
            alert("Edit button clicked for: " + taskText);
        });

        doneBtn.addEventListener("click", function () {
            // Implement done functionality here
            alert("Done button clicked for: " + taskText);
        });

        deleteBtn.addEventListener("click", function () {
            // Implement delete functionality here
            listItem.remove();
        });
    }
});

