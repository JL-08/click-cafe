function formValidation() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        alert("First Name must be filled out");
        return false;
    }
	var x = document.forms["myForm"]["lname"].value;
    if (x == "") {
        alert("Last Name must be filled out");
        return false;
    }
	var x = document.forms["myForm"]["email"].value;
    if (x == "") {
        alert("Email must be filled out");
        return false;
    }
	if (/^\w+([\.-]?\ w+)*@\w+([\.-]?\ w+)*(\.\w{2,3})+$/.test(myForm.email.value)){
	return (true)
	}
	alert("You have entered an invalid email address!")
	return (false)
}