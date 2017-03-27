import React from 'react';

const AddParticipant = (props) => {

  let nameInput, emailInput, phoneInput;
  
  const handleSubmit = (e) => {
    e.preventDefault();

    let name = nameInput.value;
    let email = emailInput.value;
    let phone = phoneInput.value;

    props.handleAddParticipant(name, email, phone);
    nameInput.value = "";
    emailInput.value = "";
    phoneInput.value = "";
  }

  return(
    <div className="table p-16">
      <form className="tablerow editrow" onSubmit={handleSubmit}>
        <div className="tablecell editcell tablecol-1"><input className="input-addform" type="text" placeholder="Full Name" required="required" ref={ el => nameInput = el }/></div>
        <div className="tablecell editcell tablecol-2"><input className="input-addform" type="email" placeholder="E-mail address" required="required" ref={ el => emailInput = el }/></div>
        <div className="tablecell editcell tablecol-3"><input className="input-addform" id="tel" type="tel" pattern="^\d{10}$" placeholder="Phone number" required="required" ref={ el => phoneInput = el }/></div>
        <div className="tablecell editcell tablecol-4"><button className="btn">Add new</button></div>
      </form>
    </div>
  );
}

export default AddParticipant;
