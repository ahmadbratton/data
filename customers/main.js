// 1. Fetch your users data
// 2. Loop over the data
// 3. Display it in the `.customers` element
(function () {
  let customers = document.querySelector(".customers");

  'use strict';

  fetch("https://randomuser.me/api/?results=15")
  .then(function (response) {
    if (response.status !== 200) {
      console.log(response.status);
      return;
    }
    response.json().then(function (data) {
      console.log(data);
      console.log(data.results);
      let array = data.results;
      for (var i = 0; i < array.length; i++) {
        let header = document.createElement("p");
        let img = document.createElement("img");
        img.src = array[i].picture.large;
        header.innerHTML += " " + array[i].name.first;
        header.innerHTML += " " + array[i].name.last;
        header.innerHTML += " " + array[i].name.title;
        header.innerHTML += " " + array[i].cell;
        header.innerHTML += " " +" " +" " + array[i].dob;
        header.innerHTML += " " + array[i].email;
        header.innerHTML += " " + array[i].gender;
        header.innerHTML += " " + array[i].location.city;
        header.innerHTML += " " + array[i].nat;
      
       
         customers.appendChild(img);
        customers.appendChild(header);
        console.log("Finished");
      }
    })
  })
  

 

})();