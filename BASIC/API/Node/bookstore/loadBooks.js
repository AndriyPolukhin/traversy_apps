db = db.getSiblingDB("bookstore");
db.books.drop();
db.books.insertMany([
  {
    title: "Leviathan Wakes",
    genres: "Hard Science Fiction",
    description: "Two hundred years after migrating into space, mankind is in turmoil. When a reluctant ship's captain and washed-up detective find themselves involved in the case of a missing girl, what they discover brings our solar system to the brink of civil war, and exposes the greatest conspiracy in human history.",
    author: "James Corey",
    publisher: "Amazon Publisher",
    pages: 577,
    img_url: "https://images-na.ssl-images-amazon.com/images/I/51dvPWlQQCL.jpg",
    buy_url: "https://www.amazon.com/gp/product/B0047Y171G/"
  },
  {
    title: "Tiamat\'s Wrath",
    genres: "Hard Science Fiction",
    description: "And throughout the wide human empire, the scattered crew of the Rocinante fights a brave rear - guard action against Duarte\'s authoritarian regime. Memory of the old order falls away, and a future under Laconia's eternal rule and with it, a battle that humanity can only lose  seems more and more certain.Because against the terrors that lie between worlds, courage and ambition will not be enough",
    author: "James Corey",
    publisher: "Amazon Publisher",
    pages: 600,
    img_url: "https://images-na.ssl-images-amazon.com/images/I/51xnnD8DqTL.jpg",
    buy_url: "https://www.amazon.com/gp/product/B07BVNVWL6/"
  },
  {
    title: "Do Androids Dream of Electric Sheep?",
    genres: "Cyberpubk",
    description: "By 2021, the World War has killed millions, driving entire species into extinction and sending mankind off-planet. Those who remain covet any living creature, and for people who can’t afford one, companies built incredibly realistic simulacra: horses, birds, cats, sheep. They’ve even built humans. Immigrants to Mars receive androids so sophisticated they are indistinguishable from true men or women. Fearful of the havoc these artificial humans can wreak, the government bans them from Earth. Driven into hiding, unauthorized androids live among human beings, undetected. Rick Deckard, an officially sanctioned bounty hunter, is commissioned to find rogue androids and “retire” them. But when cornered, androids fight back—with lethal force.",
    author: "Philip Dick",
    publisher: "Amazon Publisher",
    pages: 600,
    img_url: "https://images-na.ssl-images-amazon.com/images/I/41zIEWqtWYL._SX331_BO1,204,203,200_.jpg",
    buy_url: "https://www.amazon.com/gp/product/0345404475/"
  },
  {
    title: "Infinite ",
    genres: "Action Fiction",
    description: "After ten years in a failed cryogenic bed—body asleep, mind awake—William Chanokh’s torture comes to an end as the fog clears, the hatch opens, and his friend and fellow hacker, Tom, greets him…by stabbing a screwdriver into his heart. This is the first time William dies.",
    author: "Jeremy Robinson",
    publisher: "Amazon Publisher",
    pages: 4  00,
    img_url: "https://images-na.ssl-images-amazon.com/images/I/51T6rFZ4EIL.jpg",
    buy_url: "https://www.amazon.com/dp/B071NRTN3N/"
  }
]);