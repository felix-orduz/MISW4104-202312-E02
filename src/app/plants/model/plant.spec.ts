import { faker } from '@faker-js/faker';
import { Plant } from './plant';

describe('Plant', () => {
  let mockPlant = {
    id: faker.datatype.number(100),
    nombre_comun: faker.random.word(),
    nombre_cientifico: faker.random.words(2),
    tipo: faker.random.word(),
    altura_maxima: faker.datatype.number(15000),
    clima: faker.random.word(),
    sustrato_siembra: faker.lorem.lines(1),
  };
  it('should create an instance', () => {
    expect(
      new Plant(
        mockPlant.id,
        mockPlant.nombre_comun,
        mockPlant.nombre_cientifico,
        mockPlant.tipo,
        mockPlant.altura_maxima,
        mockPlant.clima,
        mockPlant.sustrato_siembra
      )
    ).toBeTruthy();
  });
});
