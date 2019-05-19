const event = {
  name: 'Romantic Dinner',
  guestList: ['Andriy', 'Anastasia'],
  printGuestList() {
    console.log(`List for: ${this.name}`);

    this.guestList.forEach(guest =>
      console.log(`${guest} is attending ${this.name}`)
    );
  }
};

event.printGuestList();
