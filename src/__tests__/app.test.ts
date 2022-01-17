import { Shikimori } from '../shikimori';

test('My Greeter', async () => {
  expect((await Shikimori.getUser({ name: '!ja1z!ja1z!ja1z!ja1z' })).nickname).toBe('!ja1z!ja1z!ja1z!ja1z');
});
