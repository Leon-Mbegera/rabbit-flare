import Model from '../src/Model'

describe('Tests sound properties', () => {
  
  const mockModel = new (Model)();
  test('music starts in a bit after game starts', () => {
    expect(mockModel.bgMusicPlaying).toBeFalsy();
  });

  test('enable/disable to listen to music', () => {
    expect(mockModel.bgMusicPlaying).toBeFalsy();
  });

  test('enable/disable to have play sound', () => {
    expect(mockModel.bgMusicPlaying).toBeFalsy();
  });

  test('Turning on the background music', () => {
    mockModel.bgMusicPlaying = true;
    expect(mockModel.bgMusicPlaying).not.toBe(false);
  });

  test('Changing the settings on game sound', () => {
    mockModel.musicPlaying = true;
    expect(mockModel.musicPlaying).not.toBe(false);
  });

  test('Changing the settings on game music', () => {
    mockModel.soundPlaying = true;
    expect(mockModel.soundPlaying).not.toBe(false);
  });

})
