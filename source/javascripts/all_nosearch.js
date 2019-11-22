//= require ./lib/_energize
//= require ./app/_toc
//= require ./app/_lang

$(function() {
  window.loadToc($('#toc'), '.toc-link', '.toc-list-h2, .toc-list-h3, .toc-list-h4, .toc-list-h5, .toc-list-h6', 10);
  window.setupLanguages($('body').data('languages'));
  $('.content').imagesLoaded( function() {
    window.recacheHeights();
    window.refreshToc();
  });
});

window.onpopstate = function() {
  window.activateLanguage(window.getLanguageFromQueryString());
};
