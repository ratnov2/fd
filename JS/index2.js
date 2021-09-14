let contentBoth = document.querySelector('.content_both');
let bottonContentBoth = document.querySelector('.botton_content_both');

bottonContentBoth.addEventListener('click', contentHeight);

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
