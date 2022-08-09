'use strict';
// Remember to import the data and Dog class!
import data from './data.js';
import Dog from './Dog.js';

let hasBeenLiked = false;
let hasBeenDisliked = false;

const profileStatus = () => {
  let likeStatus = hasBeenLiked ? 'like' : 'nope';
  let profileStatusHtml = '';

  profileStatusHtml = `
    <img class="profile-rating" src="./images/badge-${likeStatus}.png">
    `;
  return (document.getElementById('profile-rating').innerHTML =
    profileStatusHtml);
};

document.getElementById('like-button').addEventListener('click', () => {
  hasBeenLiked = true;
  profileStatus();
});

document.getElementById('cross-button').addEventListener('click', () => {
  hasBeenLiked = false;
  profileStatus();
});
