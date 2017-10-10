import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //showLoginPopup: false
    };
  }
  render() {
    return (
      <div className="slidebar">
        <div className="logo">
          <a href="#"></a>
        </div>
        <ul>
          <li><Link to="/invoice">dashboard</Link></li>
          <li><Link to="/invoice">Create New Invoice</Link></li>
          <li><Link to="/view-invoice">View Past Invoice</Link></li>
          <li><Link to="/invoice">Track Payment Dues</Link></li>
          <li><Link to="/invoice">Total Accounts Overview</Link></li>
          <li><Link to="/invoice">Record Expenses/Bils</Link></li>
          <li><Link to="/invoice">View Expenses/Bils</Link></li>
          <li><Link to="/invoice">Send Suggesions</Link></li>
        </ul>
      </div>
    );
  }
}
export default Sidebar;