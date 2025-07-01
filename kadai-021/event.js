const myBtn = document.getElementById('btn');

const myText = document.getElementById('text');

myBtn.addEventListener('click',() => {


  setTimeout(() => {
    myText.textContent = 'ボタンをクリックしました';
  },2000);

});