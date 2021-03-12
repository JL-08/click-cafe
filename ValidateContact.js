function ValidateContact() {
    var x = document.forms["myForm"]["Name"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
	var x = document.forms["myForm"]["email"].value;
    if (x == "") {
        alert("Email must be filled out");
        return false;
    }
	if (/^\w+([\.-]?\ w+)*@\w+([\.-]?\ w+)*(\.\w{2,3})+$/.test(myForm.email.value)){
	return (true)
	}else{
	alert("You have entered an invalid email address!")
	return (false)
    }
    var val = document.getElementById('tarea').value;

    if (/^\s*$/g.test(val) || val.indexOf('\n') != -1) {
        alert('Wrong content!');
        return false;
    }
}