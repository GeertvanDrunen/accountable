/**
 * @format
 */

import 'react-native';
import {shuffleArray} from '../src/helpers';

const {fetchPosts} = require('../src/api');

test('the fetchPosts function returns an array', async () => {
  await expect(fetchPosts()).resolves.toEqual(expect.any(Array));
});

test('the shuffleArray function returns a new array', async () => {
  await expect(shuffleArray(['a', 'b', 'c'])).toEqual(expect.any(Array));
});

test('the shuffleArray function returns false with an error', async () => {
  await expect(shuffleArray('test')).toBe(false);
});
