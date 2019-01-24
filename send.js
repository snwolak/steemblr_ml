const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccount.json");
const dapp = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://steemblr.firebaseio.com"'
});
const db = admin.firestore();
const app = (req, res) => {
  const data = req.body
  res.set("Access-Control-Allow-Origin", "*");
  const ref = db.collection('posts').doc(data.permlink);
  ref.get().then(doc => {
        if (doc.exists) {
          const post = doc.data()
          if(post.trending === true) {
            ref.update(data);
            res.end();
            return void 0;
          } else {
            console.log("Trending:", data.rating, data.rating > 0.25 ? true : false)
            ref.update(data);
            ref.update({trending: data.rating > 0.25 ? true : false})
            res.end();
            return void 0;
          }
          
        } else {
          console.log('No such document', data.permlink);
          res.end();
          return void 0;
        }
      })
      .catch(error => {
        console.log(error);
      });
  res.status(200)
  res.end()
};

module.exports = {
  app
}
