const { Triangle } = require('../lib/triangle');

describe('Triangle class', () => {
    let triangleInstance;

    beforeEach(() => {
        triangleInstance = new Triangle({
            logoColor: 'red',
            textColor: 'blue',
            logoName: 'TRI',
            logoShape: 'triangle'
        });
    });

    it('should create an instance of Triangle', () => {
        expect(triangleInstance).toBeInstanceOf(Triangle);
    });

    it('should render correct SVG for triangle', () => {
        const renderedSVG = triangleInstance.render();
        const expectedSVG = `<polygon points="50,0 0,100 100,100" fill="red" />
      <text x="50%" y="75"
        text-anchor="middle" fill="blue"
        font-size="17px" letter-spacing="2" dy=".3em" font-family="monospace">TRI</text>`;

        expect(renderedSVG).toBe(expectedSVG);
    });

});