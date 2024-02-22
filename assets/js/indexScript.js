let idItemList = 0;
let inputAddList = document.querySelector("#inputAddList");
let btnClick = document.querySelector("#addItemBtn");
btnClick.addEventListener("click", addNewItem);

let listItems = document.querySelector("#listItems");

let btnRemove;

function addNewItem() {

    let sectionTwoBg = document.querySelector(".main__sectionTwo");
    sectionTwoBg.style.backgroundColor = "white";

    //NÃO PERMITE CRIAR UM ITEM VAZIO
    if (!inputAddList.value) return;

    // CRIA A DIV FILHA DA UL
    let divListItems = document.createElement("div");
    divListItems.setAttribute("class", "main__sectionTwo__list__items");

    // CRIA A LI FILHA DA DIV
    let liItem = document.createElement("li");
    liItem.setAttribute("class", "list__items__item");
    liItem.innerText = inputAddList.value

    inputAddList.value = "";

    // CRIA O BUTTON FILHA DA DIV
    let btnItem = document.createElement("button");
    btnItem.setAttribute("class", "items__btn remvItemBtn");
    btnItem.setAttribute("id", `id${idItemList}`);
    btnItem.innerText = "Apagar"
    btnItem.addEventListener('click', removeItem)
    btnRemove = document.querySelector(".remvItemBtn");

    // ADICIONA O LI E O BUTTON DENTRO DA DIV
    divListItems.appendChild(liItem);
    divListItems.appendChild(btnItem);

    listItems.appendChild(divListItems);

}

function removeItem() {
    if (btnRemove.classList.contains("remvItemBtn")) {
        let item = this.parentNode;
        item.parentNode.removeChild(item);
    }
    else {
        alert("Item não encontrado");
    }
}


