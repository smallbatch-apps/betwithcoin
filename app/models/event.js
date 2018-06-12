import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  league: DS.belongsTo('league'),
  markets: DS.hasMany('market')
});
