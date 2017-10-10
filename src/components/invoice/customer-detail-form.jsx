import React, { Component } from 'react';
import axios from 'axios';

class customerDetailForm extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      customerForm: {
        name: '',
        address: '',
        phone: '',
        email: '',
        website: '',
        pan_no: '',
        gst_no: ''
      }
    };
  }
  handleChange(event) {
    this.state.customerForm[event.target.name] = event.target.value;
    this.setState({ customerForm: this.state.customerForm });
  }
  handleSubmit() {
    alert('submit');
    console.log(this.state.customerForm);
    axios.get('http://yiiapi-local.com/clientdetails')
  .then(function(response){
    console.log('saved successfully')
  });  
//   axios({
//   method: 'post',
//   url: 'http://yiiapi-local.com/clientdetails/create',
//   data: {
//     firstName: 'Fred',
//     lastName: 'Flintstone'
//   },
//   crossDomain: true
// });
  
  }
  render() {
    return (
      <div class="quick-press">
        <h4>Customer Detail Form</h4>
        <input type="text" name="name" placeholder="Name" value={this.state.customerForm.name} onChange={this.handleChange} />
        <input type="text" name="address" placeholder="Address" value={this.state.customerForm.address} onChange={this.handleChange} />
        <input type="text" name="phone" placeholder="Phone" value={this.state.customerForm.phone} onChange={this.handleChange} />
        <input type="text" name="email" placeholder="Email" value={this.state.customerForm.email} onChange={this.handleChange} />
        <input type="text" name="website" placeholder="Website" value={this.state.customerForm.website} onChange={this.handleChange} />
        <input type="text" name="pan_no" placeholder="Pan No" value={this.state.customerForm.pan_no} onChange={this.handleChange} />
        <input type="text" name="gst_no" placeholder="Gst No" value={this.state.customerForm.gst_no} onChange={this.handleChange} />
        <input type="submit" class="submit" name="Save" value="Save" onClick={this.handleSubmit}/>
      </div>
    );
  }
}
export default customerDetailForm;