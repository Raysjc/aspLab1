$("#errorAlert").addClass("hide")
$("#savedAlert").addClass("hide")

function register(){
    console.log("registering car");

    // get values from fields
    var price = $("#txtPrice").val();
    var make = $("#txtMake").val();
    var model = $("#txtModel").val();
    var year = $("#txtYear").val();
    var capacity = $("#txtCapacity").val();
    var mileage = $("#txtMileage").val();
    var imageUrl = $("#txtImageUrl").val();
    var hp = $("#txtHP").val();
    var cyls = $("#txtCyls").val();
    var desc = $("#txtDescription").val();

    var errorOccured = false;

    // data validations
    if(!year || isNaN(year)){
        // error with year
        errorOccured = true;
        $("#txtYear").addClass("error")
    }
    else{
        // parse year str into int
        // year = year * 1;
        year = parseInt(year);
        $("#txtYear").removeClass("error")
    };

    if(!price || isNaN(price)){
        // error with price
        errorOccured = true;
        $("#txtPrice").addClass("error")
    }
    else{
        // parse price str into float
        price = parseFloat(price);
        $("#txtPrice").removeClass("error")
    }

    if(errorOccured){

        $("#errorAlert").removeClass("hide");

        return; // do not continue
    };

    // create an object
    var car = {
        dailyPrice : price,
        make : make,
        model : model,
        year : year,
        passengerCapacity : capacity,
        mileage : mileage,
        imageUrl : imageUrl,
        hP : hp,
        cyls : cyls,
        description : desc,

    };

    console.log(car);

    // send the object on an Ajax req to the backend
    $.ajax({
        url: "/catalog/saveCar",
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(car),
        success : function(res){
            console.log("succeed", res);

            // alert that car has been saved
            $("#savedAlert").removeClass("hide")
            // set a timer to hide the alert
            setTimeout(function () {
                $("#savedAlert").addClass("hide")
            }, 3000);
        },
        error : function(error){
            console.log("error", error);
        }
    });
}

function init(){
    console.log("hiiiii");

    $("#btnSave").click(register);
}

window.onload = init;