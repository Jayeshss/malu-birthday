/*
 *  ═══════════════════════════════════════════════════════
 *  BIRTHDAY STORYBOOK — Scene Data
 *  30 landscape illustrations, one per memory.
 *  ═══════════════════════════════════════════════════════
 *
 *  Replace placeholder paths with your actual uploaded images.
 *  All images are LANDSCAPE orientation — never crop them.
 */


const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || '';
const storyAsset = (file: string) => `${BASE_PATH}/story/${file}`;

export interface StoryScene {
  id: number;
  image: string;
  title: string;
  text: string;
  date?: string;
}

export const storybookIntro = {
  heading: 'A Story I Never Want to Forget',
  subheading: 'Some memories, just for you.',
};

export const scenes: StoryScene[] = [
  {
    id: 1,
    image: storyAsset('story-01.jpg'),
    title: 'The Place Where It All Began',
    text: 'An ordinary Sunday at the tuition centre. Students were gathered for an exhibition project. Nothing about this day suggested that something quietly extraordinary was about to happen.',
    date: '25 February 2018',
  },
  {
    id: 2,
    image: storyAsset('story-02.jpg'),
    title: 'She Walked In',
    text: 'She came for the exhibition project. A blue churidar with a white shawl. Something about the way she carried herself made the room feel different — not louder, not quieter, just warmer.',
    date: '25 February 2018',
  },
  {
    id: 3,
    image: storyAsset('story-03.jpg'),
    title: 'A Blue Shirt and a Black Mundu',
    text: 'I wore a blue shirt and a black mundu. Nothing special — or so I thought. I didn\'t know that the colour of her churidar and the colour of my shirt would one day feel like the first quiet echo of something meant to be.',
    date: '25 February 2018',
  },
  {
    id: 4,
    image: storyAsset('story-04.jpg'),
    title: 'A Question About Vishnu',
    text: 'Our first conversation began with a simple question about her cousin. That\'s all it took — one ordinary question, and a bridge appeared between two people who had been strangers just seconds before.',
    date: '25 February 2018',
  },
  {
    id: 5,
    image: storyAsset('story-05.jpg'),
    title: 'The Fourth Floor',
    text: 'There was something about the fourth floor. Maybe it was the way the light came through the windows, or the fact that the world below seemed just far enough away. Conversations stretched longer. Silences became comfortable.',
    date: 'March 2018',
  },
  {
    id: 6,
    image: storyAsset('story-06.jpg'),
    title: 'Science Exhibition Days',
    text: 'The science exhibition gave us a reason to be near each other without needing one. We worked on projects, discussed ideas, disagreed about small things, and agreed about bigger ones.',
    date: '2018',
  },
  {
    id: 7,
    image: storyAsset('story-07.jpg'),
    title: 'Evenings That Lingered',
    text: 'Evening meetings became something I looked forward to in a way I couldn\'t fully explain. It wasn\'t about the studies. It was about that moment when the corridor emptied and we\'d walk a little slower, talk a little longer.',
    date: '2018',
  },
  {
    id: 8,
    image: storyAsset('story-08.jpg'),
    title: 'Somewhere Between Friendship & Something More',
    text: 'The days that followed carried a quiet question neither of us dared to ask aloud. Friendship was building scaffolding for something taller — something we couldn\'t see the top of yet.',
    date: '2018',
  },
  {
    id: 9,
    image: storyAsset('story-09.jpg'),
    title: 'Finding the Words',
    text: 'There comes a moment when keeping something inside feels heavier than the risk of saying it. I don\'t remember the exact words I used. What I remember is the courage it took, and her — listening, not running, not pulling away.',
    date: '2018',
  },
  {
    id: 10,
    image: storyAsset('story-10.jpg'),
    title: 'The Beginning of Us',
    text: 'It didn\'t begin with fireworks. It began with a quiet understanding. "You and me" had been two separate paths. Now, almost without noticing, they had merged into one.',
    date: '2018',
  },
  {
    id: 11,
    image: storyAsset('11-difficult-times.jpg'),
    title: 'Circumstances We Didn\'t Choose',
    text: 'Difficult family circumstances arrived like weather we didn\'t forecast. There were days when the weight of everything made it hard to breathe, harder to hope. But even on the heaviest days, a small stubborn light refused to go out.',
    date: '2018–2019',
  },
  {
    id: 12,
    image: storyAsset('12-staying-connected.jpg'),
    title: 'Secretly Finding Each Other',
    text: 'When the world tried to create distance, we found smaller, quieter ways to stay close. A message sent when no one was watching. A call made from a place no one would think to check.',
    date: '2018–2019',
  },
  {
    id: 13,
    image: storyAsset('13-letters.jpg'),
    title: 'Letters & Phone Calls',
    text: 'There were letters — real ones, written by hand on paper that would be folded and hidden and read again and again until the creases became part of the words. These were our bridges when the road was blocked.',
    date: '2019',
  },
  {
    id: 14,
    image: storyAsset('14-long-distance.jpg'),
    title: 'The Distance Between Us',
    text: 'Long distance is its own kind of relationship — one that exists in countdowns and calendars. Every kilometre was a reminder of what we were holding at arm\'s length, and every journey to close that distance was a small proof.',
    date: '2019–2020',
  },
  {
    id: 15,
    image: storyAsset('15-first-car-meeting.jpg'),
    title: 'Our First Car Meeting',
    text: 'The drive itself felt different — like the distance between us had become something I could actually conquer. When I finally saw her, the journey dissolved. Only the arrival remained.',
    date: '2020',
  },
  {
    id: 16,
    image: storyAsset('16-meaningful-trips.jpg'),
    title: 'Trips That Meant More Than Travel',
    text: 'Some trips are about the destination. Ours were about the fact that we were going together. Every road was a conversation. Every stop was a memory being made before we even knew it.',
    date: '2020–2021',
  },
  {
    id: 17,
    image: storyAsset('17-moonlight.jpg'),
    title: 'Moonlight Conversations',
    text: 'There were nights we talked under the moon — not about anything in particular, but about everything that mattered. The moon was our witness, the silence was our language. The most intimate moments are the quietest.',
    date: '2020–2022',
  },
  {
    id: 18,
    image: storyAsset('18-wagamon.jpg'),
    title: 'Wagamon',
    text: 'The hills, the mist, the way the world felt like it had been made for exactly this kind of moment — two people who had been through so much, standing somewhere beautiful and realising that they had earned this.',
    date: '2022',
  },
  {
    id: 19,
    image: storyAsset('19-our-world.jpg'),
    title: 'A World That Was Only Ours',
    text: 'We built a little world together — not from bricks and walls, but from shared silences and understood glances, from the way she knew what I was thinking before I said it. No one could take it away.',
    date: '2020–2023',
  },
  {
    id: 20,
    image: storyAsset('20-growing.jpg'),
    title: 'Growing Older Together',
    text: 'There is a kind of love that doesn\'t stay the same — not because it fades, but because it deepens. We grew older together, and in growing, we changed. But the change was toward something richer.',
    date: '2021–2024',
  },
  {
    id: 21,
    image: storyAsset('21-doctor.jpg'),
    title: 'Her Journey Toward Becoming a Doctor',
    text: 'Watching her pursue her dream of becoming a doctor was one of the proudest experiences of my life. The late nights, the exams, the exhaustion — she carried all of it with a strength that humbled me.',
    date: '2022–2025',
  },
  {
    id: 22,
    image: storyAsset('22-present.jpg'),
    title: 'The Present Day',
    text: 'And here we are — not at the end of a story, but somewhere in its middle, which is the most beautiful place to be. The beginning was uncertain. The middle has been everything.',
    date: '2024–2025',
  },
  {
    id: 23,
    image: storyAsset('23-here-we-are.jpg'),
    title: 'And Here We Are…',
    text: 'Some stories don\'t need an ending — because they were never meant to end. They just keep unfolding, chapter after chapter, like a road that reveals new scenery with every turn.',
    date: 'Now',
  },
  {
    id: 24,
    image: storyAsset('24-memory-1.jpg'),
    title: 'The Way She Smiles',
    text: 'There is a particular way she smiles — not for cameras, not for anyone else — just for the moment. It arrives without warning and changes the temperature of the entire room.',
  },
  {
    id: 25,
    image: storyAsset('25-memory-2.jpg'),
    title: 'Small Things That Became Everything',
    text: 'It wasn\'t the big moments that defined us. It was the small ones — the shared jokes nobody else would understand, the way she says my name, the silence that never needed filling.',
  },
  {
    id: 26,
    image: storyAsset('26-memory-3.jpg'),
    title: 'Through Every Season',
    text: 'We have walked through seasons together — not just the ones marked by weather, but the ones measured in growing, learning, struggling, and choosing each other again and again.',
  },
  {
    id: 27,
    image: storyAsset('27-memory-4.jpg'),
    title: 'The Quiet Certainty',
    text: 'Beyond the excitement, beyond the difficult days, there is a quiet certainty that lives underneath everything — the simple, unshakeable knowledge that this is right. That she is right.',
  },
  {
    id: 28,
    image: storyAsset('28-memory-5.jpg'),
    title: 'What Distance Taught Us',
    text: 'Distance didn\'t weaken what we had — it revealed its strength. Every reunion was proof. Every goodbye was a promise. And every day in between was a quiet act of holding on.',
  },
  {
    id: 29,
    image: storyAsset('29-memory-6.jpg'),
    title: 'Memories That Never Fade',
    text: 'Some memories don\'t age. They stay exactly as they were — vivid, warm, alive. We don\'t revisit them because they\'re gone. We revisit them because they never left.',
  },
  {
    id: 30,
    image: storyAsset('30-memory-7.jpg'),
    title: 'Still Being Written',
    text: 'The most beautiful thing about our story is that it isn\'t finished. Every day adds a new page. Every shared silence is a new paragraph. And the best chapters might still be ahead of us.',
  },
];

export const birthdayWish = {
  image: storyAsset('final-malu.jpg'),
  heading: 'Happy Birthday, Maluti 🤍',
  paragraphs: [
    'You are one of the most special people in my life.',
    'This little website is only a small way of showing how much these memories mean to me.',
    'On your birthday, I wish you happiness, peace, success, and all the beautiful things you truly deserve.',
    'May your life become everything you dream it to be.',
    'Stay happy, stay strong, and stay the beautiful person you are.',
  ],
  signoff: 'With love,\nKoche',
  closingLine: 'Once again, Happy Birthday, Maluti.',
};
