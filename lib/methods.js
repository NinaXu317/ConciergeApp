Meteor.methods({
  'info.insert'(info) {
    People.insert(info);
  },

  'info.remove'(info) {
    People.remove(info._id);
  }
});
