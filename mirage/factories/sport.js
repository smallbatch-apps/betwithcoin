import { Factory, faker, trait, association } from 'ember-cli-mirage';

export default Factory.extend({

  id() {
    return faker.random.uuid();
  },

  name(i) {
    return `Sport ${i+1}`;
  },

  category() {
    return faker.random.arrayElement(['Sport', 'Other']);
  },

  withLeagues: trait({
    afterCreate(sport, server) {
      server.createList('league', 3, 'withEvents', { sport });
    }
  })
});
