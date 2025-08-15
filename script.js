(function(){
  const slides = Array.from(document.querySelectorAll('.slide'));
  const dotsWrap = document.getElementById('dots');
  let idx = 0;

  // create dots
  slides.forEach((s,i) => {
    const btn = document.createElement('button');
    if(i===0) btn.classList.add('active');
    btn.addEventListener('click', () => { goTo(i); });
    dotsWrap.appendChild(btn);
  });

  const dots = Array.from(dotsWrap.children);

  function show(i){
    slides.forEach(s => s.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));
    slides[i].classList.add('active');
    dots[i].classList.add('active');
  }

  function goTo(i){
    idx = i;
    show(idx);
  }

  function next(){
    idx = (idx + 1) % slides.length;
    show(idx);
  }

  // auto-play
  let timer = setInterval(next, 4500);

  // pause on hover
  const slider = document.getElementById('slider');
  slider.addEventListener('mouseenter', () => clearInterval(timer));
  slider.addEventListener('mouseleave', () => timer = setInterval(next,4500));
})()
