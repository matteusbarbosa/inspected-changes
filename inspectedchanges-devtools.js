function handleShown() {
    console.log("panel is being shown");
    }
    
    function handleHidden() {
    console.log("panel is being hidden");
    }
    
    browser.devtools.panels.create(
    "InspectedChanges",           // title
    "icons/star.png",           // icon
    "inspectedchanges-panel.html"          // content
    ).then((newPanel) => {
    newPanel.onShown.addListener(handleShown);
    newPanel.onHidden.addListener(handleHidden);
    });
      
    