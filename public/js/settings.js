/* global TrelloPowerUp */

var Promise = TrelloPowerUp.Promise;
var t = TrelloPowerUp.iframe();

var fruitSelector = document.getElementById('fruit');
var vegetableSelector = document.getElementById('vegetable');
var descSnippetsToggle = document.getElementById('descsnippets');

t.render(function(){
  return Promise.all([
    t.get('board', 'shared', 'fruit'),
    t.get('board', 'private', 'vegetable'),
    t.get('board', 'private', 'descsnippets')
  ])
  .spread(function(savedFruit, savedVegetable, savedDescSnippets){
    if(savedFruit && /[a-z]+/.test(savedFruit)){
      fruitSelector.value = savedFruit;
    }
    if(savedVegetable && /[a-z]+/.test(savedVegetable)){
      vegetableSelector.value = savedVegetable;
    }
    if(savedDescSnippets && /[a-z]+/.test(savedDescSnippets)){
      descSnippetsToggle.value = savedDescSnippets;
    }
  })
  .then(function(){
    t.sizeTo('#content')
    .done();
  })
})

document.getElementById('save').addEventListener('click', function(){
  return t.set('board', 'private', 'vegetable', vegetableSelector.value)
  .then(function(){
    return t.set('board', 'shared', 'fruit', fruitSelector.value)
    .then(function(){
      return t.set('board', 'private', 'descsnippets', descSnippetsToggle.value);
    })
    .then(function(){
      t.alert({message: 'Saved!',  duration: 15, display: 'info'});
      t.closePopup();
    })
  })
})