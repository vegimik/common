export enum Subjects {
  TicketCreated = "ticket:created",
  TickerUpdated = "ticket:updated",

  OrderCreated = "order:created",
  OrderCancelled = "order:cancelled",
  OrderAwaitingPayment = "order:awaiting:payment",
  OrderComplete = "order:complete",

  ExpirationComplete = "expiration:complete",

  PaymentCreated = "payment:created",
  PaymentDepsit = "payment:despoit",
}
