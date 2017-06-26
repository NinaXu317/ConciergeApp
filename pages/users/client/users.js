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
    People.insert({name:name,location:location});
    //People.insert({name,birthyear})
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
    if (this.person.owner==Meteor.userId()) {
      People.remove(this.person._id);
    } else {
      alert("Why are you deleting someone else's entry?");
    }
    People.remove(this.person._id);
  }
})
