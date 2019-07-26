import {HttpsProxyAgent} from 'https-proxy-agent';

var proxyConfig = [{
  context: '/GetCardListExtract',
  target: 'http://test-cardservices.danskenet.net/KKCF/CardDetails',
  secure: false
}];

function setupForCorporateProxy(proxyConfig) {
  var proxyServer = process.env.http_proxy || process.env.HTTP_PROXY;
  if (proxyServer) {
    var agent = new HttpsProxyAgent(proxyServer);
    console.log('Using corporate proxy server: ' + proxyServer);
    proxyConfig.forEach(function(entry) {
      entry.agent = agent;
    });
  }
  return proxyConfig;
}

export default setupForCorporateProxy(proxyConfig);