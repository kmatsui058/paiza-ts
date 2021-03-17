import main from './answer'
import testdata from './testdata.json'
describe('test', () => {
    const params = testdata
    params.forEach((data, i) => {
        const input = data.input
        const output = data.output
      it(`Test params[${i}]`, () => {
        const inputArray = input.split('\n')
        inputArray.pop()
        expect(main(inputArray, true) + '\n').toBe(output);
      });
    });
  });