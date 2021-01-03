import main from './answer'
import testdata from './testdata.json'
describe('test', () => {
    const params: TestData[] = testdata
    params.forEach((data, i) => {
        const input = data.input
        const output = data.output
      it(`Test params[${i}]`, () => {
        expect(main(input.split('\n'), true)).toBe(output);
      });
    });
  });