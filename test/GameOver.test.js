import { fetchScore } from '../src/Scenes/GameOver';

const result = fetchScore();

describe('successful get request made to endpoint', () => {
  it('should return each player name and score', async () => expect(Array.isArray(result)).toBeTruthy);
});

describe('Tests the object response', () => {
  it('returns an object with string and number properties', () => {
    if (result.length) {
      expect(typeof result.player).toEqual('object');
      expect(typeof result.player.user).toEqual('string');
      expect(typeof result.player.score).toEqual('number');
    }
  });
});

describe('Tests for truthiness', () => {
  if (result.length) {
    it('returns a players properties as truthy', () => expect(result.player.user).toBeTruthy);

    it('returns a players properties as truthy', () => expect(result.player.score).toBeTruthy);
  }
});
