const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

console.log("Sors-moi la liste des titres des livres du CDI");

const booksTitles = array => {
  let titles = [];
  array.forEach(element => {
    titles.push(element.title);
  });
  console.log(titles);
}

booksTitles(books);

console.log("Est-ce que tous les livres ont été empruntés au moins une fois ?");

const atLeastOneRent = array => {
  let notRentedList = array.filter(book => book.rented == 0);
  console.log(notRentedList.length > 0 ? false : true);
}

atLeastOneRent(books);

console.log("Quel est le livre le plus emprunté ?");

const mostRentedBook = array => {
  mostRented = array[0];
  array.forEach(book => {
    if (book.rented > mostRented.rented) mostRented = book;
  });
  console.log(mostRented);
}

mostRentedBook(books);

console.log("Quel est le livre le moins emprunté ?");

const leastRentedBook = array => {
  leastRented = array[0];
  array.forEach(book => {
    if (book.rented < leastRented.rented) leastRented = book;
  });
  console.log(leastRented);
}

leastRentedBook(books);

console.log("Supprime le livre avec l'ID 133712");

const deleteBook = array => {
  deleteIndex = array.indexOf(array.find(book => book.id == 133712));
  array.splice(deleteIndex, 1);
  console.log(array);
}

deleteBook(books);
