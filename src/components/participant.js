import React, { Component } from 'react';
import pen from '../img/pen.svg';
import trash from '../img/trash.svg';

class Participant extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editable: false
    }

    this.removeParticipant = this.removeParticipant.bind(this);
    this.editParticipant = this.editParticipant.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);

  }

  removeParticipant(e) {
    e.preventDefault();
    this.props.handleRemoveParticipant(this.props.id);
  }

  editParticipant(e) {
    e.preventDefault();
    this.setState({ editable: true });
  }

  handleSubmit(e) {
    e.preventDefault();

    let name = this.nameInput.value;
    let email = this.emailInput.value;
    let phone = this.phoneInput.value;
    let id = this.props.id;

    this.props.handleEditParticipant(id, name, email, phone);
    this.setState({ editable: false });

  }

  handleCancel(e) {
    e.preventDefault();
    this.setState({ editable: false });
  }

  render() {

    if(this.state.editable) {
      return (
            <form className="tablerow editrow" onSubmit={this.handleSubmit}>
              <div className="tablecell editcell"><input className="input-addform" type="text" defaultValue={this.props.name} required="required" ref={ el => this.nameInput = el }/></div>
              <div className="tablecell editcell"><input className="input-addform" type="email" defaultValue={this.props.email} required="required" ref={ el => this.emailInput = el }/></div>
              <div className="tablecell editcell"><input className="input-addform" id="tel" type="tel" pattern="^\d{10}$" defaultValue={this.props.phone} required="required" ref={ el => this.phoneInput = el }/></div>
              <div className="tablecell editcell"><button className="btn save-btn">Save</button><button className="btn cancel-btn" onClick={this.handleCancel}>Cancel</button></div>
            </form>
      );
    } else {
      return (
        <div className="tablerow">
          <div className="tablecell">{this.props.name}</div>
          <div className="tablecell">{this.props.email}</div>
          <div className="tablecell">{this.props.phone}</div>
          <div className="tablecell icons">
            <img src={pen} alt="edit participant" onClick={this.editParticipant}/>
            <img src={trash} alt="delete participant" onClick={this.removeParticipant}/>
          </div>
        </div>
      );
    }
  }
}

export default Participant;
