import React from 'react';
import ReactEntry from './RepoEntry.jsx';

const RepoList = (props) => (
  <div>
    <h4> Repo List Component </h4>
    There are {props.repos.length} repos.
  </div>
  <div>{props.repos.map(repo => { return <ReactEntry repo={repo} />; })} </div>
)

export default RepoList;