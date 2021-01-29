/*!*************************************************************************************************
 * ▐▀▀▄ ▄▀▀▀ ▄▀▀▀ █▀▀▀    ▄▀▀▀ █  █ ▄▀▀▀▐▀█▀▌▄▀▀▄ ▐▀▄▀▌      █ ▄▀▀▀
 * █  ▐ ▀▀▀█ ▀▀▀█ █▀▀  ▀▀ █    █  █ ▀▀▀█  █  █  █ █ ▀ ▌   ▄  █ ▀▀▀█
 * ▀  ▐ ▀▀▀  ▀▀▀  ▀▀▀▀     ▀▀▀  ▀▀  ▀▀▀   █   ▀▀  █   ▀ ▀ ▀▄▄█ ▀▀▀ 
 *
 * Site-specific JS for the WSU NSSE website.
 *
 * @author Daniel Rieck [daniel.rieck@wsu.edu] (https://github.com/invokeImmediately)
 * @link https://github.com/invokeImmediately/nsse.wsu.edu/blob/master/JS/nsse-custom.js
 * @license MIT - Copyright (c) 2021 Washington State University
 *   Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 *     and associated documentation files (the “Software”), to deal in the Software without
 *     restriction, including without limitation the rights to use, copy, modify, merge, publish,
 *     distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom
 *     the Software is furnished to do so, subject to the following conditions:
 *   The above copyright notice and this permission notice shall be included in all copies or
 *     substantial portions of the Software.
 *   THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 *     BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 *     NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 *     DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 *     FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 **************************************************************************************************/

////////////////////////////////////////////////////////////////////////////////////////////////////
// TABLE OF CONTENTS
// -----------------
//   §1: Main execution.......................................................................44
//   §2: Function Declarations................................................................83
////////////////////////////////////////////////////////////////////////////////////////////////////


// See [https://github.com/invokeImmediately/distinguishedscholarships.wsu.edu] for repository of
// source code

////////////////////////////////////////////////////////////////////////////////////////////////////
// CUSTOM JS CODE SPECIFIC TO THE UCORE WEBSITE

( function ( $ ) {

"use strict";

////////////////////////////////////////////////////////////////////////////////////////////////////
// §1: Function declarations

/**
 * Inspect the body tag to add a header to news pages when certain classes are in use.
 *
 * @param {String} markup - The HTML comprising the page header to be added to the DOM.
 */
function addNewsHeaderViaClassUtilization( markup ) {
	var $body = $( 'body' ).first();
	if ( $body.hasClass( 'single-post' ) || ( $body.hasClass( 'archive' ) &&
			( $body.hasClass( 'category' ) ||  $body.hasClass( 'tag' ) ) ) ) {
		$body.find( '.column.one' ).first().parent( '.row' ).before( markup );
	}
}

/**
 * Use the browser's location to add a header to news pages, which lack them by default.
 *
 * @param {String} markup - The HTML comprising the page header to be added to the DOM.
 */
function addNewsHeaderViaLocation( markup ) {
	var siteURL = window.location.pathname;
	if ( siteURL == '/news/' ) {
		$( '.column.one' ).first().parent( '.row' ).before( markup );
	}
}

/**
 * Add page headers to news pages.
 *
 * @param {String} htmlNewsHeader - The HTML comprising the page header to be added to the DOM.
 */
function addPageHeaderOnNewsPages( params ) {
	var headerMarkup = params.htmlNewsHeader;
	addNewsHeaderViaLocation( headerMarkup );
	addNewsHeaderViaClassUtilization( headerMarkup );
}

////////////////////////////////////////////////////////////////////////////////////////////////////
// §2: Execution entry point

$( function () {
	addPageHeaderOnNewsPages( {
		htmlNewsHeader: '<section id="news-section-header" class="row single article-header h--192px"' +
			'><div style="" class="column one"><div class="wrapper"><ol class="breadcrumb-list"><li cla' +
			'ss="breadcrumb-list__breadcrumb"><a class="breadcrumb-list__link" href="/">NSSE Home</a></' +
			'li></ol><h1 class="tt--uppercase">News</h1></div></div></section>'
	} );
} );

} )( jQuery );
