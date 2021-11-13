import React from 'react';
import ReactEntry from './RepoEntry.jsx';

const RepoList = (props) => {
  let repos = props.repos.map(repo => {
    return ( <ReactEntry key={repo._id} data={repo} />)
  });

  return (
    <div>
      <h4> Repo List Component </h4>
      There are {props.repos.length} repos.
      <h2>Repo by Username(#Forks)</h2>
      <ul>{repos}</ul>
    </div>
  )
  // <div>
  //   <div>
  //     <h4> Repo List Component </h4>
  //     There are {props.repos.length} repos.
  //   </div>
  //   <div>{props.repos.map(repo => { return <ReactEntry repo={repo} />; })} </div>
  // </div>
}

export default RepoList;