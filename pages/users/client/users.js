Template.showpeople.helpers({
  peoplelist() {return People.find()}
})
Template.personrow.helpers({
  isOwner() {console.dir(this);
    return this.person.owner == Meteor.userId()}
})
// Template.updatelocation.helpers({
//   isOwner() {console.dir(this);
//     return this.person.owner == Meteor.userId()}
// })
Template.addperson.onCreated(function bodyOnCreated() {
  // this.state = new ReactiveDict();
   Meteor.subscribe('people');
});

Template.addperson.events({
  'click button'(elt,instance) {
    console.log('failed');
    const name = instance.$('#name').val();
    const location = instance.$('#location').val();
    console.log('adding '+name);
    var info =
      { name:name,
        location:location,
        owner:Meteor.userId()
      };
      Meteor.call('people.insert',info,
        (err, res) => {
          if (err) {
            alert("Failed to add your location");
          } else {
            alert("Successfully added your location")
          }
        }
      );
    //People.insert({name:name,location:location})
  }
})

// Template.updatelocation.events({
//   'click button'(elt,instance) {
//     // console.dir(this);
//     // console.log(this.person._id);
//     Meteor.call('people.update',id,newinfo);
//   }
// })

Template.personrow.events({
  'click button'(elt,instance) {
    console.dir(this);
    console.log(this.person._id);
    Meteor.call('people.remove',this.person);
  }
})
