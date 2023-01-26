
import React, { Component } from 'react';
import axios from 'axios';



class AddEmployee extends Component {
constructor(props) {
super(props);
this.state = {
titre: '',
description: '',
duree: '',
couleur: '',
code: ''
}
}

// When value changes of the fields
handleChange = (event) => {
this.setState({ [event.target.name]: event.target.value });
}

// To add new employee when user submits the form
handleSubmit = (event) => {
event.preventDefault();
const { titre, description, duree, couleur ,code} = this.state;
axios.post('http://localhost:3000/api/tache', {
	titre: titre,
description: description,
duree: duree,
couleur: couleur,
code:code


})
.then((response) => {
console.log(response);
this.props.history.push('/');
})
.catch((error) => {
console.log(error);
});
}




render() {
return (
  <>
  <section className='heading'>
    <h1>
      Add
    </h1>
    <p>Please add an item</p>
  </section>

  <section className='form'>
    <form onSubmit={this.handleSubmit}>
      <div className='form-group'>
        <input
          type='text'
          className='form-control'
          id='titre'
          name='titre'
          value={this.state.titre}
          placeholder='Title '
          onChange={this.handleChange}
        />
      </div>
      <div className='form-group'>
        <input
          type='text'
          className='form-control'
          id='description'
          name='description'
          value={this.state.description}
          placeholder='Enter your description'
          onChange={this.handleChange}
        />
      </div>
      <div className='form-group'>
        <input
          type='text'
          className='form-control'
          id='duree'
          name='duree'
          value={this.state.duree}
          placeholder='duree'
          onChange={this.handleChange}
        />
      </div>
      <div className='form-group'>
        <input
          type='text'
          className='form-control'
          id='couleur'
          name='couleur'
          value={this.state.couleur}
          placeholder='couleur'
          onChange={this.handleChange}
        />
      </div>
      <div className='form-group'>
        <input
          type='text'
          className='form-control'
          id='code'
          name='code'
          value={this.state.code}
          placeholder='Code'
          onChange={this.handleChange}
        />
      </div>
      <div className='form-group'>
        <button type='submit' className='btn btn-block'>
          Submit
        </button>
      </div>
    </form>
  </section>
</>
);
}
}

export default AddEmployee;