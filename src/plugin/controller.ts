figma.showUI(__html__, {
  width: 400,
  height:700,
});


figma.ui.onmessage = async (msg) => {
  if (msg) {
    if (msg.type === 'Save') {
      await figma.clientStorage.setAsync('figma', msg.data)

       figma.ui.postMessage({
         type: 'Saved',
         data: msg.data
       })
    }

     if (msg.type === 'Retrieve') {
       const figmadata = await figma.clientStorage.getAsync('figma')


     figma.createComponent(figmadata)


       figma.ui.postMessage({
         type: 'Retrieved',
         data: figmadata
       })
     }

  }



};
