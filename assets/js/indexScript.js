let btnClick = document.querySelector("#addItemBtn");
btnClick.addEventListener("click", addNewItem);

let inputAddList = document.querySelector("#inputAddList");
let listItems = document.querySelector("#listItems");

function addNewItem() {
    if (!inputAddList.value) return;

    // CRIA A DIV FILHA DA UL
    var divListItems = document.createElement("div");
    divListItems.setAttribute("class", "main__sectionTwo__list__items");

    // CRIA A LI FILHA DA DIV
    var liItem = document.createElement("li");
    liItem.setAttribute("class", "list__items__item");
    liItem.innerText = inputAddList.value

    inputAddList.value = "";

    // CRIA O BUTTON FILHA DA DIV
    var btnItem = document.createElement("button");
    btnItem.setAttribute("class", "items__btn");
    btnItem.setAttribute("id", "remvItemBtn");
    btnItem.innerText = "Apagar"

    // ADICIONA O LI E O BUTTON DENTRO DA DIV
    divListItems.appendChild(liItem);
    divListItems.appendChild(btnItem);

    listItems.appendChild(divListItems);
    
}
