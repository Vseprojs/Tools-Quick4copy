window.onload = mainFunc;
var items = {};
function mainFunc () {
  var btn01 = document.getElementById('btn01');
  var item01 = document.getElementById('item01');
  items['btn01'] = [btn01, item01];

  btn01.addEventListener('click', func1, false);

//  console.log(btn01);

}

function func1(el) {
  var btn = items[el.target.id][0];
  var item = items[el.target.id][1];
  item.select();
  var successful = document.execCommand('copy');
}
