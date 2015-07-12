var calcBtn = document.getElementById('calculateBtn');
calcBtn.onclick = function(){
  var sum = Number(document.getElementById('num_one').value) + Number(document.getElementById('num_two').value);
  document.getElementById('answer').innerText = sum;
};
