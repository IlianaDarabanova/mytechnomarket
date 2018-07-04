$(document).ready(function (e) {
    attachEvents();

    $('#Tvs').hide();
    $("#smartphones").hide();
    $("#contacts").hide();
    $("#aboutUs").hide();
    $("#add-product").hide();

    function showView(viewName) {
        $('.view').hide();
        $('#' + viewName).show();
    }

    $('[data-launch-view]').click(function (e) {
        e.preventDefault();
        var viewName = $(this).attr('data-launch-view');
        showView(viewName);
    });

    function addProduct() {
        var categorySelected = $('input[name=category]:checked').val();
        var nameWritten = $('input[name=name]').val();
        var descWritten = $('input[name=desc]').val();
        var priceWritten =  $('input[name=price]').val();
        var photoUrl = $("input[name=photo]").val();
        if(categorySelected==="tv"){
         $("#Tvs").append("<div class='item'><img src="+photoUrl+"> <p class='item-title'>"+nameWritten+"</p>"+
            "<p class='desc'>Description: "+descWritten+"</p>"+
            "<p class='price'>Price: "+priceWritten+"</p> </div>");
        }
        else{
            $("#smartphones").append("<div class='item'><img src="+photoUrl+"> <p class='item-title'>"+nameWritten+"</p>"+
            "<p class='desc'>Description: "+descWritten+"</p>"+
            "<p class='price'>Price: "+priceWritten+"</p> </div>");
            
        }
        $("#add-product").append("<p> This product was added successfully!</p></div>");
        $("#add-product").append("<div class='item'><img src="+photoUrl+"> <div><p class='item-title'>"+nameWritten+"</p>"+
        "<p class='desc'>Description: "+descWritten+"</p>"+
        "<p class='price'>Price: "+priceWritten+"</p> </div>");
       

    }

    function attachEvents() {
        $("#submit-product").on("click", addProduct);

    }



});