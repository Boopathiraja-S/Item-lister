var form = document.getElementById("addform");
var itemList = document.getElementById("items");
var filterItems = document.getElementById("filter");

const addItemFunction = (e) => {
    e.preventDefault();
    var getInput = document.getElementById("input").value;
    var listElement = document.createElement("li");
    listElement.className = "list-group-item";
    // listElement.append(getInput);
    listElement.appendChild(document.createTextNode(getInput));
    var deleteBtn = document.createElement("button");
    deleteBtn.className = "btn btn-danger btn-sm float-end delete";
    deleteBtn.textContent = "X";
    listElement.appendChild(deleteBtn);
    itemList.append(listElement);
}

const removeItemFunction = (e) => {
    if (e.target.classList.contains("delete")){
        if (confirm("Are you Sure to Remove ?")){
            var deleteItem = e.target.parentElement;
            itemList.removeChild(deleteItem)
        }
    }
}

const filterItemsFunction =(e)=>{
    var text = e.target.value.toLowerCase().trim();
    var Items = itemList.getElementsByTagName("li");
    Array.from(Items).forEach((item) =>{
        var itemName = item.firstChild.textContent.trim();
        if (itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = "block";
        }
        else {
            item.style.display = "none";
        }
    }
    );
}


form.addEventListener("submit", addItemFunction);
itemList.addEventListener("click", removeItemFunction);
filterItems.addEventListener("keyup", filterItemsFunction)