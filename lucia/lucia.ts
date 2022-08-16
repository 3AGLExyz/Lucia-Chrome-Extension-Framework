// Lodash
import * as _ from 'lodash';

// JQuery
var $ = require( "jquery" );

// Include Alpine the cdn as local dependency, becuase csp is not available as package
require('./cdn/alpinejs-csp-min.js');

require('../resources/js/lucia.ts');

// View Loader
var viewLoader = require( "./view-loader" );
viewLoader.init();