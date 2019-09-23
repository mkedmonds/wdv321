function validateInputNumber(number, numberTwo) {
    if (number === "" || number.trim() === " " || number == null || number == undefined) {
        //If the inputted number is nothing

        alert("Please enter a number");

        } 
        else {

        //alert("PASSED")

        //If inputted value is a string

            if (isNaN(number)) {

            alert("Please enter a NUMBER");

            } 

            else {

            //alert("PASSEDTWO");

            //if the number is a decimal value

            if (number % 1 != 0) {

                alert("Please enter a whole NUMBER");

            } 

            else {

                //alert("PASSEDTHREE")

                //if input value is over selected value or under 0

                if (number > numberTwo || number <= 0) {
                    alert("Please enter a NUMBER between 1 and " + numberTwo)
                } 
                
                else {

                    //alert("PASSEDFOUR")

                    //Begin game if everything passed

                    if( number == targetNumber )		//5. There is a problem with the if statement
                    {
                        //6. display CORRECT!!!	
                        //alert("CORRECT!")
                        $("#results").css("color", "green");
                        $("#results").html("CORRECT!");
                    }
                    else
                    {
                        if( number < targetNumber)
                        {
                            //7. display HIGHER!
                            //alert("HIGHER!")
                            $("#results").css("color", "red");
                            $("#results").html("HIGHER!");	
                        }
                        else
                        {
                            //8. display LOWER
                            //alert("LOWER!")	
                            $("#results").css("color", "red");
                            $("#results").html("LOWER!");
                        }
                    }
                    
                    //end hiLowGame()
                }

            }
            }
        }
}