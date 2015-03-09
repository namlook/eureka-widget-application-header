import Ember from 'ember';
import WidgetApplication from 'ember-eureka/widget-application';

export default WidgetApplication.extend({
    brand: Ember.computed.alias('config.brand')
});
