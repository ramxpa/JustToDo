App = {
  start: function() {
    new App.TasksView()
  }
}


  /*
   localStorage.setItem('foo', 'bar');
   localStorage.getItem('foo');

   Keyup 
   http://api.jquery.com/keyup/
   keycode for Enter is 13
  
   Click
   http://api.jquery.com/click/

   Get entered value and append to the li
   Set the value to a localstorage key value pair
   Get the localstorage value and append it to li

   Optional
   Strikethrough and remove on click?
    

*/ 

App.TasksView = Backbone.View.extend ({
  el: '#tasks',

  events: {
    'keypress': 'handleEnter'
  },

  initialize: function(){
    $(this.el).focus()
  },

  handleEnter: function(e){
    if (e.keyCode == 13) {
      console.log('Enter');

      var myPost = $(this.el).val();
      var contents = $(".tasklist").append("<li>" + myPost + "</li>").html();
      localStorage.setItem('myTasks', contents);
    }
  }


})