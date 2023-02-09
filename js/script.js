function validate() {
	let name = document.getElementById("a").value;
	let na = document.getElementById("b").value;
	let regx = /^[a-z A-Z]{2,15}$/;
	let mail = document.getElementById("c").value;
	let emrg = /^[a-zA-Z0-9+_.-]+@[a-zA-Z]+\.[a-z A-Z]{2,4}$/;
	let date = document.getElementById("arrive").value;
	let pack = document.getElementById("sel").value;
	let pers = document.getElementById("person");
	if (name == "") {
		alert("Name field is mandatory");
		return false;
	} else if (na == "") {
		alert("Name field is mandatory");
		return false;
	} else if (!regx.test(name)) {
		alert("enter valid name");
		return false;
	}
	if (mail == "") {
		alert("Email field is mandatory");
		return false;
	} else if (!emrg.test(mail)) {
		alert("enter valid mail id");
		return false;
	} else if (pack == "select") {
		alert("please select package");
		return false;
	} else if (date == "") {
		alert("Date field is mandatory");
		return false;
	} else if (pers == "") {
		alert("select  no of persons");
		return false;
	} else if (
		(document.getElementById("package1").checked = false) &&
		(document.getElementById("package2").checked = false)
	) {
		alert("select  no of persons");
		return false;
	} else if (
		(document.getElementById("agree").checked = false) &&
		(document.getElementById("disagree").checked = false)
	) {
		alert("select  no of persons");
		return false;
	} else {
		return true;
	}
}
