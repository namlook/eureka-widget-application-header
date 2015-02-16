import Ember from 'ember';
import WidgetApplication from 'ember-eureka/widget-application';

export default WidgetApplication.extend({
    name: Ember.computed.alias('application.name')
});
