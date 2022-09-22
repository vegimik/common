import { OrderStatus } from "../../../types/order-status";
import { Subjects } from "../../enum/_subject";

export default interface OrderCancelledEvent extends Event {
  subject: Subjects.OrderCancelled;
  data: {
    id: string;
    version: number;
    ticket: {
      id: string;
    };
  };
}
