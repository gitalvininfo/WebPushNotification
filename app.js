const webpush = require('web-push');

console.log(webpush.generateVAPIDKeys());

const publicKey = "BLNhRPmytqEzQk7xgfPu90wycmiZyUF1hvWkRQz7CyXt_P2zqPI72CDyIrRPcJlyMNj8PZdbYaNACUgOEHSh-9g";
const privateKey = "AJw2m9P9W72i6-SXxEfcp3BHVTIz5bxhEfe47kNqhnE";

const sub = {
    endpoint: "https://fcm.googleapis.com/fcm/send/eBTzkqMa2Es:APA91bEUwfZnxAWUm-U17f1m-uSDxsZGWDCTLVgPoaWaEbCtvm7rqSGSi0Yi14h2oBVnpky8PbSj6zU1nW-j6Mb73fT0IUpjRpiXfMNMuWMm_UBrXxM32U9fryjVebHjsuzmSsfeJHjA",
    expirationTime: null,
    keys: {
        p256dh: "BFgbqeDKSXe2o_d8_EkWF2XPBrjqknXR-FM4KsTvlxYE9048wSwQoN0CisOlxAMyKvZdpDVEr88_9fPTEtHM7fk",
        auth: "cTH3oJqZr7aL0qtSJJyK5Q"
    }
};

webpush.setVapidDetails("mailto:example@yourdomain.org", publicKey, privateKey);



const payload = {
    notification: {
        data: { url: 'https://github.com/gitalvininfo' },
        title: 'Angular Push Notification Hello Hi',
        vibrate: [100, 50, 100],
    }
}

webpush.sendNotification(sub, JSON.stringify(payload));