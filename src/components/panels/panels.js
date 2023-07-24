export default class Panel {
  constructor(panelButtonSelector, panelContentSelector) {
    this.panelButtonSelector = panelButtonSelector;
    this.panelContentSelector = panelContentSelector;

    this.panelButtons = document.querySelectorAll(`[${this.panelButtonSelector}]`);

    if (this.panelButtons.length < 1 ) {
      return;
    }

    this.addEventHandlers();
  }

  addEventHandlers = () => {
    this.panelButtons.forEach(button => {
      button.addEventListener("click", this.togglePanel)

    })
  }

  getCorrespondingPanel = (button) => {
    const buttonPanelData = button.getAttribute(this.panelButtonSelector);
    const panelContent = document.querySelectorAll(`[${this.panelContentSelector}="${buttonPanelData}"]`);
    return panelContent;
  }

  togglePanel = () => {
   console.log("toggle panel")
   // Hide buttons 

   // show panel
  }

  closePanel = () => {
    // hide panel

    // show buttons

  }

}