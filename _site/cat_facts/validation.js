	$.validator.methods.isProperDate = function (value) {

	    var date = new Date(value);
	    return !isNaN(date);
	};

	$.validator.methods.isFirstLastName = function (value) {
	    if (/^[a-zA-Z]* [a-zA-Z]*$/.test(value)) {
	        return true
	    } else {
	        return false
	    }
	}



	$(document).ready(function () {
	    console.log("hello world!")
	    $("success").hide();
	    var validator = $('#createAcctForm').validate({

	        rules: {
	            email: {
	                required: true,
	                email: true
	            },
	            firstLastName: {
	                required: true,
	                isFirstLastName: true
	            },
	            birthday: {
	                required: true,
	                isProperDate: true
	            },
	            password: {
	                required: true,
	                minlength: 6
	            }
	        },
	        messages: {
	            firstLastName: {
	                isFirstLastName: "First and last name should be separated by a space."
	            },
	            birthday: {
	                isProperDate: "Input is not valid date, please enter in format MM/DD/YY"
	            }
	        },
	        submitHandler: function (form) {
	            $("#success").show();
	            alert("Congratulations, you are now a lifetime member of Cat Facts! You will receive trivial information about cats as well as affiliate marketing for cat toys on an hourly basis emailed directly to your inbox. Cat Facts can't be bargained with. It can't be reasoned with. It doesn't feel pity, or remorse, or fear. And it absolutely will not stop... ever, until you are dead!");
	        },
	        errorPlacement: function (error, element) {
	            error.addClass("alert alert-danger");
	            console.log("error");
	            console.log(element);
	            error.appendTo(element);
	            error.appendTo(element.parent("div"));
	            console.log(element);
	        }
	    });


	});
