'use strict';

function executeAll(e) {
  playSound(e);
  paintChange(e);
}

function playSound(e) {
  const sound = document.querySelector(`audio[data-key="${e.keyCode}"]`);

  if (!sound) return;
  sound.currentTime = 0;
  sound.play();
}

function paintChange(e) {
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  const keys = document.querySelectorAll('.key');
  console.log('array', keys);

  key.classList.add('key-playing');
}

window.addEventListener('keydown', executeAll);
