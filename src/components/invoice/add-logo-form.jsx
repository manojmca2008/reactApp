import React, { Component } from 'react';
import { Calendar } from 'react-calendar-component';
import moment from 'moment';
import 'moment/locale/nb';

class addLogoForm extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
    this.state =
      {
        file: '',
        imagePreviewUrl: '',
        date: moment()
      };
  }
  handleChange(event) {
    this.state.customerForm[event.target.name] = event.target.value;
    this.setState({ customerForm: this.state.customerForm });
  }
  _handleSubmit(e) {
    e.preventDefault();
    // TODO: do something with -> this.state.file
    console.log('handle uploading-', this.state.file);
  }

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }

    reader.readAsDataURL(file)
  }
  // render() {
  //   return (
  //     <div class="quick-press">
  //       <h4>Add/Edit DATE/PHOTO/LOGO</h4>
  //       <label className="txt_checkoutlabel">EDIT DATE FOR YOUR INVOICE</label>
  //       <input type="text" name="date" />
  //       <input type="submit" class="submit" name="submit" value="Submit" onClick={this.doSubmit}/>
  //     </div>
  //   );
  // }
  render() {
    let { imagePreviewUrl } = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} />);
    } else {
      $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
    }
    return (
      <div>
        {/*<Calendar
          onChangeMonth={(date) => this.setState({ date })}
          date={this.state.date}
          onPickDate={(date) => console.log(date)}
        />*/}
        <div className="previewComponent">
          <form onSubmit={(e) => this._handleSubmit(e)}>
            <input className="fileInput"
              type="file"
              onChange={(e) => this._handleImageChange(e)} />
            <button className="submitButton"
              type="submit"
              onClick={(e) => this._handleSubmit(e)}>Upload Image</button>
          </form>
          <div className="imgPreview">
            {$imagePreview}
          </div>
        </div>
      </div>
    );
  }
}
export default addLogoForm;