Template.showpeople.helpers({
  peoplelist() {return People.find()}
})
Template.personrow.helpers({
  isOwner() {console.dir(this);
    return this.person.owner == Meteor.userId()}
})

Template.addperson.events({
  'click button'(elt,instance) {
    const name = instance.$('#name').val();
    const location = instance.$('#location').val();
    console.log('adding '+name);
    instance.$('#name').val("");
    instance.$('#location').val("");
    var info =
      { name:name,
        location:location
      };
    Meteor.call ('info.insert',info);
    //People.insert({name:name,location:location})
  }
})

Template.updatelocation.events({
  'click button'(elt,instance) {
    People.update(this.person_id,{
      $set:{name:name,location:location}
    });
    alert ("Successfully updated your location");
  }
})

Template.personrow.events({
  'click button'(elt,instance) {
    console.dir(this);
    console.log(this.person_id);
    Meteor.call('info.remove',this.person_id);
  }
})
