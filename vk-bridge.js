window.vkBridge = {
  send: function(method, params) {
    return new Promise(function(resolve) {
      window.parent.postMessage({
        handler: method,
        params: params || {},
        type: 'vk-connect',
        webFrameId: window.name
      }, '*');
      resolve({ result: true });
    });
  }
};
