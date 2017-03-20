/* jshint node: true */
'use strict';
var path = require('path');

module.exports = {
  name: 'ember-jwplayer',

  blueprintsPath: function() {
    return path.join(__dirname, 'blueprints');
  },

  included(app) {
    while (app.app) {
      app = app.app;
    }

    this.eachAddonInvoke('included', [app]);
    this._super.included.apply(this, [app]);
    
    // this.app.import('vendor/jwplayer-7.9.3/jw-icons.ttf', {
    //   destDir: '/'
    // });
    // this.app.import('vendor/jwplayer-7.9.3/jw-icons.woff', {
    //   destDir: '/'
    // });
  },
};
