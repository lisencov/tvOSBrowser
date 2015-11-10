function WasClicked(e) {
	// JavaScript to send an action to your Objective-C code
	var myAppName = 'jsToObjs';
	var myActionType = 'inputDidFocus';
	var myActionParameters = {
		"id": e.id,
		"text": e.value,
		"backAction": "SetTextToTextFiled"
	}; // put extra info into a dict if you need it

	// (separating the actionType from parameters makes it easier to parse in ObjC.)
	var jsonString = (JSON.stringify(myActionParameters));
	var escapedJsonParameters = escape(jsonString);
	var url = myAppName + '://' + myActionType + "#" + escapedJsonParameters;
	console.log(url);
	document.location.href = url;
}

function SetTextToTextFiled(id, text) {
	document.getElementById(id).value = text; 
}