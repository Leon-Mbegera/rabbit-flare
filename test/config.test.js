import config from '../src/Config/config';

describe('Tests configuration settings for the game', () => {
  it('sets game screen width', () => {
    expect(config.width).toBe(1350);
  });

  it('sets game screen height', () => {
    expect(config.height).toBe(600);
  });

  it('sets gravity on player', () => {
    expect(config.physics.arcade.gravity.y).toEqual(200);
  });

  it('sets dom container creation', () => {
    expect(config.dom.createContainer).toBeTruthy();
  });

  it('sets player property to receive string', () => {
    expect(config.player).toContain('');
  });
});