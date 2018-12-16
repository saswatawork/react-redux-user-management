/**
 *
 * Pagination
 *
 */

import React from "react";
import PropTypes from "prop-types";
import cl from "classnames";

const UserList = props => {
  const {
    userData
  } = props;

  return (
    <table className="table table-bordered table-striped">
      <thead>
        <tr>
          <th>No</th>
          <th>Avatar</th>
          <th>Name</th>
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
              <button className="btn btn-success" data-toggle="modal" data-target="#myModal">Edit</button>
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
