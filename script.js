var osaka = new Array(
  "https://hiragino-shun.github.io/osakal.html",
  "https://hiragino-shun.github.io/osakan.html"
);
function random_jump_o() {
  var i = Math.floor(Math.random() * osaka.length);
  location.href = osaka[i];
}

var saitama = new Array(
  "https://hiragino-shun.github.io/saiatamal.html",
  "https://hiragino-shun.github.io/saitaman.html"
);
function random_jump_s() {
  var i = Math.floor(Math.random() * saitama.length);
  location.href = saitama[i];
}

var fukuoka = new Array(
  "https://hiragino-shun.github.io/fukuokal.html",
  "https://hiragino-shun.github.io/fukuokan.html"
);
function random_jump_f() {
  var i = Math.floor(Math.random() * fukuoka.length);
  location.href = fukuoka[i];
}
