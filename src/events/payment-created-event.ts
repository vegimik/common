import { Subjects } from "./_subject";

export default interface PaymentCreatedEvent extends Event {
  subject: Subjects.PaymentCreated;
  data: {
    id: string;
    orderId: string;
    stripeId: string;
  };
}
