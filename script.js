let cacher = document.querySelector('#cacher');
document.querySelector('Fiches')
if (cacher) {

  cacher.addEventListener('click', () => {
  
    document.body.classList.toggle('Fiches');
  });
}