
// const nav =document.getElementById('nav');

// const h2 = document.createElement('h2');
// h2.innerText = 'amar sonar bangla';

// const div = document.createElement('div')


// const h3 = document.createElement('h3');
// h3.innerText = 'oh amr sona pakih';

// const ul = document.createElement('ul');
// ul.innerHTML = `

//         <li style="list-style-type = none">alul</li>
//         <li>potol</li>

// `


// nav.appendChild(h2);
// nav.appendChild(div);
// div.appendChild(h3);
// div.appendChild(ul);

//  onclick ayer khela 



// function clic(){
//     const putput = document.getElementById('putput');
//     putput.innerText =Date();
    
    
// }

// function hmm(){
//     document.getElementById('putput').innerText= alert('valo khelaie shikcoh');
// }

// const kmmm = () => {
//     document.body.style.backgroundColor ="red";
// }

// const nill = document.getElementById('nill');
// nill.onclick =function ()  {
//     document.body.style.backgroundColor= 'blue';
// }

// document.getElementById('addd').addEventListener('click', () => {
//     document.body.style.backgroundColor = 'black';
// })

// const tuttut = document.getElementById('tuttut');
// tuttut.onclick = arekjaygye ;

// function arekjaygye(){
//     document.body.style.backgroundColor = 'tomato';
// }



// <!-- addevenlistener details  --> code 37

// document.getElementById('change').addEventListener('click', () => {
//     const changehobe = document.getElementById('hobe');
//     changehobe.innerText = 'bangladesh shadin';
// })

// const change = document.getElementById('change');
// change.onclick = function (){
//     const hobe = document.getElementById('hobe') ;
//     hobe.innerText = 'amar sonar bangla';
// }



// <!-- input button aye clik  -->



// document.getElementById('dilam-chap').addEventListener('click', () => {
//     const inputt = document.getElementById('inputt');
//     const invalu = inputt.value;

//     const praa = document.getElementById('pra'); 
//     praa.innerHTML = invalu ;
// })

// document.getElementById('dilam-chap').addEventListener('click', () => {
//     const inputt = document.getElementById('inputt');
//     const inputvalu = inputt.value ;


//     const praa = document.getElementById('pra');
//     praa.innerText = inputvalu;

//     inputt.value="";
// })

// <!-- hw amni extra  --> 49code


// document.getElementById('submitt').addEventListener('click', () => {
//     const commentbox = document.getElementById('textt');
//     const commentValue = commentbox.value;

//     const commentipe = document.getElementById('comment');

//     const pra = document.createElement('p');
//     pra.innerText = commentValue ;

//     commentipe.appendChild(pra);
//     commentbox.value=" ";
    
    
// })


// document.getElementById('submitt').addEventListener('click', () => {
//   const comment =  document.getElementById('comment');
//   const commentvalue = comment.value ;

//   const pra = document.createElement('p')
//   pra.innerText = commentvalue ;

//   const divv = document.getElementById('div');

//   divv.appendChild(pra);

//   comment.value=" ";
// })


// <!-- insert before  -->
    // const manutag = document.getElementById('menu');

    // const li = document.createElement('li');
    // li.innerText = "first";

    // manutag.insertBefore(li.firstChild);



    // <!-- fetch api  -->  code 76

function apii(){
    fetch('http://127.0.0.1:5500/dom.txt')
.then(Response => Response.text())
.then(data => {
    document.getElementById('pra').innerText= data;
})
}


















