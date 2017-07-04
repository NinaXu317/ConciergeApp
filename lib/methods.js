Meteor.methods({
  'people.insert': function(info) {
    People.insert(info);
  },

  'people.remove': function(info){
    console.log("userid="+this.userId);
    console.log('info.owner='+info.owner);
    console.dir(info);
    if (this.userId == info.owner) {
       People.remove(info._id);
       alert("Successfully removed your location");
    } else {
       alert("Failed to remove your location. You cannot remove other people's entry.")
    }
  },

  'people.update': function(id,newinfo) {
    // if (this.userId == info.owner) {
      People.update(info._id, {
        $set: {info:newinfo}
      }),
        alert("Successfully updated your location");
    // } else {
    //     alert("Failed to update location.");
    //   }
    }
});
