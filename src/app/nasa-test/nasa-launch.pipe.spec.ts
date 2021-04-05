import { NasaLaunchPipe } from './nasa-launch.pipe';

describe('NasaLaunchPipe', () => {
  it('returns count and "seconds to launch"', () => {
    const value = 3;
    const pipe = new NasaLaunchPipe();
    const result = pipe.transform(value);
    expect(result).toBe(value + ' seconds to launch...');
  });

  it('returns "Lauch!" if value is 0', () => {
    const value = 0;
    const pipe = new NasaLaunchPipe();
    const result = pipe.transform(value);
    expect(result).toBe('Launch!!');
  });
});
