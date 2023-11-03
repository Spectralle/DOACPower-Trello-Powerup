/* global TrelloPowerUp */
import { ShowDescSnippets } from './descsnippets.js';
import { Priority } from './priority.js';

// we can access Bluebird Promises as follows
window.Promise = TrelloPowerUp.Promise;

var GLITCH_ICON = 'https://cdn.glitch.com/2442c68d-7b6d-4b69-9d13-feab530aa88e%2Fglitch-icon.svg?1489773457908';
var GRAY_ICON = 'https://cdn.hyperdev.com/us-east-1%3A3d31b21c-01a0-4da2-8827-4bc6e88b7618%2Ficon-gray.svg';
var WHITE_ICON = 'https://cdn.hyperdev.com/us-east-1%3A3d31b21c-01a0-4da2-8827-4bc6e88b7618%2Ficon-white.svg';
var BLACK_ROCKET_ICON = "https://cdn.glitch.com/1b42d7fe-bda8-4af8-a6c8-eff0cea9e08a%2Frocket-ship.png?1494946700421";



// Trello PowerUp Initialization
TrelloPowerUp.initialize({
  
  // Settings options
  'show-settings': function(t, options){
    // when a user clicks the gear icon by your Power-Up in the Power-Ups menu
    // what should Trello show. We highly recommend the popup in this case as
    // it is the least disruptive, and fits in well with the rest of Trello's UX
    return t.popup({
      title: 'Settings',
      url: './settings.html',
      height: 184
    });
  },
  
  'card-badges': function(t, options){
    return ShowDescSnippets(t); // Show Description snippet on Card face
    return Priority(t); // Show Priority on Card face and back
  },
  'card-detail-badges': function(t, options) {
    return Priority(t);
  },
  
  
  /*
  // Show Priority dropdown on Card back
  'card-detail-badges': function(t, opts) {
    return t
    .card("name")
    .get("name")
    .then(function (cardName) {
      return [{
        // card detail badges (those that appear on the back of cards)
        // also support callback functions so that you can open for example
        // open a popup on click
        title: "Priority [in_dev]",
        color: "red",
        text: "Large",
        callback: function(t, opts) {
          return t.popup({
            title: 'Priority',
            url: 'priority.html',
          });
        },
      }];
    });
	},
  
  'card-detail-badges': function (t, opts) {
    return t
    .card("name")
    .get("name")
    .then(function (cardName) {
      return [{
        // card detail badges (those that appear on the back of cards)
        // also support callback functions so that you can open for example
        // open a popup on click
        text: "Priority [in_dev]",
        color: "red",
        icon: GRAY_ICON, // for card front badges only
        callback: function (t, opts) {
          return t.popup({
            title: 'Priority',
            url: './priority.html',
            height: 184 // we can always resize later, but if we know the size in advance, its good to tell Trello
          });
        },
      }];
    });
  },
  */
});
