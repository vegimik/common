export default async function natsConnector(
  natsWrapper: any,
  NATS_CLIENT_ID: string,
  NATS_URL: string,
  NATS_CLUSTER_ID: string,
  callbackFn: Function
) {
  if (!NATS_CLIENT_ID) {
    throw new Error("NATS_CLIENT_ID is not defined");
  }

  if (!NATS_URL) {
    throw new Error("NATS_URL is not defined");
  }

  if (!NATS_CLUSTER_ID) {
    throw new Error("NATS_CLUSTER_ID is not defined");
  }
  try {
    await natsWrapper.connect(NATS_CLUSTER_ID, NATS_CLIENT_ID, NATS_URL);

    natsWrapper.client.on("close", () => {
      console.log("Listener diconnected from NATS!");
      process.exit();
    });

    process.on("SIGINT", () => natsWrapper.client.close());
    process.on("SIGTERM", () => natsWrapper.client.close());

    callbackFn();
  } catch (error) {
    console.error(error);
  }
}
