;(function (window) {
  'use strict';
  if (typeof window !== 'undefined' && window.mockfirebase) {
    window.MockFirebase = window.mockfirebase.MockFirebase;

    var originals = false;
    window.MockFirebase.override = function () {
      originals = {
        firebase: window.Firebase
      };
      window.Firebase = window.mockfirebase.MockFirebase;
    };
    window.MockFirebase.restore = function () {
      if (!originals) return;
      window.Firebase = originals.firebase;
    };
  }
})(window);
