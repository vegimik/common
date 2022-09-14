import { OrderStatus } from "../types/order-status";
import { Subjects } from "./_subject";

export default interface OrderCreatedEvent extends Event {
  subject: Subjects.OrderCreated;
  data: {
    id: string;
    status: OrderStatus;
    userId: string;
    expiresAt: string;
    ticket: {
      id: string;
      price: number;
    };
  };
}
