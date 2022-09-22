import { OrderStatus } from "../types/order-status";
import { Subjects } from "./enum/_subject";

export default interface OrderCreatedEvent extends Event {
  subject: Subjects.OrderCreated;
  data: {
    id: string;
    version: number;
    status: OrderStatus;
    userId: string;
    expiresAt: string;
    ticket: {
      id: string;
      price: number;
    };
  };
}
