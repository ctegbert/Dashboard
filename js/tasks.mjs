// tasks.mjs

// Function to add a new task
function addTask() {
    const taskInput = document.getElementById("new-task");
    const taskText = taskInput.value.trim();
    if (taskText) {
        const taskList = document.getElementById("task-list");

        // Create task list item
        const taskItem = document.createElement("li");
        taskItem.textContent = taskText;

        // Add delete button to task
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.onclick = () => {
            taskList.removeChild(taskItem);
        };

        taskItem.appendChild(deleteButton);
        taskList.appendChild(taskItem);

        taskInput.value = ""; // Clear input
    }
}

// Attach event listener to the "Add Task" button
document.getElementById("add-task").addEventListener("click", addTask);
export { addTask };
