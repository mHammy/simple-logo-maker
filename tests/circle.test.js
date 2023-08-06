const { Circle } = require('../lib/circle');

describe('Circle class', () => {
    let circleInstance;

    beforeEach(() => {
        circleInstance = new Circle({
            logoColor: 'red',
            textColor: 'blue',
            logoName: 'TST', 
            logoShape: 'circle'
        });
    });

    it('should create an instance of Circle', () => {
        expect(circleInstance).toBeInstanceOf(Circle);
    });

    it('should render correct SVG for circle', () => {
        const renderedSVG = circleInstance.render();
        const expectedSVG = `<circle cx="50" cy="50" r="50" fill="red" />
        <text x="50%" y="50%" text-anchor="middle" fill="blue"
          font-size="2.3rem" letter-spacing="2" dy=".3em" font-family="monospace">TST</text>`;

        expect(renderedSVG).toBe(expectedSVG);
    });

});

