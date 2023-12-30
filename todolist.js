/* Close Button for existing items in the list */

var mylist = document.getElementsByTagName('li');

for (var i = 0; i < mylist.length; i++) {
	var span = document.createElement('span');
	var txt = document.createTextNode('\u00D7');

	span.className = 'close';
	span.appendChild(txt);

	mylist[i].appendChild(span);
}

/* Programming for the close button */

var close = document.getElementsByClassName('close');

for (var i = 0; i < close.length; i++) {
	close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

/* The Programming for the add button */

function add() {
	var li = document.createElement('li');
	var inpt = document.getElementById('input').value;
	var txt = document.createTextNode(inpt);

	li.appendChild(txt);

	if (inpt === '') {
		alert('Please enter a task')
	} else {
		document.getElementById('list').appendChild(li);
	}

	document.getElementById('input').value = '';

	var span = document.createElement('span');
	var txt = document.createTextNode('\u00D7');

	span.className = 'close';
	span.appendChild(txt);
	li.appendChild(span);

	for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = 'none';
    }
  }
}

/* Clear List Button */

function cleara() {
	var mylist = document.getElementsByTagName('li');

	for (var i = 0; i <= mylist.length; i++) {

		var list = document.getElementById('list');

		list.removeChild(mylist[i]);
	}
}