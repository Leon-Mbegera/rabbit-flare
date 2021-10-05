/**
 * @jest-environment jsdom
 */

import BootScene from '../src/Scenes/BootScene'
require('jest-canvas-mock');

jest.mock('../src/Scenes/BootScene');

beforeEach(() => {
  BootScene.mockClear();
});

test('Instance of Boot Scene', () => {
  expect(new BootScene()).toBeInstanceOf(BootScene);
});