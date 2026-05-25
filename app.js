const btn = document.getElementById('openBtn');

const messageBox =
document.getElementById('messageBox');

btn.addEventListener('click',()=>{

  messageBox.scrollIntoView({
    behavior:'smooth'
  });

});


const boxes =
document.querySelectorAll('.box');

boxes.forEach((box)=>{

  box.addEventListener('mousemove',(e)=>{

    const x = e.offsetX;
    const y = e.offsetY;

    box.style.background =
    `radial-gradient(circle at ${x}px ${y}px,
    rgba(236,72,153,0.25),
    rgba(255,255,255,0.05))`;

  });


  box.addEventListener('mouseleave',()=>{

    box.style.background =
    'rgba(255,255,255,0.05)';

  });

});