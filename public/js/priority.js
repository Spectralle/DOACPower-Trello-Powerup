export function Priority(t) {
  return t.card()
  .then(function(){
    return [{
      // card detail badges (those that appear on the back of cards)
      // also support callback functions so that you can open for example
      // open a popup on click
      title: 'Priority [Dont Use Yet]', // for detail badges only
      text: 'Priority [Dont Use Yet]',
      icon: 'https://cdn.hyperdev.com/us-east-1%3A3d31b21c-01a0-4da2-8827-4bc6e88b7618%2Ficon-gray.svg', // for card front badges only
      callback: function(context) { // function to run on click
        return context.popup({
          title: 'Priority [Dont Use Yet]',
          url: './priority.html',
          height: 184
        });
      }
    }];
  });
}