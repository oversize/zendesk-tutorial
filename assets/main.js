$(function() {
  var client = ZAFClient.init();
  client.invoke('resize', { width: '100%', height: '400px' });
});
