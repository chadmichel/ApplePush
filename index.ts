import * as apn from 'apn';

var options = {
  token: {
    key: 'PATH_TO_YOUR_KEY.p8',
    keyId: 'YOUR KEY ID',
    teamId: 'YOUR TEAM ID',
  },
  production: false,
};

const apnProvider = new apn.Provider(options);

const deviceToken = 'YOUR MESSAGE TOKEN';

const note = new apn.Notification();

note.expiry = Math.floor(Date.now() / 1000) + 3600;
note.badge = 3;
note.sound = 'ping.aiff';
note.alert = 'TEST MESSAGE';
note.payload = { messageFrom: 'Chad Michel' };
note.topic = 'com.cattlemen.mrs';

apnProvider.send(note, deviceToken).then((result) => {
  console.log(result);
});
