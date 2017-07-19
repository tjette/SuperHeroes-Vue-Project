
var villainApp = new Vue({
  el: '#villain',
  data: {
    villains: undefined,
    name: undefined,
    evilPower: undefined,
    img: undefined,
    searchString: ""
  },
  created: function(){
    this.fetchData();
  },
  methods: {
    fetchData: function(){
      var self = this;

      $.ajax({
      url: '/api/villains',
      method: 'GET'
    }).done(function(response){
      console.log(response);
      self.villains = response.data;
      console.log("received villains", response.data);
    })
  },
  postVillain: function(){
    var self = this;
    var newVillain = {
      name: this.name,
      evilPower: this.evilPower,
      img: this.img
    };
    console.log(newVillain);

    $.ajax({
      url: '/api/villains',
      method: 'POST',
      data: newVillain
    }).done(function(response){
      console.log(response);
      console.log(response.data, "Villain Created");
      })
    },
    deleteVillain: function(_id){
      console.log("Deleting Villain", _id);
      var self = this;

      $.ajax({
        method: "DELETE",
        url: "/api/villains/" + _id,
      }).done(function(response){
        console.log(response);
      })

    }
  },
  computed: {
  filteredVillains: function () {
    var self = this;
    var villains = self.villains;
    var searchString = self.searchString;

    if(!searchString){
      return villains;
    }
    searchString = searchString.trim().toLowerCase();

    villains = villains.filter(function(item){
      if(item.name.toLowerCase().indexOf(searchString) !== -1){
        return item;
      }
    })
    return villains;

  }
}
})
