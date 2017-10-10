import React, { Component } from 'react';
import { Link} from 'react-router-dom';
//import { browserHistory } from 'react-router';


class Invoice extends Component {
  constructor(props) {
    super(props);
    //this.navigateRoute = this.navigateRoute.bind(this);
    // this.state = {
     
    // };
  }
  // navigateRoute(){
  //   browserHistory.push("/create");
  // }
  render() {
    return (
          <div className="quick-press">
            <h4>Create Invoice</h4>
            {/*<div onClick={this.navigateRoute}>Add/Edit your client details</div>*/}
            
            <div className="_p15 border_style">
            <div className="row">
            <div className="col-md-3"><Link to="/create">Add/Edit your client details</Link></div>
            <div className="col-md-6 text-center"><Link to="/create">Add/Edit your client details</Link></div>
            <div className="col-md-3"><Link to="/add/photo">Add/Edit DATE/PHOTO/LOGO</Link></div>
          </div>
           <div className="row">
            <div className="col-md-12"><Link to="/create">Add/Edit your client details</Link></div>
          </div>
          <div className="row">
            <div className="col-md-12"><Link to="/create">Add/Edit your client details</Link></div>
          </div>
          <div className="row">
            <div className="col-md-12"><Link to="/create">Add/Edit your client details</Link></div>
          </div>
           </div>
           <div class="_p15">
           <div className="row">
            <div className="col-md-3"><Link to="/create">Add/Edit your client details</Link></div>
            <div className="col-md-6 text-center"><Link to="/create">Add/Edit your client details</Link></div>
            <div className="col-md-3"><Link to="/add/photo">Add/Edit DATE/PHOTO/LOGO</Link></div>
          </div>
          </div>
           </div>
           
           
    );
  }
}
export default Invoice;