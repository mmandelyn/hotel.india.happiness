$( document ).ready(function(){
  console.log( "ready!" );

  $('#btnLoadData').click(function() {
    console.log("clicked");

    let jsonURL = "https://barrycumbie.github.io/376-india-lab/demo.json";

    $.ajax({
        url: jsonURL,
        dataType: "json",
        success: function(data) {
            //can log either the entire data or invoke specific properties data.zipCode...
            console.log(data.firstName);
            
            //loads first name into my first input box (in example #1)
            $("#noSpaces").val(data.firstName);
            console.log(data.language);

            $.each(data, function (key, val) {
                //step through results
                console.log(key, val);
                
                $(`#${key}`).val(val);
                
            });
        }
    });
});







  $(function () {
    let activities = [
        ["Fraternity & Sorority Life", ["Oozma Kappa", "Jaws Theta Chi", "Python Nu Kappa", "Roar Omega Roar", "Slugma Slugma Kappa", "Eta Hiss Hiss"]],
        ["Athletics", ["Football", "Basketball", "Volleyball", "Track & Field", "Tennis", "Swimming", "Soccer"]]
      ];
    
  // Activity Selection: showing the different organizations and options. 
    $("#activitySelect").on("change", function (e) {
      $("#optionsSelect").prop("disabled", false);
      let inputVal = this.value;

  //looping through the activities array:
      $.each(activities, function (key, value) {
        if (inputVal === value[0]) {
          $.each(value, function (nestKey, nestValue) {
            switch (nestKey) {
              case 0:
                $("label[for=optionsSelect]").text(nestValue);
                $("#optionsSelect").empty();
                $("#optionsSelect").append(
                  $("<option>").text(`Choose an organization or a team. `)
                );
                break;
              case 1:
                $.each(nestValue, function (nameKey, nameValue) {
                  console.log(nameKey, nameValue);

                  $("#optionsSelect").append(
                    $("<option>").val(nameValue).text(nameValue)
                  );
                });
                break;} // switch(nestKey) end
          });
        } // If statement end
      }); // Looping end
    }); // Activity Selection end
    
    //Button submission and user greeting
    $("#goButton").click(function(){
        let usersName = $("#firstName").val();
        let activityInterest = $("#optionsSelect").val();
      
        //display greeting to them
        $("#userGreeting").text("Hey, " + usersName +  "! We are glad you are interested in our university! Our IT department will contact you shortly, once your portal account has been set up. In the meantime, we will share your information with " + activityInterest + " to help you start making connections!") 

      });
    }); // The End

  });