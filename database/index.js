const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher', {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
.then(() => console.log('connected to db'))
.catch(err => console.log(err));

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  // id: Number, // add your own unique id {unique: true}
  username: String, //data.owner.login
  repo: String, // data.name
  url: {type: String, unique: true}, // data.html_url changed this key to be unique instead because some users may have same repo names but full url should be different
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
      // err sent when a duplicate repo url is found
      console.log('error dupe');
    } else {
      console.log('saved');
    }
  })
}

module.exports.save = save;