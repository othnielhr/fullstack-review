const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher', {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log('connected to db'))
.catch(err => console.log(err));

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  // id: Number, // add your own unique id {unique: true}
  username: String, //data.owner.login
  repo: String, // data.name to make unique {type: String, unieuq: true}
  url: String, // data.html_url
  forks: Number // data.forks
});
// create Repo model
let Repo = mongoose.model('Repo', repoSchema);

let save = (repoData) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  // db.collection.save({})
  // db.Repo.save(repoData);
  const repo = new Repo({
    username: repoData.username,
    url: repoData.url,
    forks: repoData.forks,
    repo: repoData.repo
  });

  repo.save(function(err, data) {
    if(err) {
      console.log('error', err);
    } else {
      console.log('saved');
    }
  })
}

module.exports.save = save;