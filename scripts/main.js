window.onload = mainFunc;
var items = {};
function mainFunc () {
  var btn01 = document.getElementById('btn01');
  var item01 = document.getElementById('item01');
  var btn02 = document.getElementById('btn02');
  var item02 = document.getElementById('item02');
  var btn03 = document.getElementById('btn03');
  var item03 = document.getElementById('item03');
  var btn04 = document.getElementById('btn04');
  var item04 = document.getElementById('item04');
  var btn05 = document.getElementById('btn05');
  var item06 = document.getElementById('item05');
  var btn06 = document.getElementById('btn06');
  var item06 = document.getElementById('item06');
  var btn07 = document.getElementById('btn07');
  var item07 = document.getElementById('item07');
  var btn08 = document.getElementById('btn08');
  var item08 = document.getElementById('item08');
  var btn09 = document.getElementById('btn09');
  var item09 = document.getElementById('item09');

  items['btn01'] = [btn01, item01];
  items['btn02'] = [btn02, item02];
  items['btn03'] = [btn03, item03];
  items['btn04'] = [btn04, item04];
  items['btn05'] = [btn05, item05];
  items['btn06'] = [btn06, item06];
  items['btn07'] = [btn07, item07];
  items['btn08'] = [btn08, item08];
  items['btn09'] = [btn09, item09];

  btn01.addEventListener('click', func1, false);
  btn02.addEventListener('click', func1, false);
  btn03.addEventListener('click', func1, false);
  btn04.addEventListener('click', func1, false);
  btn05.addEventListener('click', func1, false);
  btn06.addEventListener('click', func1, false);
  btn07.addEventListener('click', func1, false);
  btn08.addEventListener('click', func1, false);
  btn09.addEventListener('click', func1, false);

//  console.log(btn01);

}

function func1(el) {
  var btn = items[el.target.id][0];
  var item = items[el.target.id][1];
  item.select();
  var successful = document.execCommand('copy');
}
