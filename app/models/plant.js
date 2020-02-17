import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr(),
    url: DS.attr(),
    sun: DS.attr(),
    water: DS.attr(),
    price: DS.attr(),
    toxicity: DS.attr()
});
