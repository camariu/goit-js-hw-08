
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player');

const savedTime = localStorage.getItem('videoplayer-current-time');

if (savedTime) {
  player.setCurrentTime(parseFloat(savedTime));
}

const saveCurrentTime = throttle(function (event) {
  localStorage.setItem('videoplayer-current-time', event.seconds.toString());
}, 1000);

player.on('timeupdate', saveCurrentTime);