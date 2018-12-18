/**
 *
 * User list
 *
 */

import React from "react";
import Button from 'components/Button';

const UserList = props => {
  const {
    userData,
    getUserDetails,
    getSortedUser,
    userSortedOrder
  } = props;

  return (
    <table className="table table-bordered table-striped">
      <thead>
        <tr>
          <th>No</th>
          <th>Avatar</th>
          <th>Name <Button type="link" className="fas fa-sort" onClick={() => getSortedUser(userSortedOrder==='asc' ? 'desc' : 'asc')} /></th>
          <th>Edit</th>
        </tr>
      </thead>
      <tbody>
        {userData.length>0 && userData.map(({id, first_name, last_name, avatar}, key) => (
          <tr key={id}>
            <td >{key+1}</td>
            <td><img src={avatar} className="img-thumbnail" height="75" width="75" /></td>
            <td>{first_name} {last_name}</td>
            <td>
              <button onClick={() => getUserDetails(id)} className="btn btn-success mx-2" data-toggle="modal" data-target="#myModal">Edit</button>
              <button className="btn btn-success mx-2" data-target="#myModal">Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

UserList.propTypes = {
};

UserList.defaultProps = {
};

export default UserList;
