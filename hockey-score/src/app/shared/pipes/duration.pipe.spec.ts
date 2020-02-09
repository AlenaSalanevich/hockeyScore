import { DurationPipe } from './duration.pipe';

describe('DuarationPipe', () => {
  it('create an instance', () => {
    const pipe = new DurationPipe();
    expect(pipe).toBeTruthy();
  });
});

describe('DuarationPipe', () => {
  it('create an instance', () => {
    const pipe = new DurationPipe(); 
    const result = pipe.transform(70);
    expect(result).toBe("1 h 10 min");
  });
});
describe('DuarationPipe', () => {
  it('create an instance', () => {
    const pipe = new DurationPipe(); 
    const result = pipe.transform(60);
    expect(result).toBe("1 h 00 min");
  });
});
describe('DuarationPipe', () => {
  it('create an instance', () => {
    const pipe = new DurationPipe(); 
    const result = pipe.transform(120);
    expect(result).toBe("2 h 00 min");
  });
});

