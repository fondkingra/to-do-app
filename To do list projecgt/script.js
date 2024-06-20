// Get reference to the input box and the list container
const inputbox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");

// Function to add a new task
function addTask() {
    // Get the value from the input box
    const taskText = inputbox.value.trim();

    // If the input box is empty, show an alert
    if (taskText === '') {
        alert("Please enter a task!");
        return;
    }


    // Create a new list item (li)
    const li = document.createElement("li");

    // Create a new checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    
    // Add an event listener to the checkbox
    checkbox.addEventListener("change", function() {
        if (checkbox.checked) {
            li.style.textDecoration = "line-through";
        } else {
            li.style.textDecoration = "none";
        }
    });

    // Create a text node with the task text
    const textNode = document.createTextNode(taskText);

    // Append the checkbox and the task text to the list item
    li.appendChild(checkbox);
    li.appendChild(textNode);

    // Append the list item to the list container
    listcontainer.appendChild(li);
    saveData();

    // Clear the input box
    inputbox.value = "";

}

function saveData()
{
    localStorage.setItem("data",listcontainer.innerHTML);
}
function showTask()
{
    listcontainer.innerHTML=localStorage.getItem("data");
}
showTask();