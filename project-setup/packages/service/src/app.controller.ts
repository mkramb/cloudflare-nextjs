import { Response } from 'express';
import {
  Controller,
  Get,
  HttpStatus,
  NotFoundException,
  Param,
  Res,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('offers/:id')
  getOfferById(@Param('id') id, @Res() res: Response) {
    const offerId = parseInt(id, 10);
    const offer = this.appService.getOfferById(offerId);

    if (!offer) {
      throw new NotFoundException();
    }

    return res.status(HttpStatus.OK).json(offer);
  }

  @Get('offers')
  getOffers(@Res() res: Response) {
    const offers = this.appService.getOffers();
    return res.status(HttpStatus.OK).json(offers);
  }
}
