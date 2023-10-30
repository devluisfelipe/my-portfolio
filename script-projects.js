const snackList = document.querySelector(".list-projects");

function showAll(productsArray) { // a função está esperando um array, quando chamar ela, preciso passar um aray
    let myLi = "";
    productsArray.forEach((element) => {
    snackList.innerHTML = myLi = myLi +
      `
            <li class = "img-li">
                <a href='${element.src}' target='_blank'><img class="img-grid" src = ${element.src}></a>
                <p class="paragraph">${element.name}</p>  
            </li>`;
  });

  snackList.innerHTML = myLi;
}

document.addEventListener("DOMContentLoaded", showAll(menuProjects))