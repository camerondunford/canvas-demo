import './App.css';
import { NetworkCanvas } from "react-network-canvas";
import { v1 as generateUuid } from "uuid";

const onClickCanvas = (_event, position, graphManager) => {
  // Create node at click position
  const node = graphManager.createNode({
    position,
    inputPorts: [{ id: generateUuid() }],
    outputPorts: [{ id: generateUuid() }],
  });

  // Select the newly created node
  graphManager.selectedNodeIds = [node.id];
};

const onKeyPress = (_event, key, graphManager) => {
  if (key === "Backspace" && graphManager.selectedNodeIds.length > 0) {
    // Delete selected nodes
    graphManager.removeNodesByIds(graphManager.selectedNodeIds);
  }
};


function App() {
  return (
    <div className="App">
      <h1>Canvas Demo</h1>
      <NetworkCanvas
        onClickCanvas={onClickCanvas}
        onKeyPress={onKeyPress}
      />
    </div>
  );
}

export default App;
