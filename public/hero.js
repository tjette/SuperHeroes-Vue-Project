var title = "Superheroes";
var appUrl = "/api"
var app = new Vue ({
    el: '#app',
    data: {
      title: title,
      heroes: undefined,

    },
    created: function(){
      this.fetchData();
    },
    methods: {
      fetchData: function(){
        var self = this;

        $.ajax({
        url: '/api',
        method: 'GET'
      }).done(function(response){
        self.heroes = response.data;
        console.log("recieved heroes", response.data);
      })
      }
    }
});
