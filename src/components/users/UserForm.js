import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import renderField from '../../components/renderField';

class UserForm extends Component{
  constructor(props){
    super(props);
    let avatar = this.props.initialValues? `http://localhost:3000/uploads/${this.props.initialValues.filename}` : "";
    this.state = { imgSrc: avatar }
  }

  componentDidMount() {
    this.props.initialize({ company: this.props.company_id });
  }

  imagePreview(e){
    var avatar = e.target.files[0]
    var reader = new FileReader()
   reader.readAsDataURL(avatar)
    reader.onloadend = function (e) {
      this.setState({
          imgSrc: reader.result
      })
    }.bind(this);
  }
  render(){
    const { handleSubmit, pristine, reset, submitting } = this.props;
    const imgSrc = this.state.imgSrc
    return(
      <div className="col-md-6">
      <form encType="multipart/form-data" onSubmit={handleSubmit}>
        <Field
          name="fname"
          type="text"
          label="First Name"
          placeholder="Enter First Name"
          component={renderField}
          validate={required} />
        <Field
          name="lname"
          type="text"
          label="Last Name"
          placeholder="Enter Last Name"
          component={renderField}
          validate={required} />
        <Field
          name="email"
          type="email"
          label="Email"
          placeholder="Enter Email"
          component={renderField}
          validate={email} />
        <Field component={UploadFile} name='avatar' onChange={this.imagePreview.bind(this)} />
        { imgSrc && <img src={this.state.imgSrc} alt="" />  }
        
        <div>
          <label>Sex</label>
          <div>
            <label>
              <Field
                name="gender"
                component="input"
                type="radio"
                value="1"
              />{' '}
              Male
            </label> <br/>
            <label>
              <Field
                name="gender"
                component="input"
                type="radio"
                value="0"
              />{' '}
              Female
            </label>
          </div>
        </div>
        <Field
          name="phone"
          type="number"
          label="Phone Nunber"            
          placeholder="Enter your Phone Number" 
          component={renderField}
          validate ={[required, phoneNumber]}/>
        <div>
          <label>Address</label>
          <div>
            <Field name="address" component="textarea" className='form-control' /> <br/>
          </div>
        </div>
        <div>
          <button type="submit" disabled={submitting} className="btn btn-primary">Submit</button>
          <button type="button" disabled={pristine || submitting} onClick={reset} className="btn btn-default">Clear</button>
        </div>
      </form>
    </div>
    );
  }
}

// file value handaling 
const UploadFile = ({ input: {value: omitValue, ...inputProps }, meta: omitMeta, ...props }) => (
  <input type='file' {...inputProps} {...props} />
);

// validation start

// Email validation
const email = value =>
value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
? 'Invalid email address'
: undefined

// field reqired
const required = value => (value ? undefined : 'Required')

// phone validation
const phoneNumber = value =>
value && !/^(0|[1-9][0-9]{9})$/i.test(value)
  ? 'Invalid phone number, must be 10 digits'
  : undefined

//validation end

export default reduxForm({
  form: 'UserForm', // a unique identifier for this form
})(UserForm)