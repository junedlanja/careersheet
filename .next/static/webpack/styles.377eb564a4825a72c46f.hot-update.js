webpackHotUpdate("styles",{

/***/ "./components/HomePage/Hero/HeroStyle.css":
/*!************************************************!*\
  !*** ./components/HomePage/Hero/HeroStyle.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"heroImage":"_2i3AT984wsH4bg66sP2knF","heroText":"TOQnTMYYa0mE_oAYahfDc","searchBar":"_2oAzKRpKFWLkz7rHnbZ-Ix","tabs":"_3SYDV0VtipE1rsCNUyyYV2","tab":"dly2wVH_E8dtYXuowiCOk","first":"_1Y-YMYmsIk9E1BZ9CtDAhS","last":"_1DLP0_arB2t_dGRDZ8mqKu"};;
    if (true) {
      var injectCss = function injectCss(prev, href) {
        var link = prev.cloneNode();
        link.href = href;
        link.onload = function() {
          prev.parentNode.removeChild(prev);
        };
        prev.stale = true;
        prev.parentNode.insertBefore(link, prev);
      };
      module.hot.dispose(function() {
        window.__webpack_reload_css__ = true;
      });
      if (window.__webpack_reload_css__) {
        module.hot.__webpack_reload_css__ = false;
        console.log("[HMR] Reloading stylesheets...");
        var prefix = document.location.protocol + '//' + document.location.host;
        document
          .querySelectorAll("link[href][rel=stylesheet]")
          .forEach(function(link) {
            if (!link.href.match(prefix) || link.stale) return;
            injectCss(link, link.href.split("?")[0] + "?unix=1540879371092");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.377eb564a4825a72c46f.hot-update.js.map