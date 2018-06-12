import Route from '@ember/routing/route';

//import sports from 'betwithcoins/data/sports';

export default Route.extend({
  model(){
    return this.get('store').findAll('sport');
  }
});
