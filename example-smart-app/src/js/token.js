(function(window){
  window.extractData = function() {
    var ret = $.Deferred();

    function onError() {
      console.log('Loading error', arguments);
      ret.reject();
    }

    function onReady(smart)  {
      if (smart) {
        ret.resolve(FhirClient);
      } else {
        onError();
      }
    }

    FHIR.oauth2.ready(onReady, onError);
    return ret.promise();

  };

  window.drawVisualization = function(p) {
    $('#holder').show();
    $('#loading').hide();
    $('#token').html(FhirClient);
  };

})(window);
