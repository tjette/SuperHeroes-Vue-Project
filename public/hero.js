var title = "Superheroes";
var appUrl = "/api"
var app = new Vue ({
    el: '#app',
    data: {
      title: title,
      heroes: undefined,
      postTitle: "Create a Superhero",
      name: undefined,
      superPower: undefined,
      img: undefined

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
      },
      postHero: function(){
        var self = this;
        var newSuperHero = {
          name: this.name,
          superPower: this.superPower,
          img: this.img
        };
        console.log(newSuperHero);

        $.ajax({
          url: '/api',
          method: 'POST',
          data: newSuperHero
        }).done(function(response){
          console.log(response.data, "Hero Created");
        })
      }

    }
});
