// Function to load tasks from local storage
function loadTasks() {
    const taskList = document.getElementById("task-list");
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(taskText => {
        const taskItem = document.createElement("li");
        taskItem.textContent = taskText;

        // Delete button for each task
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.onclick = () => {
            taskList.removeChild(taskItem);
            saveTasks();
        };

        taskItem.appendChild(deleteButton);
        taskList.appendChild(taskItem);
    });
}

// Function to save tasks to local storage
function saveTasks() {
    const taskList = document.getElementById("task-list");
    const tasks = Array.from(taskList.children).map(task => task.firstChild.textContent);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Updated addTask function
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
            saveTasks();
        };

        taskItem.appendChild(deleteButton);
        taskList.appendChild(taskItem);

        // Clear input and save task
        taskInput.value = "";
        saveTasks();
    }
}


function clearTasks() {
    const taskList = document.getElementById("task-list");
    taskList.innerHTML = ""; // Clear the list
    localStorage.removeItem("tasks"); // Clear from local storage
}


document.getElementById("clear-tasks").addEventListener("click", clearTasks);


document.addEventListener("DOMContentLoaded", loadTasks);


document.getElementById("add-task").addEventListener("click", addTask);


document.getElementById("footer-text").addEventListener("click", () => {
    alert("You found the secret button! You now have 24 hours of good luck!");
});
