import Controller from '@ember/controller';

export default Controller.extend({
    quizzStatus: 0,
    actions: {
      toggleQuizzStatus() {
        this.toggleProperty('quizzStarted');
      }
    },
    init() {
      this._super(...arguments);
    }
});