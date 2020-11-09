$(document).ready(function () {
    // add the functions as event listeners
    // to the forms in the HTML

	function countClick() {
        if (typeof(Storage) !== "undefined") {
            if (localStorage.clickCountButton) {
                localStorage.clickCountButton = Number(localStorage.clickCountButton)+1;
            } else {
                localStorage.clickCountButton= 1;
            }
            document.getElementById("result").innerHTML = "You have clicked the button " + localStorage.clickCountButton + " time(s).";

            var i = 0

            function Count() {
                document.getElementById("output").innerHTML = i++ + 1;
            }

        resetButton.onclick = function() {
            count = 10;
            displayCount.innerHTML = count;
        }
    }
	}


    function checkAge() {
        // which user inputs
        str = str.split("-");
        var dd = str[0];
        var mm = str[1];
        var yy = str[2];
        // Current date calculation
        var d = new Date();
        var ds = d.getDate();
        var ms = d.getMonth();
        var ys = d.getFullYear();
        // convert 18years as days from current date
        var days = ((18 * 12) * 30) + (ms * 30) + ds;
        // convert days from input value
        var age = (((ys - yy) * 12) * 30) + ((12 - mm) * 30) + parseInt(30 - dd);

        if((days - age) <= '0'){
            console.log((days - age));
            document.getElementById('dob1').innerHTML = 'Valid';
            // or return your own script
        }else{
            console.log((days - age));
            document.getElementById('dob1').innerHTML = 'Invalid';
            // or return your own script
        }
    }

    }

    function calcSalesTax() {
        // Get the purchase amount from the text
        // box with ID of "purchaseAmount"

        // Get the state from the text box with ID "state"

        // Tax rates are: WI 5%, IL 8%, MN 7.5%, MI 5.5%

        // Calculate the sales tax amount and print to
        // the <p> with ID of "salesTaxOutput"

        // If the user enters a state not listed above,
        // print "Error" instead
        var subtotal = document.getElementById("order_subtotal").innerHTML;
        subtotal = parseInt(subtotal);
        var total = 0;
        var state = document.getElementById("state").value;
        if (state === 'WI') {
            order_taxes += +(tax_rate * subtotal).toFixed(.5);
            tax_percent = +(tax_rate * 100).toFixed(.5);

    } else {
    (state === 'IL') {
        order_taxes += +(tax_rate * subtotal).toFixed(.8);
        tax_percent = +(tax_rate * 100).toFixed(.8);

 else {
    (state === 'MN') {
        order_taxes += +(tax_rate * subtotal).toFixed(7.5);
        tax_percent = +(tax_rate * 100).toFixed(7.5);


else {
    (state === 'MI') {
        order_taxes += +(tax_rate * subtotal).toFixed(5.5);
        tax_percent = +(tax_rate * 100).toFixed(5.5);
    }

        var el = document.getElementById('order_tax');
        el.textContent = order_taxes;

        var salesTaxOutput = subtotal + order_taxes;
        var el1 = document.getElementById('order_total');
        el1.textContent = total;
        document.getElementById('tax_percent').value = tax_percent;
    }

    function recommendFood() {
        // Get the cat's age from the text box with
        // ID of "catAge"

        // Cats under 2 get "kitten chow", between 2 and 10
        // get "adult chow", and over 10 get "senior chow"

        // Print the food recommendation to the <p> with
        // ID of "catAgeOutput"


    }

    function drawCard() {
        // Generate a random card face value (1 - 13)
        var faceValue = Math.floor(Math.random() * 13) + 1;

        // Generate a random suit (1 - 4)
        var suit = Math.floor(Math.random() * 4) + 1;

        // Create the description of the card, for example
        // "King of Spades" or "2 of Hearts"
        var description;

        // For face values 2 - 10, you can just print the number
        // Face value 1 is "Ace", 11 is "Jack", 12 is "Queen",
        // and 13 is "King"

        // For the suits, 1 is "Clubs", 2 is "Spades",
        // 3 is "Hearts", 4 is "Diamonds"

        // Print the card's description to the <p> with
        // ID of "drawCardOutput"


    }

});