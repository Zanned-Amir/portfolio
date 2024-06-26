const checkbox = document.getElementById("checkbox");
checkbox.addEventListener("change", () => {
    document.body.classList.toggle("dark");
});



let sections = document.querySelector('section');
let  navlinks = document.querySelectorAll('nav a');

window.addEventListener(sec => {
  let top = Window.scrollY ;
  let offset =  sec.offestTop ;
  let height = sec.offsetHeight;
  let id = sec.getAttribute('id');

  if(top >= offset && top < offset + height){
    navlinks.forEach(links => {
      links.classList.remove('active');
      document.querySelector('nav a[href*=' + id + ']').classList.add('active');
    });
  }
}
);
