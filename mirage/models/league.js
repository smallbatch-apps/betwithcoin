import { Model, belongsTo, hasMany } from 'ember-cli-mirage';

export default Model.extend({
  events: hasMany(),
  sport: belongsTo()
});
