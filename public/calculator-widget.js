"use strict";

require('./plugin/jquery.plugin');
require('./plugin/jquery.calculator');

// load CSS files
['/xa1-calculator/public/plugin/jquery.calculator.css'].forEach(function(href) {
	$("<link/>", {
		rel: "stylesheet",
		type: "text/css",
		href: href,
	}).appendTo("head");
});

exports.create = function(container) {
  // add a 'calculator' button to the container 
	var $button = $('<div>').text('calculator').appendTo($(container.div)).click(function() {
		$popup.toggle();
	}).css({
		color: 'white',
	});
  // create the calculator popup which is toggled by the button
	var $popup = $('<div>').appendTo($(container.div)).calculator().css({
		position: 'fixed',
		margin: '7px 0px',
	}).hide();
  // return our widget's API (empty)
	return {};
};
