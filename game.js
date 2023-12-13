const time = document.getElementById('time');
const rtime = document.getElementById('rtime');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

// 開始時間
let startTime;
// 停止時間
let stopTime = 0;
// タイムアウトID
let timeoutID;

// 時間を表示する関数
function displayTime() {
  const currentTime = new Date(Date.now() - startTime + stopTime);
  const h = String(currentTime.getHours()-9).padStart(2, '0');
  const m = String(currentTime.getMinutes()).padStart(2, '0');
  const s = String(currentTime.getSeconds()).padStart(2, '0');
  const ms = String(currentTime.getMilliseconds()).padStart(3, '0');

  time.textContent = `${m}:${s}`;
  rtime.textContent = `${m}:${s}`;
  timeoutID = setTimeout(displayTime, 10);
}


// ページの読み込みが完了したら時間を進める
window.addEventListener('load', function(){
  startButton.disabled = true;
  stopButton.disabled = false;
  resetButton.disabled = true;
  startTime = Date.now();
  displayTime();
});


// スタートボタンがクリックされたら時間を進める
startButton.addEventListener('click', () => {
  startButton.disabled = true;
  stopButton.disabled = false;
  resetButton.disabled = true;
  startTime = Date.now();
  displayTime();
});

// ストップボタンがクリックされたら時間を止める
stopButton.addEventListener('click', function() {
  startButton.disabled = false;
  stopButton.disabled = true;
  resetButton.disabled = false;
  clearTimeout(timeoutID);
  stopTime += (Date.now() - startTime);
});

// リセットボタンがクリックされたら時間を0に戻す
resetButton.addEventListener('click', function() {
  startButton.disabled = false;
  stopButton.disabled = true;
  resetButton.disabled = true;
  time.textContent = '00:00';
  rtime.textContent = '00:00';
  stopTime = 0;
});


// ストップボタン押下後、フォームを表示するためのプログラム
const stop = document.getElementById('stop');
const mask = document.getElementById('mask');
const modal = document.getElementById('modal');

stop.addEventListener('click', () => {
  mask.classList.remove('hidden');
  modal.classList.remove('hidden');
});

mask.addEventListener('click', () => {
  mask.classList.add('hidden');
  modal.classList.add('hidden');
});


// 目的地画像を表示するプログラム
const btn3 = document.getElementById('btn3');
const missionback = document.getElementById('missionback');
const mission = document.getElementById('mission');
const round_btn = document.getElementById('round_btn');

btn3.addEventListener('click', () => {
  missionback.classList.remove('hidden');
  mission.classList.remove('hidden');
});

missionback.addEventListener('click', () => {
  missionback.classList.add('hidden');
  mission.classList.add('hidden');
});


round_btn.addEventListener('click', () => {
  missionback.classList.add('hidden');
  mission.classList.add('hidden');
});

// ストビューをリロードする関数
function ReloadSv() {
  var iframe = document.getElementById('sutori');
  
  // フレームをリロード
   iframe.contentWindow.location.reload(true);
}

window.addEventListener('load', function () {

});