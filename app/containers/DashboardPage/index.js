/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';

/* eslint-disable react/prefer-stateless-function */
export default class Dashboard extends React.PureComponent {
  render() {
    return (
      <div>
        <table className="table table-bordered table-striped">
        	<thead>
        		<tr>
        			<th className="">№</th>
        			<th className="">Name</th>
        			<th className="">Email/Login</th>
        			<th className="">Phone</th>
        			<th className="">Skype</th>
        			<th className="">Role</th>
        			<th className="">Edit</th>
        		</tr>
        	</thead>
        	<tbody>
        		<tr>
        			<td  className="">1</td>
        			<td className="">user123</td>
        			<td  className="">123@hotmail.com</td>
        			<td  className="">0123456</td>
        			<td  className="">user123</td>
        			<td  className="">Admin</td>
        			<td >
        				<button className="btn btn-success" data-toggle="modal" data-target="#myModal">Edit</button>
        			</td>
        		</tr>
        		<tr>
        			<td  className="">2</td>
        			<td className="">user456</td>
        			<td  className="">456@hotmail.com</td>
        			<td  className="">0123458</td>
        			<td  className="">user456</td>
        			<td  className="">User</td>
        			<td >
        				<button className="btn btn-success" data-toggle="modal" data-target="#myModal">Edit</button>
        			</td>
        		</tr>
        	</tbody>
        </table>
        <div className="modal fade" id="myModal" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        	<div className="modal-dialog">
        		<div className="modal-content"></div>
        	</div>
        	<div className="modal-dialog">
        		<div className="modal-content"></div>
        	</div>
        	<div className="modal-dialog">
        		<div className="modal-content">
        			<div className="modal-header">
        				<button type="button" className="close" data-dismiss="modal">
        					<span aria-hidden="true" className="">×   </span>
        					<span className="sr-only">Close</span>
        				</button>
        				<h4 className="modal-title" id="myModalLabel">Modal title</h4>
        			</div>
        			<div className="modal-body"></div>
        			<div className="modal-footer">
        				<button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
        				<button type="button" className="btn btn-primary">Save changes</button>
        			</div>
        		</div>
        	</div>
        </div>
      </div>
    );
  }
}
