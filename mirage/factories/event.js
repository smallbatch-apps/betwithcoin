import { Factory, faker, trait, association } from 'ember-cli-mirage';

export default Factory.extend({

  id() {
    return faker.random.uuid();
  },

  name(i) {
    return `Event ${i+1}`;
  },

  league: association(),

  withMarkets: trait({
    afterCreate(event, server) {
      server.createList('market', 5, { event });
    }
  })
});
