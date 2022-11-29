import { OrderStatus } from "../types/order-status";
import { Subjects } from "./_subject";


export default interface PaymentDepositEvent extends Event {
  subject: Subjects.PaymentDepsit;
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
