import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    toggleEdit(){
      this.toggleProperty('isEditable')
    },
    save(){
      /*ajax here*/
      console.log('SAVED!')
      this.send('toggleEdit');
    }
  }
});
