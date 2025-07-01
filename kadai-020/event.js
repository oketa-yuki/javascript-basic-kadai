const myText = document.getElementById('text');

const myBtn = document.getElementById('btn');

myBtn.addEventListener('click', () => {

  myText.textContent = 'ボタンをクリックしました';
});