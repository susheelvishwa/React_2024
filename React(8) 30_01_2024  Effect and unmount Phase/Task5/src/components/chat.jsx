function createConnection(serverUrl, roomId) {
  // A real implementation would actually connect to the server
  const connect = () => {
    console.log(
      '✅ Connecting to "' + roomId + '" room at ' + serverUrl + "..."
    );
  };

  const disconnect = () => {
    console.log('❌ Disconnected from "' + roomId + '" room at ' + serverUrl);
  };

  return {
    connect,
    disconnect,
  };
}

export {createConnection}

