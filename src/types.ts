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
    going: boolean | null;
    rehearsalDinnerGoing: boolean | null;
    dinnerOption: string;
    rehearsalDinnerOption: string;
    plusOneName: string;
    plusOneDinnerOption: string;
    dietaryRestrictions: string;
  };
}
