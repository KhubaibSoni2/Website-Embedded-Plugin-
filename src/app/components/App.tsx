import React from 'react';
import logo from '../assets/logo.svg';
import '../styles/ui.css';

function App() {



  const Retrieve = () => {
    parent.postMessage({ pluginMessage: { type: 'Retrieve'  } }, '*');
  }


  React.useEffect(() => {

    window.onmessage = (event) => {
      const { type, message , data } = event.data.pluginMessage;
      if (type === 'create-rectangles') {
        console.log(`Figma Says: ${message}`);
      }
      if (type === "Copy") {
        parent.postMessage({ pluginMessage: { type: 'Save', data } }, '*')
      }

      if (type === 'Saved') {
        console.log("Saved",data)
        Retrieve()
      }

      if (type === 'Retrieved') {
        console.log('Retrieved',data)
      }
    };



  }, []);






  return (
    <div style={{ height:"100%" , width:'100%'}}>
   <iframe src='http://localhost:3000/'  style={{ height:"100%" , width:'100%',border:'none'}} id='layyyout-iframe' />
    </div>
  );
}

export default App;
