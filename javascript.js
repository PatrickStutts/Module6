var button1 = document.getElementById('button1')
var button2 = document.getElementById('button2')
var button3 = document.getElementById('button3')
var button4 = document.getElementById('button4')
var box = document.getElementById('box')



button1.addEventListener('click', resizeBox);
  function resizeBox(){box.style.width='200px'; box.style.height='200px';
};
button2.addEventListener('click', colorBox);
  function colorBox(){box.style.background = "blue"};
button3.addEventListener('click', fadeBox);
  function fadeBox(){box.style.opacity='0,0,0,0.1'};
button4.addEventListener('click', resetBox);
  function resetBox(){box.style.height="150px"; box.style.width="150px"; box.style.background = "orange"};