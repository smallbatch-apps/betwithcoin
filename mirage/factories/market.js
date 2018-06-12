import { Factory, faker, association } from 'ember-cli-mirage';

export default Factory.extend({
  id() {
    return faker.random.uuid();
  },

  event: association(),

  name() {
    return faker.lorem.sentence();
  }
});
