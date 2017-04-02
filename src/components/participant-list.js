import React from 'react';
import Participant from './participant';

const ParticipantList = (props) => {

  const sortColumn = (e) => {
    let arrow = e.target.lastChild.textContent;
    var elements = document.getElementsByClassName('tabletitle');
    for (var i = 0, l = elements.length; i < l; i++) {
        elements[i].lastChild.textContent = "";
    }
    if (arrow === "" || arrow === "↑") {
      e.target.lastChild.textContent = "↓";
    } else if (arrow === "↓") {
      e.target.lastChild.textContent = "↑";
    }
    let key = e.target.dataset.field;
    console.log(key);
    let order = e.target.lastChild.textContent;
    props.handleSortColumn(key, order);
  }

  return (
    <div>
      <div className="table">
          <div className="tablerow tableheader" onClick={sortColumn}>
            <div className="tablecell tabletitle tablecol-1" data-field="name">Name <span></span></div>
            <div className="tablecell tabletitle tablecol-2" data-field="email">E-mail address <span></span></div>
            <div className="tablecell tabletitle tablecol-3" data-field="phone">Phone number <span></span></div>
            <div className="tablecell tablecol-4"></div>
          </div>
          {props.participants.map((participant) => <Participant  key={participant.id} {...participant} handleRemoveParticipant={props.handleRemoveParticipant} handleEditParticipant={props.handleEditParticipant}/>)}
      </div>
    </div>
  );
}



export default ParticipantList;
