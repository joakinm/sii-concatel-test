
import { FizzbuzzTestComponent } from './fizzbuzz-test.component';

describe('FizzbuzzTestComponent', () => {
  let component: FizzbuzzTestComponent;

  beforeEach(() => {
    component = new FizzbuzzTestComponent();
  });

  it('returns "fizz" when the number is divisible by 3', () => {
    component.array = [];
    component.testFizzbuzz(3);
    
    expect(component.array.shift()).toBe("fizz");
  });

  it('returns "buzz" when the number is divisible by 5', () => {
    component.array = [];
    component.testFizzbuzz(5);
    
    expect(component.array.shift()).toBe("buzz");
  });
  it('returns "fizzbuzz" when the number is divisible by 3 and 5', () => {
    component.array = [];
    component.testFizzbuzz(15);
    
    expect(component.array.shift()).toBe("fizzbuzz");
  });

  it('returns a number when the number is not divisible by 3 or 5', () => {
    const num = 2;
    component.array = [];
    component.testFizzbuzz(num);
    
    expect(component.array.shift()).toBe(num);
  });

});
