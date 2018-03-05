export default function getBaseUrl(){
  // const inDev = window.location.hostname === 'localhost';
  // return inDev?'http://localhost:3001/':'/';
  return getQueryStringParameterByName('useMockApi')?'http://localhost:3001/':'https://dry-temple-23856.herokuapp.com/';
}

function getQueryStringParameterByName(name) {
  name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
      results = regex.exec(location.search);
  return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
