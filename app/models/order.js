import DS from 'ember-data';

export default DS.Model.extend({
  sunlight: DS.attr('string'),
  water: DS.attr('string'),
  pets: DS.attr('string'),
  plantId: DS.attr(),
  name: DS.attr(),
  email: DS.attr()
});