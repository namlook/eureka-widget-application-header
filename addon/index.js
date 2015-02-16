import Ember from 'ember';
import Widget from 'ember-eureka/widget';

export default Widget.extend({
    name: Ember.computed.alias('application.name')
});
