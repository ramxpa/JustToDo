App = {
  start: function() {
    new App.TasksView()
  }
}


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

      // call a function
      // json stringify
      // look at localstorage router
      var myPost = $(this.el).val();
      var contents = $(".tasklist").append("<li>" + myPost + "</li>").html();
      localStorage.setItem('myTasks', contents);
    }
  }


})