import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { Ticket } from './entities/ticket.entity';

@Injectable()
export class TicketsService {

  constructor(
    @InjectRepository(Ticket)
    private readonly ticketRepository: Repository<Ticket>
  ) { }

  async create(createTicketDto: CreateTicketDto) {
    try {
      return this.ticketRepository.save(createTicketDto);
    } catch (error) {
      // TODO: return errors validation
      console.log(error)
    }
  }

  async findAll() {
    try {
      return this.ticketRepository.find();
    } catch (error) {
      // TODO: return errors validation
      console.log(error)
    }
  }

  async findOne(id: string) {
    try {
      return this.ticketRepository.findOneBy({ id });
    } catch (error) {
      // TODO: return errors validation
      console.log(`This action returns a #${id} ticket`, error)
    }
  }

  async update(id: string, updateTicketDto: UpdateTicketDto) {


    try {
      return this.ticketRepository.update(id, updateTicketDto);
    } catch (error) {
      // TODO: return errors validation
      console.log(`This action updates a #${id} ticket`, error)
    }
  }

  async remove(id: string) {
    try {
      return this.ticketRepository.softDelete({ id });
    } catch (error) {
      // TODO: return errors validation
      console.log(`This action removes a #${id} ticket`, error)
    }
  }
}
