

function getCatalog(){
    // create Ajax req to getCatalog
    // print the response on the console

    $.ajax({
        url: "/catalog/getCatalog",
        type: 'GET',
        success : function(res){
            console.log("succeed", res);
            for(var i = 0; i < res.length; i++){
                var item = res[i];
                displayCar(item);
            }
        },
        error : function(error){
            console.log("error", error);
        }
    });
}

function displayCar(car){
    // get the root element (where u want to display it?)
    var container = $("#catalogContainer");

    // create the template for the car
    var template = `
<div class="card carItem" style="width: 28rem;">
    <img src="${car.imageUrl}" class="card-img-top itemImg" alt="...">
        <ul class="list-group list-group-flush">
        <li class="list-group-item">Year: ${car.year}</li>
        <li class="list-group-item">Make: ${car.make}</li>
        <li class="list-group-item">Model: ${car.model}</li>
        </ul>
    <div class="card-body">
        <p class="card-text">Description: ${car.description}</p>
    </div>
    <div class="card-body">
        <h5 class="itemPrice">Price per day: ${car.dailyPrice}</h5>
        <button class="itemBtn">Book Now!</button>
    </div>
  </div>`;

    // add the template to the root
    container.append(template);
}

function init(){
    console.log("catalog cars");

    getCatalog();
}

window.onload = init;