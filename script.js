var osaka = new Array(
  "https://github.com/hiragino-shun/onlymap-beta/blob/a53e348f65630f1597d5e0e3f2e9167198e786e9/osakal.html",
  "https://github.com/hiragino-shun/onlymap-beta/blob/a53e348f65630f1597d5e0e3f2e9167198e786e9/osakan.html"
);
function random_jump_o() {
  var i = Math.floor(Math.random() * osaka.length);
  location.href = osaka[i];
}

var saitama = new Array(
  "https://github.com/hiragino-shun/onlymap-beta/blob/a53e348f65630f1597d5e0e3f2e9167198e786e9/saiatamal.html",
  "https://github.com/hiragino-shun/onlymap-beta/blob/a53e348f65630f1597d5e0e3f2e9167198e786e9/saitaman.html"
);
function random_jump_s() {
  var i = Math.floor(Math.random() * saitama.length);
  location.href = saitama[i];
}

var fukuoka = new Array(
  "https://github.com/hiragino-shun/onlymap-beta/blob/a53e348f65630f1597d5e0e3f2e9167198e786e9/fukuokal.html",
  "https://github.com/hiragino-shun/onlymap-beta/blob/a53e348f65630f1597d5e0e3f2e9167198e786e9/fukuokan.html"
);
function random_jump_f() {
  var i = Math.floor(Math.random() * fukuoka.length);
  location.href = fukuoka[i];
}
