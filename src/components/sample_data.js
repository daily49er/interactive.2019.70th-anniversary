import * as R from 'ramda';

const IPSUM = `Sed leo elit, pellentesque sit amet congue quis, ornare nec lorem. Phasellus tincidunt rhoncus magna,
eget elementum odio rutrum fermentum. Ut a justo lacus. Maecenas blandit molestie felis ac viverra. Pellentesque
sagittis ligula neque, sit amet feugiat massa tempor sed. Duis id bibendum ex, pulvinar tincidunt orci. Curabitur
id sem urna. Maecenas sed elit malesuada, cursus ligula ut, vestibulum lorem. Suspendisse vitae ultrices libero.
Mauris maximus, ligula vitae tincidunt scelerisque, ipsum magna euismod massa, eu vulputate enim est tempus sem.
Maecenas id nibh vitae ante volutpat facilisis nec eget velit. Proin et ligula feugiat, auctor tellus sit amet,
accumsan neque. Quisque porttitor lectus quis elit fermentum, a facilisis est suscipit. Integer consectetur dapibus
nisi, ut lacinia enim vulputate vitae. Curabitur id diam mauris. Duis dictum, dolor at porttitor aliquet, justo libero
mattis magna, eu pellentesque augue mauris eget erat. Pellentesque lacinia velit nec ullamcorper mollis. Pellentesque
lacus tortor, maximus eget tincidunt non, luctus scelerisque odio. Suspendisse potenti. Etiam vel augue blandit, auctor
sem sit amet, imperdiet dolor. Ut a quam laoreet, feugiat orci sed, feugiat nulla. Nulla gravida nisi eu ex egestas
dapibus.`;

const CITIES = [
  {
    title: 'Berlin, Germany',
    imageUrl: 'img/football.png',
  },
  {
    title: 'Chicago, Illinois',
    imageUrl: 'img/football.png',
  },
  {
    title: 'Cairo, Egypt',
    imageUrl: 'img/football.png',
  },
  {
    title: 'London, England',
    imageUrl: 'img/football.png',
  },
  {
    title: 'New York, New York',
    imageUrl: 'img/football.png',
  },
  {
    title: 'Paris, France',
    imageUrl: 'img/football.png',
  },
  {
    title: 'Rome, Italy',
    imageUrl: 'img/football.png',
  },
  {
    title: 'Seoul, South Korea',
    imageUrl: 'img/football.png',
  },
  {
    title: 'Madrid, Spain',
    imageUrl: 'img/football.png',
  },
  {
    title: 'Tokyo, Japan',
    imageUrl: 'img/football.png',
  },
];

const addDays = (date, days) => {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
};

export function getSampleData() {
  const MIN_TEXT_LENGTH = 50;
  return R.addIndex(R.map)((location, index) => {
    return R.merge(
      {
        date: addDays(new Date('2013-12-08'), index * 8),
        text: R.slice(0, Math.random() * (R.length(IPSUM) - MIN_TEXT_LENGTH) + MIN_TEXT_LENGTH, IPSUM),
        buttonText: 'Read More',
        onClick: () => {
          const city = R.head(R.split(', ', location.title));
          window.open(`https://wikipedia.org/wiki/${city}`);
        },
        extras: {
          foo: '#Travel',
        },
      },
      location
    );
  }, CITIES);
}