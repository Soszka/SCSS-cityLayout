const dataSource = {

  previewCarouselItems : [
    { name: 'Main Center', image: 'https://i.postimg.cc/8zgQSByr/Preview-Foto-2.jpg' },
    { name: 'City River', image: 'https://i.postimg.cc/tg9K1RGq/Preview-Foto-3.jpg' },
    { name: 'Old Town', image: 'https://i.postimg.cc/RZ1rV68p/Preview-Foto-4.jpg' },
    { name: 'Huge Bridge', image: 'https://i.postimg.cc/N0bWRhQ1/Preview-Foto-5.jpg' }
  ],

  monumentsItems: [
    {
      name: 'Statue',
      description: 'Structure or sculpture, usually made of durable materials.',
      img: 'https://i.postimg.cc/KjfC3pJ8/Monuments-Foto-1.jpg',
      link: 'https://github.com/Soszka/SCSS-cityLayout'
    },
    {
      name: 'Cathedral',
      description: 'Higher Church, which is usually the seat of a bishop or archbishop.',
      img: 'https://i.postimg.cc/gkMfY5xM/Monuments-Foto-3.jpg',
      link: 'https://github.com/Soszka/SCSS-cityLayout',
      delay: '250'
    },
    {
      name: 'Castle',
      description: 'Defensive structure, which had residential functions.',
      img: 'https://i.postimg.cc/v8tJKDbw/Monuments-Foto-4.jpg',
      link: 'https://github.com/Soszka/SCSS-cityLayout',
      delay: '500',
    },
    {
      name: 'Town Hall',
      description: 'The building where it is located municipal authorities.',
      img: 'https://i.postimg.cc/15Rk1P3n/Monuments-Foto-2.jpg',
      link: 'https://github.com/Soszka/SCSS-cityLayout',
      delay: '750'
    }
  ],

  entertainItems: [
    {
      id: 'swimming',
      icon: 'fa-solid fa-person-swimming',
      image: 'https://i.postimg.cc/jS2Z2G0Q/Entertain-Foto-2.jpg',
      description: `If you like swimming, you will surely find something for yourself in the City.
        Many indoor pools as well as those open in the summer are at your full disposal.
        There are also clubs and swimming schools that offer training for both beginners and more advanced swimmers.`
    },
    {
      id: 'party',
      icon: 'fa-solid fa-champagne-glasses',
      image: 'https://i.postimg.cc/Qts2RT4Q/Entertain-Foto-1.jpg',
      description: `Experience City's vibrant nightlife! Dance the night away in clubs and bars, with pulsating beats and lively atmospheres. From trendy clubs to cozy pubs with live music.
       Enjoy themed parties and unforgettable nights in the city's energetic nightlife.`
    },
    {
      id: 'boating',
      icon: 'fa-solid fa-anchor',
      image: 'https://i.postimg.cc/2ySP5ff3/Entertain-Foto-3.jpg',
      description: `Explore City's serene lakes and rivers. Whether you seek tranquility on a peaceful lake or adventure along a winding river,
      Discover the wonders of City's waterscapes and connect with nature.`
    },
    {
      id: 'skatepark',
      icon: 'fa-solid fa-person-skating',
      image: 'https://i.postimg.cc/6qbF219c/Entertain-Foto-5.jpg',
      description: `The City is a haven for skateboarders and extreme sports enthusiasts.
       Ride ramps, rails, and obstacles in an inclusive and thrilling environment. 
       Whether you're a beginner or a pro, City's skateparks are perfect for adrenaline-pumping fun.`
    },
    {
      id: 'bowling',
      icon: 'fa-solid fa-bowling-ball',
      image: 'https://i.postimg.cc/DZg9FwHt/Entertain-Foto-4.jpg',
      description: `Looking for indoor fun? The City has you covered with its fantastic bowling alleys.
       City's bowling centers offer multiple lanes, comfortable seating, and a lively atmosphere.
       Roll your way to a great time, indulge in delicious snacks, and enjoy the social ambiance.`
    },
    {
      id: 'cinema',
      icon: 'fa-solid fa-film',
      image: 'https://i.postimg.cc/PrNgsh4R/Entertain-Foto-6.jpg',
      description: `Escape into the world of film at City's cinemas.
       With comfortable seating and top-notch screens, City's modern multiplexes offer an immersive movie experience.
       Discover a variety of genres and let the magic of cinema transport you in City's cozy theaters.`
    }
  ],

  natureImages: [
    { id : 'river', image: 'https://i.postimg.cc/brsXj8fG/Nature-Foto-1.jpg', display: 'd-block' },
    { id : 'river', image: 'https://i.postimg.cc/ncyyN6Rz/Nature-Foto-3.jpg', display: 'd-none d-md-block'},
    { id : 'river', image: 'https://i.postimg.cc/8c32p3TZ/Nature-Foto-2.jpg', display: 'd-none d-lg-block'},
    { id : 'bulverades', image: 'https://i.postimg.cc/y6b4yJ00/Nature-Foto-4.jpg', display: 'd-block'},
    { id : 'bulverades', image: 'https://i.postimg.cc/9Fw38WBK/Nature-Foto-5.jpg', display: 'd-none d-md-block'},
    { id : 'bulverades', image: 'https://i.postimg.cc/sXgqpyXn/Nature-Foto-6.jpg', display: 'd-none d-lg-block'},
    { id : 'viewPoint', image: 'https://i.postimg.cc/FRCqpqkh/Nature-Foto-7.jpg', display: 'd-block'},
    { id : 'viewPoint', image: 'https://i.postimg.cc/25mPSnfN/Nature-Foto-8.jpg', display: 'd-none d-md-block'},
    { id : 'viewPoint', image: 'https://i.postimg.cc/mrwKzhbz/Nature-Foto-9.jpg', display: 'd-none d-lg-block'}
  ],

  educationItems: [
    {
      id: 'flush-collapseOne',
      name: 'University of Technology located in City',
      image: 'https://i.postimg.cc/8cw2TT4s/Education-Foto-2.jpg',
      description: `A technical university that offers undergraduate, graduate,
      and doctoral studies in various fields of science, such as mechanical engineering,
      electrical engineering, computer science, or architecture.
      The emphasis is placed on practical aspects of science and preparing students for careers in industry.
      Politechnics are known for innovative research projects and strong ties to industry,
      which enables students to gain practical experience and skills.`
    },
    {
      id: 'flush-collapseTwo',
      name: 'University located in City',
      image: 'https://i.postimg.cc/mrJ2GyDK/Education-Foto-1.jpg',
      description: `A comprehensive university that offers studies in various fields,
      such as social sciences, humanities, natural sciences, or medicine.
      The focus is on educating students in theoretical and research fields and preparing them for careers in various sectors.
      Universities often have rich scientific facilities, including libraries, laboratories, and research centers,
      which enable students to conduct research at a high level and develop their scientific interests.`
    },
    {
      id: 'flush-collapseThree',
      name: 'Post-secondary school located in the City,',
      image: 'https://i.postimg.cc/tgsR2yX6/Education-Foto-3.jpg',
      description: `A vocational school is a type of secondary school that offers education programs at the level of technical school or vocational courses.
      It often emphasizes practical skills, preparing students for specific professions.
      Vocational school programs are typically shorter and more focused on practical learning than secondary school programs.
      Students can gain valuable practical experience and learn about the real requirements
      and challenges of the profession they want to pursue in the future.`
    },
  ]
};

export { dataSource };