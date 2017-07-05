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
  'click #addperson'(elt,instance) {
    console.log('failed');
    const name = instance.$('#name').val();
    const location = instance.$('#location').val();
    const event = instance.$('#event').val();
    console.log('adding '+name);
    var info =
      { name:name,
        location:location,
        event:event,
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
  },

  // 'click #updatelocation'(elt,instance) {
  //   // console.dir(this);
  //   // console.log(this.person._id);
  //   const name = $('#name').val();
  //   const newlocation = $('#location').val();
  //   id = Meteor.userId();
  //   newinfo =
  //     { name:name,
  //       location: newlocation
  //     };
  //   Meteor.call('people.update',id,newinfo);
  // }
})

Template.updatelocation.events({
  'click button'() {
    // console.dir(this);
    // console.log(this.person._id);
    // const name = $('#name').val();
    const newlocation = $('#location').val();
    const newevent = $('#event').val();
    id = Meteor.userId();
    var newinfo =
      { name:name,
        location: newlocation,
        event:newevent,
      };
      console.dir(this);
    Meteor.call('people.update',newlocation,newevent);
  }
})

Template.personrow.events({
  'click button'(elt,instance) {
    console.dir(this);
    console.log(this.person._id);
    Meteor.call('people.remove',this.person);
  }
})
