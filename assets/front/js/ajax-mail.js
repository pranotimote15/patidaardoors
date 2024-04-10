function sendMail(action, via){
    var form = document.getElementsByClassName("dreamit-form");
    var firstname = $(".firstname").val().trim();
    var lastname = $(".lastname").val().trim();
    var email = $(".email").val().trim();
    var country = $(".country").val();
    var country_name = $('option:selected', ".country").attr('country_name');
    var phone = $(".formPhoneNumber").val().trim();
    
    var option = $(".option").val();
    var grade = $(".grade").val();
    var hearUs = $(".hearus").val().trim();
    var message = $(".message").val().trim();
    $(".form-error").html('');
    if(firstname==''){
        $("#firstname_error").html('First Name Required');
    }
    if(lastname==''){
        $("#lastname_error").html('Last Name Required');
    }
    var email_error = false;
    if(email==''){
        email_error = true;
        $("#email_error").html('Email Address Required');
    }else if(ValidateEmail(email)==false){
        email_error = true;
        $("#email_error").html('Invalid Email Address!');
    }
    if(country==0){
        $("#country_error").html('Country Required');
    }
    var phone_error = false;
    if(phone==''){
        $("#phone_error").html('Phone Number Required');
        phone_error = true;
    }else if(isNumeric(phone)==false || phone.length < 10){
        phone_error = true;
        $("#phone_error").html('Invalid Phone Number');
    }
    if(option==0){
        $("#option_error").html('Option Required');
    } 
    if(grade==0){
        $("#grade_error").html('Grade Required');
    }
     if(hearUs==0){
        $("#hearus_error").html('Question Required');
    }
    if(firstname !='' && lastname !='' && email_error == false && country !=0 && phone_error == false && option !=0 && grade !=0&& hearUs!=0){
        var data = {'firstname':firstname,'lastname':lastname,'email':email,'country':country_name,'code':country,'phone':phone,'option':option,'grade':grade,'hear_us':hearUs,'message':message};
        var method = 'post';
        ajax(method, action, data, via);
//        ajax(form.method, form.action, data, success, error);
    }
}

function sendMail2(action, via, country){
    var form = document.getElementsByClassName("dreamit-form");
    var firstname = $(".firstname").val().trim();
    var lastname = $(".lastname").val().trim();
    var email = $(".email").val().trim();
    var phone = $(".phone").val().trim();
    var grade = $(".grade").val();
    var message = $(".message").val().trim();

    $(".form-error").html('');
    if(firstname==''){
        $("#firstname_error").html('First Name Required');
    }
    if(lastname==''){
        $("#lastname_error").html('Last Name Required');
    }
    var email_error = false;
    if(email==''){
        email_error = true;
        $("#email_error").html('Email Address Required');
    }else if(ValidateEmail(email)==false){
        email_error = true;
        $("#email_error").html('Invalid Email Address!');
    }
    var phone_error = false;
    if(phone==''){
        phone_error = true;
        $("#phone_error").html('Phone Number Required');
    }else if(isNumeric(phone)==false || phone.length < 10){
        phone_error = true;
        $("#phone_error").html('Invalid Phone Number');
    }
    if(grade==0){
        $("#grade_error").html('Grade Required');
    }
    
    if(firstname !='' && lastname !='' && email_error == false && phone_error == false && grade !=0){
        var data = {'firstname':firstname,'lastname':lastname,'email':email,'country':country,'phone':phone,'grade':grade,'message':message};
        var method = 'post';
        ajax2(method, action, data, via, country);
//        ajax(form.method, form.action, data, success, error);
    }
}

function sendMail3(action, via, country){
    var form = document.getElementsByClassName("dreamit-form3");
    var firstname = $(".firstname3").val().trim();
    var lastname = $(".lastname3").val().trim();
    var email = $(".email3").val().trim();
    var phone = $(".phone3").val().trim();
    var grade = $(".grade3").val();
    var message = $(".message3").val().trim();

    $(".form-error").html('');
    if(firstname==''){
        $("#firstname_error3").html('First Name Required');
    }
    if(lastname==''){
        $("#lastname_error3").html('Last Name Required');
    }
    var email_error = false;
    if(email==''){
        email_error = true;
        $("#email_error3").html('Email Address Required');
    }else if(ValidateEmail(email)==false){
        email_error = true;
        $("#email_error3").html('Invalid Email Address!');
    }
    var phone_error = false;
    if(phone==''){
        phone_error = true;
        $("#phone_error3").html('Phone Number Required');
    }else if(isNumeric(phone)==false || phone.length < 10){
        phone_error = true;
        $("#phone_error3").html('Invalid Phone Number');
    }
    if(grade==0){
        $("#grade_error3").html('Grade Required');
    }
    
    if(firstname !='' && lastname !='' && email_error == false && phone_error == false && grade !=0){
        var data = {'firstname':firstname,'lastname':lastname,'email':email,'country':country,'phone':phone,'grade':grade,'message':message};
        var method = 'post';
        ajax3(method, action, data, via, country);
//        ajax(form.method, form.action, data, success, error);
    }
}

