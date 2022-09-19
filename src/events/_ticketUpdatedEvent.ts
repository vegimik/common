import { Subjects } from "./_subject";

export default interface TicketUpdatedEvent {
  subject: Subjects.TickerUpdated;
  data: {
    id: string;
    version: number;
    title: string;
    price: number;
    userId: string;
  };
}
