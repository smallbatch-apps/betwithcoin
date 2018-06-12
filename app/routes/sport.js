import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    console.warn('sport model hook');
    return this.get('store').find('sport', params.sport_id);
  }
});
