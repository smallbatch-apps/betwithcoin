import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sortedSports: computed('model', function(){
    return this.get('model').reduce(function (r, a) {
      r[a.category] = r[a.category] || [];
      r[a.category].push(a);
      return r;
    }, Object.create(null));
  })
});
