var osaka = new Array(
  "osakal.html",
  "osakan.html"
);
function random_jump_o() {
  var i = Math.floor(Math.random() * osaka.length);
  location.href = osaka[i];
}

var saitama = new Array(
  "saiatamal.html",
  "saitaman.html"
);
function random_jump_s() {
  var i = Math.floor(Math.random() * saitama.length);
  location.href = saitama[i];
}

var fukuoka = new Array(
  "fukuokal.html",
  "fukuokan.html"
);
function random_jump_f() {
  var i = Math.floor(Math.random() * fukuoka.length);
  location.href = fukuoka[i];
}
