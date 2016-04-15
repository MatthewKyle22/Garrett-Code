var people = [
    {
        name: 'Matt',
        age: 23,
        location: 'Boulder, CO',
    },
    {
        name: 'Garrett',
        age: '',
        location: 'OKC',
    },
    {
        name: 'Emily',
        age: '21',
        location: 'OKC',
    }
];





// var p = document.createElement("p");
// document.body.appendChild(p);




//console.log(people[0]['name'],people[1]['name']);

var list = document.getElementById('people');
var selected = document.getElementById('selected');

people.forEach(function(p) {
    var listItem = document.createElement("li");
    
    listItem.innerHTML = p.name
    list.appendChild(listItem);
    
    listItem.addEventListener("click", function(){
    selected.innerHTML = p.name;
    });
});


