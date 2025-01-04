export interface Guest {
  name: string;
  invites: {
    weddingParty: boolean;
    rehearsalDinner: boolean;
    afterParty: boolean;
    plusOne: boolean;
    hotelStay: boolean;
    lambermontStay: boolean;
  };
  rsvp: {
    going: boolean;
    rehearsalDinnerGoing: boolean;
    dinnerOption: string;
    rehearsalDinnerOption: string;
    plusOneName: string;
    plusOneDinnerOption: string;
    dietaryRestrictions: string;
  };
}
