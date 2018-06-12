import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('how-it-works');
  this.route('sport', { path: 'sport/:sport_id'}, function() {
    this.route('league', { path: 'league/:league_id'}, function() {
      this.route('event', { path: 'event/:event_id'});
    });
  });
});

export default Router;
