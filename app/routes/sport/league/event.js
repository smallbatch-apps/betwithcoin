import Route from '@ember/routing/route';

export default Route.extend({
  model(params){
    console.warn('Event model hook IS firing');
    return this.get('store').findRecord('event', params.event_id);
  }
});
