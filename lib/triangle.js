const isCss3Color = require("is-css3-color");
const Shape = require("./shape");

class Triangle extends Shape {
  constructor(data) {
    const { logoName, textColor, logoColor, logoShape } = data;
    super({ logoName, textColor, logoColor, logoShape }); 
  }

  render() {
    const size = 100;
    const fontSize = size * 0.17;
    const textYPosition = size * 0.75;

    return `<polygon points="50,0 0,100 100,100" fill="${this.logoColor}" />
      <text x="50%" y="${textYPosition}"
        text-anchor="middle" fill="${this.textColor}"
        font-size="${fontSize}px" letter-spacing="2" dy=".3em" font-family="monospace">${this.logoName}</text>`;
  }
}

module.exports = { Triangle };