export type OfferItem = {
  id: number;
  title: string;
  description: string;
  cashbackAmount: number;
  expirationDate: string;
  retailerLogo: string;
  termsAndConditions: string;
};

export type SuccessResponse = {
  success: boolean;
};

export type OffersResponse = SuccessResponse & {
  offers: OfferItem[];
};
