$(function() {
  var output = document.querySelectorAll('output')[0];
  
  $(document).on('input', 'input[type="range"]', function(e) {
        output.innerHTML = e.currentTarget.value;
  });
  
  $('input[type=range]').rangeslider({
    polyfill: false
  });
});