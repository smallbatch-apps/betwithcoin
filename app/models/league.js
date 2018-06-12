import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  sport: DS.belongsTo('sport'),
  events: DS.hasMany('event')
});
