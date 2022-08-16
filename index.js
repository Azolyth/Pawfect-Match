'use strict';
// Remember to import the data and Dog class!
import data from './data.js';
import Dog from './Dog.js';

let currentIndex = 0;
let currentDog = new Dog(data[currentIndex]);

const likeButton = document.getElementById('like-button');
const dislikeButton = document.getElementById('cross-button');

// Renders getDogHtml onto DOM
const render = () => {
  document.getElementById('profile-picture-card').innerHTML = currentDog.getDogHtml();
};
// Calling render
render();

// Increases index and assigns current index for re-render
const getNextDog = () => {
  currentIndex++;
  currentDog = new Dog(data[currentIndex]);
  render();
};

const likeHandler = () => {
  currentDog.setMatchStatus(true);
  profileStatus();
  setTimeout(getNextDog, 1000);
};

const dislikeHandler = () => {
  currentDog.setMatchStatus(false);
  profileStatus();
  setTimeout(getNextDog, 1000);
};

const profileStatus = () => {
  let profileStatusHtml = '';
  let likeStatus = currentDog.hasBeenLiked ? 'like' : 'nope';
  profileStatusHtml = `
    <img class="profile-rating" src="./images/badge-${likeStatus}.png">
    `;
  return (document.getElementById('profile-rating').innerHTML = profileStatusHtml);
};

likeButton.addEventListener('click', likeHandler);
dislikeButton.addEventListener('click', dislikeHandler);
