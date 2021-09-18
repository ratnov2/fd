let contentBoth = document.querySelector('.content_both');
let bottonContentBoth = document.querySelector('.botton_content_both');
let headerFixed = document.querySelector('.header');
let headerImage = document.querySelector('.header_image');

bottonContentBoth.addEventListener('click', contentHeight);
window.addEventListener('scroll', () => {
  //console.log(document.body.scrollTop());
  if (window.pageYOffset > 20) {
    headerFixed.classList.add('fixed');
    headerImage.style.marginTop = "94px";
  } else {
    headerFixed.classList.remove('fixed');
    headerImage.style.marginTop = "0";
  }
});

let heig = true;
function contentHeight() {
  if (heig) {
    contentBoth.style.height = contentBoth.scrollHeight + 40 + 'px';
    heig = false;
  } else {
    contentBoth.style.height = '0px';
    heig = true;
  }
}
