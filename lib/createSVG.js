const createSVG = (shape) => {
    return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${shape.render()}</svg>`;
  };
  
  module.exports = { createSVG };