var osaka = new Array(
  "https://github.com/hiragino-shun/onlymap-beta/blob/main/osakal.html",
  "https://github.com/hiragino-shun/onlymap-beta/blob/main/osakan.html"
);
function random_jump_o() {
  var i = Math.floor(Math.random() * osaka.length);
  location.href = osaka[i];
}

var saitama = new Array(
  "https://github.com/hiragino-shun/onlymap-beta/blob/main/saiatamal.html",
  "https://github.com/hiragino-shun/onlymap-beta/blob/main/saitaman.html"
);
function random_jump_s() {
  var i = Math.floor(Math.random() * saitama.length);
  location.href = saitama[i];
}

var fukuoka = new Array(
  "https://github.com/hiragino-shun/onlymap-beta/blob/main/fukuokal.html",
  "https://github.com/hiragino-shun/onlymap-beta/blob/main/fukuokan.html"
);
function random_jump_f() {
  var i = Math.floor(Math.random() * fukuoka.length);
  location.href = fukuoka[i];
}
