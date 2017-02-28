import Ember from 'ember';

export default Ember.Route.extend({
  store: Ember.inject.service('store'),
  model: function() {
    return Ember.RSVP.hash({
      repositories: this.store.findAll('repository'),
      pipelines: this.store.findAll('pipeline-instance')
    });
  }
});
