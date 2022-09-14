import { OrderStatus } from "../types/order-status";
import { Subjects } from "./_subject";

export default interface OrderCancelledEvent extends Event {
  subject: Subjects.OrderCancelled;
  data: {
    id: string;
    ticket: {
      id: string;
    };
  };
}
