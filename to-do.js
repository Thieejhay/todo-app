
var button = document.getElementById('enter')
var input = document.getElementById('userinput');
var ul = document.querySelector('ul');
var done = document.createElement('button');
done.setAttribute('id','erase');


button.addEventListener('click', function () {
	if (input.value.length > 0) {
		var li = document.createElement('li');
		li.appendChild(document.createTextNode(input.value));
		var done = document.createElement('button');
	done.setAttribute('id','erase');
		done.innerHTML = 'DONE';
		li.appendChild(done);
		ul.appendChild(li);
		input.value = '';
		
	}
})

input.addEventListener('keypress', function(event) {
	if (input.value.length > 0 && event.keyCode === 13) {
		var li = document.createElement('li');
		li.appendChild(document.createTextNode(input.value));
		var done = document.createElement('button');
		done.setAttribute('id','erase');
		done.innerHTML = 'DONE';
		li.appendChild(done);
		ul.appendChild(li);
		input.value = '';
	}
})

var del = getElementById('erase')

del.addEventListener('click', function () {
	ul.remove()
})




