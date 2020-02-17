import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        filterByWaterLevel(param) {
            if (param !== '') {
                return this.get('store').query('plant', { water: param });
            } else {
                return this.get('store').findAll('plant');
            }
        }
    }
});
