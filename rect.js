const buttons = document.querySelectorAll('.box');
const body = document.querySelector("body");

buttons.forEach(function(button){

    console.log(button)
  button.addEventListener('click', function(e){

    console.log(e)
    console.log(e.target)
    if (e.target.id === 'brown'){
      body.style.backgroundColor = 'brown';
    }
    if (e.target.id === 'green'){
      body.style.backgroundColor = 'green';
    }
    if (e.target.id === 'yellow'){
      body.style.backgroundColor = 'yellow';
    }
    if (e.target.id === 'orange'){
      body.style.backgroundColor = 'orange';
    }
  });
});
