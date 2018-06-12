import { Model, belongsTo, hasMany } from 'ember-cli-mirage';

export default Model.extend({
  markets: hasMany(),
  league: belongsTo()
});
