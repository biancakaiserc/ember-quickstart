import DS from 'ember-data';

export default DS.Model.extend({
    type:  DS.attr(),
    title: DS.attr(),
    image: DS.attr(),
    color: DS.attr(),
    cards: DS.attr()
});
