const Shape = require('../lib/shape');
const isCss3Color = require('is-css3-color');

describe('Shape class', () => {

    describe('constructor', () => {
        it('should throw an error if any input is empty', () => {
            expect(() => {
                new Shape({ logoName: '', textColor: 'blue', logoColor: 'red' });
            }).toThrow('Input cannot be empty');

            expect(() => {
                new Shape({ logoName: 'SQ', textColor: '', logoColor: 'red' });
            }).toThrow('Input cannot be empty');
        });

        it('should throw an error if logo text is more than 3 characters', () => {
            expect(() => {
                new Shape({ logoName: 'SQUARE', textColor: 'blue', logoColor: 'red' });
            }).toThrow('Logo text cannot be more than 3 characters');
        });

        it('should convert logoName to uppercase', () => {
            const shape = new Shape({ logoName: 'sq', textColor: 'blue', logoColor: 'red' });
            expect(shape.logoName).toBe('SQ');
        });
    });

    describe('color validation', () => {
        it('should throw an error if textColor is not a valid CSS3 color', () => {
            expect(() => {
                new Shape({ logoName: 'SQ', textColor: 'invalidColor', logoColor: 'red' });
            }).toThrow('Please enter a valid CSS color keyword or hex code for textColor');
        });

        it('should throw an error if logoColor is not a valid CSS3 color', () => {
            expect(() => {
                new Shape({ logoName: 'SQ', textColor: 'blue', logoColor: 'invalidColor' });
            }).toThrow('Please enter a valid CSS color keyword or hex code for logoColor');
        });
    });

    describe('render method', () => {
        it('should throw an error since render() should be implemented by child shapes', () => {
            const shape = new Shape({ logoName: 'SQ', textColor: 'blue', logoColor: 'red' });
            expect(() => {
                shape.render();
            }).toThrow('Child shapes must incorporate a render() method');
        });
    });

});