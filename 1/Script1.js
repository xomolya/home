

var names = ['Vasa', 'Pitya', 'Anya', 'Vera', 'Alex'];
var list = document.getElementById('names');
var html = '<ul>';
for (var name of names) {
    html += '<li>' + name + '</li>';
}
html += '</ul>'

list.innerHTML = html;

list.onclick = function (event) {
    var target = event.target;
    alert('You have chosen a name ' + event.target.innerHTML);
}