


 // Closes the sidebar menu
    $("#menu-close").click(function(e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
    });
    // Opens the sidebar menu
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
    });
    // Scrolls to the selected menu item on the page
    $(function() {
        $('a[href*=#]:not([href=#],[data-toggle],[data-target],[data-slide])').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });
    //#to-top button appears after scrolling
    var fixed = false;
    $(document).scroll(function() {
        if ($(this).scrollTop() > 250) {
            if (!fixed) {
                fixed = true;
                // $('#to-top').css({position:'fixed', display:'block'});
                $('#to-top').show("slow", function() {
                    $('#to-top').css({
                        position: 'fixed',
                        display: 'block'
                    });
                });
            }
        } else {
            if (fixed) {
                fixed = false;
                $('#to-top').hide("slow", function() {
                    $('#to-top').css({
                        display: 'none'
                    });
                });
            }
        }
    });
    // Disable Google Maps scrolling
    // See http://stackoverflow.com/a/25904582/1607849
    // Disable scroll zooming and bind back the click event
    var onMapMouseleaveHandler = function(event) {
        var that = $(this);
        that.on('click', onMapClickHandler);
        that.off('mouseleave', onMapMouseleaveHandler);
        that.find('iframe').css("pointer-events", "none");
    }
    var onMapClickHandler = function(event) {
            var that = $(this);
            // Disable the click handler until the user leaves the map area
            that.off('click', onMapClickHandler);
            // Enable scrolling zoom
            that.find('iframe').css("pointer-events", "auto");
            // Handle the mouse leave event
            that.on('mouseleave', onMapMouseleaveHandler);
        }
        // Enable map zooming with mouse scroll when the user clicks the map
    $('.map').on('click', onMapClickHandler);

//===========================POLLS JavaScript==============================//
  $(document).ready(function() {

     $("#container div a").click(function() {
        if ( parseInt($(this).prev().html()) < 7){

            //console.log("this works");
            
            $(this).parent().animate({
              width: '+=100px'
            }, 500);


            //console.log($(this).attr("bob"));

            var voteId = $(this).attr("bob");
            var voteNum = parseInt($(this).prev().html()) + 1;

             var queryURL = "/update2/"+ voteId +"/"+ voteNum +"";

             $.ajax({url: queryURL, method: 'PUT'});



            $(this).prev().html(parseInt($(this).prev().html()) + 1);

            $(this).hide();
            return false;
        } else {  
            $(this).prev().html(parseInt($(this).prev().html()) + 0);  
            return false;
        } 






    }); 
});




 //========================================PAYMENT JS======================================//

// Set your secret key: remember to change this to your live secret key in production
// See your keys here https://dashboard.stripe.com/account/apikeys


// PUT THIS CODE INTO SERVER !!!!!!!!!!!!!!!!!!!!


// !!!!!!!!!!!!!!!! the below code has an error
 var stripe = require("stripe"); //("sk_live_ytlFeWA8U8nCAdGgNK33zxIy");






// (Assuming you're using express - expressjs.com)
// Get the credit card details submitted by the form
var stripeToken = request.body.stripeToken;

stripe.customers.create({
 source: stripeToken,
 description: 'ha3090@gmail.com'
}).then(function(customer) {
 return stripe.charges.create({
   amount: 1000, // amount in cents, again
   currency: "usd",
   customer: customer.id
 });
}).then(function(charge) {
 // YOUR CODE: Save the customer ID and other info in a database for later!
});

// YOUR CODE: When it's time to charge the customer again, retrieve the customer ID!

stripe.charges.create({
 amount: 1500, // amount in cents, again
 currency: "usd",
 customer: customerId // Previously stored, then retrieved
});









