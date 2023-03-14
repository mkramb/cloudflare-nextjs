import { Injectable } from '@nestjs/common';

const OFFERS_MAX = 10;
const OFFERS = Array.from({ length: OFFERS_MAX }).map((_, index) => ({
  id: index,
  title: `title${index}`,
  description: `description${index}`,
}));

@Injectable()
export class AppService {
  getOfferById(id: number) {
    return OFFERS.find((offer) => offer.id === id);
  }

  getOffers() {
    return OFFERS.map((offer) => ({
      id: offer.id,
      title: offer.title,
    }));
  }
}
