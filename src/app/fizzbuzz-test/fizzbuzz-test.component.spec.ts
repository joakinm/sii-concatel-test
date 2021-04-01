
import { FizzbuzzTestComponent } from './fizzbuzz-test.component';

describe('FizzbuzzTestComponent', () => {
  let component: FizzbuzzTestComponent;

  beforeEach(() => {
    component = new FizzbuzzTestComponent();
    component.array = [];
  });

  it('returns "fizz" when the number is divisible by 3', () => {
    component.testFizzbuzz(3);
    const result = component.array.shift();

    expect(result).toBe("fizz");
  });

  it('returns "buzz" when the number is divisible by 5', () => {
    component.testFizzbuzz(5);
    const result = component.array.shift();
    expect(result).toBe("buzz");
  });
  it('returns "fizzbuzz" when the number is divisible by 3 and 5', () => {
    component.testFizzbuzz(15);
    const result = component.array.shift();
    expect(result).toBe("fizzbuzz");
  });

  it('returns a number when the number is not divisible by 3 or 5', () => {
    const num = 2;
    component.testFizzbuzz(num);
    const result = component.array.shift();
    expect(result).toBe(num);
  });

});
