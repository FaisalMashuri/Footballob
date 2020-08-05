const webPush = require("web-push");
const vapidKeys = {
  publicKey:
    "BNXyR3pMrvcqfwTkZmXZv0pwXxOwGaWa16tsTruYSOVbfoj1m_4dppRVRQl2GrL2znxXc04iBTz_rVDl6HZXWI0",
  privateKey: "nfh80TxieyHRcmyPmH06u35tDDSDaNOX1z0rOInPxCY",
};

webPush.setVapidDetails(
  "mailto:example@yourdomain.org",
  vapidKeys.publicKey,
  vapidKeys.privateKey
);
let pushSubscription = {
  endpoint:
    "https://fcm.googleapis.com/fcm/send/dXvBzda8lj8:APA91bG00PEnBFBLVuCguoK2bkBmltyH6phQdGME9lRJN0kJoGXjSW0C1J6KRxhqnOT81ofPKyUnykPP3ItU1rikXvtnJOoovaGv-okb2oiZkf3bcVzIYP_j5N1FhKpIOVlHopC4Fi_O",
  keys: {
    p256dh:
      "BFv1RrrwfqlabrFAQtCHA1C6wZUrLwK7fYar1NY7S1ShNGOTJBdpb+vmcpbSL5jftY3cEbfqnC1mpVtUdKtXvTk=",
    auth: "mmUslTQvLM7zrmvJR7lIsw==",
  },
};
let payload = "Selamat! Aplikasi Anda sudah dapat menerima push notifikasi!";

let options = {
  gcmAPIKey: "772627471419",
  TTL: 60,
};
webPush.sendNotification(pushSubscription, payload, options).catch((err) => {
  console.log(err);
});
