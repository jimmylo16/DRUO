import { Test, TestingModule } from '@nestjs/testing';
import { BusinessService } from './business.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Business } from './entities/business.entity';
import { Repository } from 'typeorm';

describe('BusinessService', () => {
  let service: BusinessService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BusinessService,
        {
          provide: getRepositoryToken(Business),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<BusinessService>(BusinessService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a business', async () => {
    const mockedBusiness: Business = {
      mail: 'email',
      name: 'name',
      nit: 123456789,
      id: 'testID',
    };
    jest
      .spyOn(service, 'create')
      .mockImplementation(async () => mockedBusiness);

    const encounter = await service.create(mockedBusiness);
    expect(encounter).toBe(mockedBusiness);
  });
  it('should get all the business', async () => {
    const mockedBusiness: Business = {
      mail: 'email',
      name: 'name',
      nit: 123456789,
      id: 'testID',
    };
    jest
      .spyOn(service, 'findAll')
      .mockImplementation(async () => [mockedBusiness]);

    const encounter = await service.findAll();
    expect(encounter).toEqual([mockedBusiness]);
    expect(encounter).toHaveLength(1);
    expect(encounter[0]).toBe(mockedBusiness);
    expect(encounter[0].id).toBe('testID');
    expect(encounter[0].nit).toBe(123456789);
    expect(encounter[0].name).toBe('name');
    expect(encounter[0].mail).toBe('email');
    expect(encounter[0].id).not.toBeNull();
    expect(encounter[0].nit).not.toBeNull();
    expect(encounter[0].name).not.toBeNull();
    expect(encounter[0].mail).not.toBeNull();
  });

  it('should return an empty array when findAll is invocked', async () => {
    jest.spyOn(service, 'findAll').mockImplementation(async () => []);
    const encounter = await service.findAll();
    expect(encounter).toEqual([]);
    expect(encounter).toHaveLength(0);
  });
});