function sendMail4(action, via){
    var form = document.getElementsByClassName("dreamit-form");
    var fullname = $(".fullname").val().trim();
    var email = $(".email").val().trim();
    var country = $(".country").val();
    var country_name = $('option:selected', ".country").attr('country_name');
    var phone = $(".formPhoneNumber").val().trim();
    var option = $(".option").val();
   
    $(".form-error").html('');
    if(fullname==''){
        $("#firstname_error").html('Full name required');
    }
    
    var email_error = false;
    if(email==''){
        email_error = true;
        $("#email_error").html('Email Address Required');
    }else if(ValidateEmail(email)==false){
        email_error = true;
        $("#email_error").html('Invalid Email Address!');
    }
    if(country==0){
        $("#country_error").html('Country Required');
    }
    var phone_error = false;
    if(phone==''){
        $("#phone_error").html('Phone Number Required');
        phone_error = true;
    }else if(isNumeric(phone)==false || phone.length < 10){
        phone_error = true;
        $("#phone_error").html('Invalid Phone Number');
    }
    if(option==0){
        $("#option_error").html('Option Required');
    } 
   
    if(fullname !='' &&  email_error == false && country !=0 && phone_error == false && option !=0 ){
        var data = {'fullname':fullname,'email':email,'country':country_name,'code':country,'phone':phone,'option':option};
        var method = 'post';
        ajax4(method, action, data, via);

    }
}

function ValidateEmail(inputText)
{
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(inputText.match(mailformat))
    {
        return true;
    }
    else
    {
    return false;
    }
}

function isNumeric(str) {
  if (typeof str != "string") return false // we only process strings!  
  return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
         !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
}

// helper function for sending an AJAX request
function ajax(method, url, data, via) {
   $('.btn_send_mail').hide();
   $.ajax({
    url: url+'email/sent_get_in_touch',
    type: method,
    data: data,
    success: function(response){
    $(".firstname").val('');
    $(".lastname").val('');
    $(".email").val('');
    $(".country").val('0');
    $(".phone").val('');
    $(".option").val('0');
    $(".grade").val('0');
    $(".hearus").val('0');
    $(".message").val('');
    $('.mail_status').html("Thank you message sent.!");
        if(via==2){
            setTimeout(function() {
                $("#myModal").modal("toggle");
                window.location.href = url+'get-in-touch/thank-you';
            }, 1000);
        }else{
            setTimeout(function() {
                $('.mail_status').html("");
                $('.btn_send_mail').show();
                window.location.href = url+'get-in-touch/thank-you';
            }, 1000);
        }
    }
  });
    
}

// helper function for sending an AJAX request
function ajax2(method, url, data, via, country) {
   $('.btn_send_mail').hide();
   $.ajax({
    url: url+'email/sent_webinar_request',
    type: method,
    data: data,
    success: function(response){
    $(".firstname").val('');
    $(".lastname").val('');
    $(".email").val('');
    $(".phone").val('');
    $(".source").val('0');
    $(".grade").val('0');
    $(".message").val('');
    $('.mail_status').html("Thank you message sent.!");
        if(via==2){
            setTimeout(function() {
                $("#myModal").modal("toggle");
                if(country=='India'){
                    window.location.href = url+'webinar-india/thank-you';
                }else{
                    window.location.href = url+'webinar-dubai/thank-you';
                }
            }, 1000);
        }else{
            setTimeout(function() {
                $('.mail_status').html("");
                $('.btn_send_mail').show();
                if(country=='India'){
                    window.location.href = url+'webinar-india/thank-you';
                }else{
                    window.location.href = url+'webinar-dubai/thank-you';
                }
            }, 1000);
        }
    }
  });
    
}

// helper function for sending an AJAX request
function ajax3(method, url, data, via, country) {
   $('.btn_send_mail').hide();
   $.ajax({
    url: url+'email/sent_webinar_request',
    type: method,
    data: data,
    success: function(response){
    $(".firstname3").val('');
    $(".lastname3").val('');
    $(".email3").val('');
    $(".phone3").val('');
    $(".source3").val('0');
    $(".grade3").val('0');
    $(".message3").val('');
    $('.mail_status').html("Thank you message sent.!");
        if(via==2){
            setTimeout(function() {
                $("#myModal").modal("toggle");
                if(country=='India'){
                    window.location.href = url+'webinar-india/thank-you';
                }else{
                    window.location.href = url+'webinar-dubai/thank-you';
                }
            }, 1000);
        }else{
            setTimeout(function() {
                $('.mail_status').html("");
                $('.btn_send_mail').show();
                if(country=='India'){
                    window.location.href = url+'webinar-india/thank-you';
                }else{
                    window.location.href = url+'webinar-dubai/thank-you';
                }
            }, 1000);
        }
    }
  });
    
}

function ajax4(method, url, data, via) {
   $('.btn_send_mail').hide();
   $.ajax({
    url: url+'email/ieltsmail',
    type: method,
    data: data,
    success: function(response){
    $(".fullname").val('');
    $(".email").val('');
    $(".country").val('0');
    $(".phone").val('');
    $(".option").val('0');
    $('.mail_status').html("Thank you message sent.!");
        if(via==2){
            setTimeout(function() {
                //$("#myModal").modal("toggle");
                window.location.href = url+'get-in-touch/thank-you';
            }, 1000);
        }else{
            setTimeout(function() {
                $('.mail_status').html("");
               // $('.btn_send_mail').show();
                window.location.href = url+'get-in-touch/thank-you';
            }, 1000);
        }
    }
  });
    
}
