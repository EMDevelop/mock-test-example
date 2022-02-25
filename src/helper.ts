export function randomCar() {
  return ['BMW', 'Audi', 'Mercedes', 'Volkswagen'][
    Math.floor(Math.random() * 4)
  ];
}
