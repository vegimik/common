import { Subjects } from "./_subject";

export default interface TicketUpdatedEvent {
  subject: Subjects.TickerUpdated;
  data: {
    id: string;
    title: string;
    price: number;
    userId: string;
    version: number;
  };
}
