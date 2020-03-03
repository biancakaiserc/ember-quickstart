import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('plants', function() {
    this.route('detailed',  { path: '/:plant_id' });
  });
  this.route('quizz', function() {
    this.route('sunlight');
    this.route('water');
    this.route('pets');
  });
  this.route('not-found', { path: '/*path' });
});

export default Router;
