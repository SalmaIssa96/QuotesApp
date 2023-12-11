const quotesList = [
  {
    quote: '“Be yourself; everyone else is already taken.”',
    auther: '― Oscar Wilde',
  },
  {
    quote: `“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”`,
    auther: '― Marilyn Monroe',
  },
  {
    quote: `“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”
    `,
    auther: '― Albert Einstein',
  },
  {
    quote: `“So many books, so little time.”`,
    auther: '― Frank Zappa',
  },
  {
    quote: `“A room without books is like a body without a soul.”    `,
    auther: '― Marcus Tullius Cicero',
  },
  {
    quote: `“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”`,
    auther: '― Bernard M. Baruch',
  },
  {
    quote: `“You've gotta dance like there's nobody watching, Love like you'll never be hurt,Sing like there's nobody listening, And live like it's heaven on earth.”`,
    auther: '― William W. Purkey',
  },
  {
    quote: `“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”`,
    auther: '― Dr. Seuss',
  },
  {
    quote: `“You only live once, but if you do it right, once is enough.”`,
    auther: '― Mae West',
  },
  {
    quote: `“Be the change that you wish to see in the world.”`,
    auther: '― Mahatma Gandh',
  },
  {
    quote: `“In three words I can sum up everything I've learned about life: it goes on.”`,
    auther: '― Robert Frost',
  },
  {
    quote: `“Don't walk in front of me… I may not follow Don't walk behind me… I may not lead Walk beside me… just be my friend”`,
    auther: '― Albert Camus',
  },
  {
    quote: `“If you tell the truth, you don't have to remember anything.”    `,
    auther: '― Mark Twain',
  },
  {
    quote: `“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”`,
    auther: '― Maya Angelou',
  },
  {
    quote: `“A friend is someone who knows all about you and still loves you.”`,
    auther: '― Elbert Hubbard',
  },
  {
    quote: `“To live is the rarest thing in the world. Most people exist, that is all.”`,
    auther: '― Oscar Wilde',
  },
  {
    quote: `“Always forgive your enemies; nothing annoys them so much.”    `,
    auther: '― Oscar Wilde',
  },
  {
    quote: `“Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.”    `,
    auther: '― Martin Luther King ',
  },
  {
    quote: `“Live as if you were to die tomorrow. Learn as if you were to live forever.”`,
    auther: '― Mahatma Gandhi',
  },
  {
    quote: `“We accept the love we think we deserve.”`,
    auther: '― Stephen Chbosky, The Perks of Being a Wallflower    ',
  },
  {
    quote: `“Without music, life would be a mistake.” `,
    auther: '― Friedrich Nietzsche, Twilight of the Idols',
  },
  {
    quote: `“I am so clever that sometimes I don't understand a single word of what I am saying.”`,
    auther: '― Oscar Wilde',
  },
  {
    quote: `
    “To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”`,
    auther: '― Ralph Waldo Emerson',
  },
  {
    quote: `“Insanity is doing the same thing, over and over again, but expecting different results.”`,
    auther: '― Narcotics Anonymous',
  },
  {
    quote: `“It is better to be hated for what you are than to be loved for what you are not.”`,
    auther: '― Andre Gide, Autumn Leaves',
  },
  {
    quote: `“There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.”`,
    auther: 'Albert Einstein',
  },
  {
    quote: `“It does not do to dwell on dreams and forget to live.”`,
    auther: '― J.K. Rowling',
  },
  {
    quote: `“Good friends, good books, and a sleepy conscience: this is the ideal life.”`,
    auther: '― Mark Twain',
  },
  {
    quote: `“As he read, I fell in love the way you fall asleep: slowly, and then all at once.”`,
    auther: '― John Green',
  },
  {
    quote: `“We are all in the gutter, but some of us are looking at the stars.”`,
    auther: '― Oscar Wilde',
  },
  {
    quote: `“It is better to remain silent at the risk of being thought a fool, than to talk and remove all doubt of it.”`,
    auther: '― Maurice Switzer',
  },
  {
    quote: `“Life is what happens to us while we are making other plans.”    `,
    auther: '― Allen Saunders',
  },
  {
    quote: `“Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.”`,
    auther: '― Bill Keane',
  },
  {
    quote: `“I have not failed. I've just found 10,000 ways that won't work.”`,
    auther: '― Thomas A. Edison',
  },
  {
    quote: `“It is not a lack of love, but a lack of friendship that makes unhappy marriages.”`,
    auther: '― Friedrich Nietzsche',
  },
  {
    quote: `“If you don't stand for something you will fall for anything.”`,
    auther: '― Gordon A. Eadie',
  },
  {
    quote: `“I am enough of an artist to draw freely upon my imagination. Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.”`,
    auther: 'Albert Einstein',
  },
  {
    quote: `“Go to heaven for the climate and hell for the company.”    `,
    auther: '― Benjamin Franklin Wade',
  },
  {
    quote: `"If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough."`,
    auther: '-Oprah Winfrey',
  },
  {
    quote: `"The future belongs to those who believe in the beauty of their dreams."`,
    auther: '-Eleanor Roosevelt',
  },
  {
    quote: `" The greatest glory in living lies not in never falling, but in rising every time we fall`,
    auther: '- Nelson Mandela',
  },
  {
    quote: `"Do one thing every day that scares you. "`,
    auther: ' -Eleanor Roosevelt',
  },
  {
    quote: `"Well done is better than well said. "  `,
    auther: ' -Benjamin Franklin ',
  },
  {
    quote: `"Spread love everywhere you go. Let no one ever come to you without leaving happier." `,
    auther: '-Mother Teresa ',
  },
  {
    quote: `"Be yourself; everyone else is already taken."`,
    auther: ' -Oscar Wilde',
  },
  {
    quote: `"In this life we cannot do great things. We can only do small things with great love."`,
    auther: ' -Mother Teresa',
  },
  {
    quote: `"Many of life's failures are people who did not realize how close they were to success when they gave up. "`,
    auther: '-Thomas A. Edison',
  },
  {
    quote: `"You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose."`,
    auther: '-Dr. Seuss',
  },
  ,
  {
    quote: `"Success is not final; failure is not fatal: It is the courage to continue that counts."`,
    auther: '- Winston S. Churchill',
  },
];
