(function(window){
  window.extractData = function() {
    var ret = $.Deferred();

    function onError() {
      console.log('Loading error', arguments);
      ret.reject();
    }

    function onReady(smart)  {
      if (smart) {
        ret.resolve(smart);
      } else {
        onError();
      }
    }

    FHIR.oauth2.ready(onReady, onError);
    return ret.promise();

  };

  window.display = function(smart) {
    $('#holder').show();
    $('#loading').hide();
    $('#token').html(smart);
  };

})(window);
