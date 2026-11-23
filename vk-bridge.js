(function() {
  var isWeb = typeof window !== 'undefined';
  function sendInit() {
    if (!isWeb || !window.parent) return;
    var msg1 = {
      handler: 'VKWebAppInit',
      params: {},
      type: 'vk-connect',
      webFrameId: window.name,
      connectVersion: '1.2.0'
    };
    window.parent.postMessage(msg1, '*');
    window.parent.postMessage(JSON.stringify(msg1), '*');
  }
  window.vkBridge = {
    send: function(method, params) {
      sendInit();
      return Promise.resolve({ result: true });
    }
  };
  sendInit();
  setInterval(sendInit, 500);
})();
