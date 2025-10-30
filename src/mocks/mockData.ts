import type { MockData } from '../types/marvel';

export const apiMockData: MockData = {
  characters: [
    {
      id: 10009610,
      name: 'Spider-Man',
      description:
        'Bitten by a radioactive spider, high school student Peter Parker gained the speed, strength and powers of a spider.',
      thumbnail: {
        path: 'http://i.annihil.us/u/prod/marvel/i/mg/3/50/526548a343e4b',
        extension: 'jpg',
      },
    },
    {
      id: 1009368,
      name: 'Iron Man',
      description:
        'Inventor Tony Stark dons his powerful armor to become Iron Man.',
      thumbnail: {
        path: 'https://i.annihil.us/u/prod/marvel/i/mg/9/c0/527bb7b37ff55',
        extension: 'jpg',
      },
    },
    {
      id: 1009220,
      name: 'Captain America',
      description:
        'Steve Rogers, the First Avenger, stands as the symbol of freedom and courage.',
      thumbnail: {
        path: 'http://i.annihil.us/u/prod/marvel/i/mg/3/50/537ba56d31087',
        extension: 'jpg',
      },
    },
    {
      id: 1009664,
      name: 'Thor',
      description:
        'The Asgardian God of Thunder, wielder of the enchanted hammer Mjolnir.',
      thumbnail: {
        path: 'https://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available',
        extension: 'jpg',
      },
    },
    {
      id: 1009351,
      name: 'Hulk',
      description:
        "Dr. Bruce Banner lives a life caught between the soft-spoken scientist he's always been and the uncontrollable green monster powered by his rage.",
      thumbnail: {
        path: 'http://i.annihil.us/u/prod/marvel/i/mg/5/a0/538615ca33ab0',
        extension: 'jpg',
      },
    },
  ],

  comics: [
    {
      id: 1,
      title: 'Amazing Spider-Man #1',
      description: 'The first appearance of Spider-Man',
      thumbnail: {
        path: 'http://i.annihil.us/u/prod/marvel/i/mg/3/40/52696abc610c9',
        extension: 'jpg',
      },
    },
    {
      id: 82967,
      title: 'Marvel Previews (2017)',
      description: 'A special sneak peek at upcoming Marvel titles.',
      thumbnail: {
        path: 'https://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16',
        extension: 'jpg',
      },
    },
    {
      id: 82970,
      title: 'Iron Man (2020) #1',
      description:
        'Tony Stark faces new challenges as Iron Man in this fresh reboot.',
      thumbnail: {
        path: 'https://i.annihil.us/u/prod/marvel/i/mg/6/40/60b65f092c0db',
        extension: 'jpg',
      },
    },
    {
      id: 82971,
      title: 'Thor (2020) #2',
      description: 'Thor faces the aftermath of the War of the Realms.',
      thumbnail: {
        path: 'https://i.annihil.us/u/prod/marvel/i/mg/c/03/5e3e7edbdf3a1',
        extension: 'jpg',
      },
    },
  ],
};
