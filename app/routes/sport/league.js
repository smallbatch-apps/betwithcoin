import Route from '@ember/routing/route';

export default Route.extend({
  model(params){
    console.warn('League model hook');
    return this.get('store').findRecord('league', params.league_id);
  }
});
