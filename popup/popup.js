// Get references to the input field, button, and task list
const inputField = document.getElementById("input-task-field");
const addButton = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");

// Function to load tasks from local storage
function loadTasksFromLocalStorage() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    tasks.forEach(function (taskText) {
        const listItem = document.createElement("li");
        listItem.textContent = taskText;

        listItem.innerHTML = `
            ${taskText}
            <button class="edit">Edit</button>
            <button class="done">Done</button>
            <button class="delete">Delete</button>
        `;

        // Append the task to the task list
        taskList.appendChild(listItem);

        // Add event listeners for the edit, done, and delete buttons within this task
        const editBtn = listItem.querySelector(".edit");
        const doneBtn = listItem.querySelector(".done");
        const deleteBtn = listItem.querySelector(".delete");

        editBtn.addEventListener("click", function () {
            // Populate the input field with the task text for editing
            inputField.value = taskText;

            // Remove the current task from the list
            listItem.remove();
        });

        doneBtn.addEventListener("click", function () {
            // Create a new span element for the task text
            const taskTextSpan = document.createElement("span");
            taskTextSpan.textContent = taskText;

            // Toggle the button text between "Done" and "Undo"
            if (doneBtn.textContent === "Done") {
                doneBtn.textContent = "Undo";

                taskTextSpan.style.textDecoration = "line-through";
                taskTextSpan.style.opacity = "0.6"; // Dim the text
                taskTextSpan.style.fontStyle = "italic"; // Make the text italic
            } else {
                doneBtn.textContent = "Done";

                taskTextSpan.style.textDecoration = "none"; // Remove the line-through
                taskTextSpan.style.opacity = "1"; // Restore full opacity
                taskTextSpan.style.fontStyle = "normal";
            }

            // Replace the existing task text with the modified span
            listItem.innerHTML = "";
            listItem.appendChild(taskTextSpan);

            // Add the buttons back to the listItem
            listItem.appendChild(editBtn);
            listItem.appendChild(doneBtn);
            listItem.appendChild(deleteBtn);
        });

        deleteBtn.addEventListener("click", function () {
            // Implement delete functionality here
            listItem.remove();
            // Remove the task from the tasks array
            const taskIndex = tasks.indexOf(taskText);
            if (taskIndex !== -1) {
                tasks.splice(taskIndex, 1);
                // Save the updated tasks array to local storage
                localStorage.setItem('tasks', JSON.stringify(tasks));
            }
        });
    });
}

// Call the loadTasksFromLocalStorage function when the page loads
window.addEventListener('load', loadTasksFromLocalStorage);

// Add a click event listener to the "Add" button
addButton.addEventListener("click", function () {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // Get the task text from the input field
    const taskText = inputField.value.trim();

    // Check if the input is not empty
    if (taskText !== "") {
        // Add the new task to the tasks array
        tasks.push(taskText);

        // Save the updated tasks array to local storage
        localStorage.setItem('tasks', JSON.stringify(tasks));

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
            // Populate the input field with the task text for editing
            inputField.value = taskText;

            // Remove the current task from the list
            listItem.remove();
        });

        doneBtn.addEventListener("click", function () {
            // Create a new span element for the task text
            const taskTextSpan = document.createElement("span");
            taskTextSpan.textContent = taskText;

            // Toggle the button text between "Done" and "Undo"
            if (doneBtn.textContent === "Done") {
                doneBtn.textContent = "Undo";

                taskTextSpan.style.textDecoration = "line-through";
                taskTextSpan.style.opacity = "0.6"; // Dim the text
                taskTextSpan.style.fontStyle = "italic"; // Make the text italic
            } else {
                doneBtn.textContent = "Done";

                taskTextSpan.style.textDecoration = "none"; // Remove the line-through
                taskTextSpan.style.opacity = "1"; // Restore full opacity
                taskTextSpan.style.fontStyle = "normal";
            }

            // Replace the existing task text with the modified span
            listItem.innerHTML = "";
            listItem.appendChild(taskTextSpan);

            // Add the buttons back to the listItem
            listItem.appendChild(editBtn);
            listItem.appendChild(doneBtn);
            listItem.appendChild(deleteBtn);
        });

        deleteBtn.addEventListener("click", function () {
            // Implement delete functionality here
            listItem.remove();
            // Remove the task from the tasks array
            const taskIndex = tasks.indexOf(taskText);
            if (taskIndex !== -1) {
                tasks.splice(taskIndex, 1);
                // Save the updated tasks array to local storage
                localStorage.setItem('tasks', JSON.stringify(tasks));
            }
        });
    }
});
