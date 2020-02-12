import { Team } from './team';

describe('Team', () => {

  let sut: Team = new Team(1, '', [], 123, '', '');
  it('should create an instance', () => {
    expect(new Team(1, '', [], 123, '', '')).toBeTruthy();
  });
});
