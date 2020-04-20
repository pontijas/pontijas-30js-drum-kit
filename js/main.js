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
  function removeChange(e) {
    if (e.propertyName !== 'transform') return;
    key.classList.remove('key-playing');
  }
  const keys = document.querySelectorAll('.key');
  keys.forEach((key) => key.addEventListener('transitionend', removeChange));

  key.classList.add('key-playing');
}

window.addEventListener('keydown', executeAll);
