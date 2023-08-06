const { Square } = require('../lib/square');

describe('Square class', () => {
    let squareInstance;

    beforeEach(() => {
        squareInstance = new Square({
            logoColor: 'red',
            textColor: 'blue',
            logoName: 'SQ',
            logoShape: 'square'
        });
    });

    it('should create an instance of Square', () => {
        expect(squareInstance).toBeInstanceOf(Square);
    });

    it('should render correct SVG for square', () => {
        const renderedSVG = squareInstance.render();
        const expectedSVG = `<rect width="100" height="100" fill="red" />
        <text x="50%" y="50%" text-anchor="middle" fill="blue"
          font-size="2.3rem" letter-spacing="2" dy=".3em" font-family="monospace">SQ</text>`;

        expect(renderedSVG).toBe(expectedSVG);
    });

});