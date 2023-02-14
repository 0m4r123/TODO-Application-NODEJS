

function getArray() {
    fetch('http://localhost:80/todos')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let inputArray = data;

//spara input i en array med ett auto genererat id

/* let id = 0;
function storeInput() {
    var input = document.getElementById("input").value;
    inputArray.push({id: id, input: input});
    id++;
    localStorage.setItem("inputArray", JSON.stringify(inputArray));
    console.log(inputArray);
    document.getElementById("input").value = "";
}

 */

function retrieveInput() {
    let retrievedArray = inputArray;
    // skapar en div for varje input i arrayen med id, lägger texten i en paragraf och visar den i #list
    for (let i = 0; i < retrievedArray.length; i++) {
        let div = document.createElement("div");
        div.setAttribute("id", "todo");
        //skapa en p för id
        let pId = document.createElement("p");
        pId.setAttribute("id", "id");
        pId.innerHTML = retrievedArray[i].id;
        div.appendChild(pId);
        let removeButton = document.createElement("button");
        removeButton.setAttribute("id", "remove");
        div.appendChild(removeButton);
        removeButton.setAttribute("onclick", "removeInput(" + retrievedArray[i].id + ")");
        removeButton.innerHTML = "<i class='fa-solid fa-xmark'></i>";
        let p = document.createElement("p");
        p.setAttribute("contenteditable", "true");
        p.setAttribute("id", "todoText");
        p.innerHTML = retrievedArray[i].todos;
        div.appendChild(p);
        document.getElementById("list").appendChild(div);
        // om p är undefined, ta bort html elementet
        if (p.innerHTML == "undefined") {
            div.style.display = "none";
                 div.remove();
        }

    } 
    //om arrayen är tom, visa en bild
    if (retrievedArray.length == 0) {
        document.getElementById("list").innerHTML = "</br></br><center><img class='tomt' src='static/img/tomt.png' alt='empty list' id='empty'></center>";
    }
        
}
retrieveInput(); 

/* 
//tar bort input från local storage och från sidan
function removeInput(id) {
    let retrievedArray = JSON.parse(localStorage.getItem("inputArray"));
    for (let i = 0; i < retrievedArray.length; i++) {
        if (retrievedArray[i].id === id) {
            retrievedArray.splice(i, 1);
            localStorage.setItem("inputArray", JSON.stringify(retrievedArray));
            document.getElementById("todo").remove();
        }
    }
}
 */


     });
}

const targetDiv = document.getElementById("remove");
function deleteSelector () {
  if (targetDiv.style.display !== "none") {
    targetDiv.style.display = "none";
  } else {
    targetDiv.style.display = "block";
  
    targetDiv.style.backgroundColor = "#e74c3c";
  }
};   
getArray();


