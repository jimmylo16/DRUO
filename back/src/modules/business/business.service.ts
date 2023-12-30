import {
  HttpException,
  HttpStatus,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateBusinessDto } from './dto/create-business.dto';
import { UpdateBusinessDto } from './dto/update-business.dto';
import { Business } from './entities/business.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PaginationDto } from 'src/common/dtos/pagination.dto';

@Injectable()
export class BusinessService {
  constructor(
    @InjectRepository(Business)
    private businessRepository: Repository<Business>,
  ) {}
  async create(createBusinessDto: CreateBusinessDto) {
    const findedBusiness = await this.businessRepository.findOneBy({
      name: createBusinessDto.name,
    });
    if (findedBusiness) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          message: ['El negocio con el nombre dado ya existe'],
        },
        HttpStatus.FORBIDDEN,
        {
          cause: 'El negocio con el nombre dado ya existe',
        },
      );
    }
    try {
      const business = this.businessRepository.create({
        ...createBusinessDto,
      });
      await this.businessRepository.save(business);
      return business;
    } catch (error) {
      throw new InternalServerErrorException(
        'Unexpected error, check server logs',
      );
    }
  }

  findAll(paginationDto?: PaginationDto) {
    const { limit = 10, offset = 0 } = paginationDto;

    return this.businessRepository.find({
      take: limit,
      skip: offset,
    });
  }

  findOne(id: string) {
    const business = this.businessRepository.findOneBy({ id });
    if (!business) {
      throw new NotFoundException(`business with ${id} not found`);
    }
    return business;
  }

  async update(id: string, updateBusinessDto: UpdateBusinessDto) {
    const business = await this.businessRepository.preload({
      id: id,
      ...updateBusinessDto,
    });
    if (!business)
      throw new NotFoundException(`business with id: ${id} not found`);

    await this.businessRepository.save(business);

    return business;
  }

  remove(id: string) {
    const updatedbusiness = this.businessRepository.preload({
      id: id,
      isActive: false,
    });
    return updatedbusiness;
  }
}
