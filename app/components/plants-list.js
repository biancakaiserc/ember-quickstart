import Component from '@ember/component';

export default Component.extend({
    actions: {
        showPlant(plant) {
            alert(plant);
        }
    }
});
