var text = prompt('Please put your Password');
var p = document.querySelector('p');

if(text === 'ama@outlook.com'){
    p.classList.remove('transparent')
    p.classList.add('green');
}

console.log(p)