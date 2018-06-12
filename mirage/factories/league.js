import { Factory, faker, trait, association } from 'ember-cli-mirage';

export default Factory.extend({
  id() {
    return faker.random.uuid();
  },

  name: faker.company.bs,

  sport: association(), 

  withEvents: trait({
    afterCreate(league, server) {
      server.createList('event', 5, 'withMarkets', { league });
    }
  })
});
