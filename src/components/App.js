import React, { Component } from 'react';
import Header from './header';
import ParticipantList from './participant-list';
import AddParticipant from './add-participant';
import '../App.css';
import uuid from 'uuid';

const participants = [
  {
    id: uuid(),
    name: "John Doe",
    email: "john.doe@gmail.com",
    phone: "0458765487"
  },
  {
    id: uuid(),
    name: "Arat Goofy",
    email: "arat.goofy@gmail.com",
    phone: "0501235487"
  },
  {
    id: uuid(),
    name: "Buffy Summers",
    email: "buffy@hell.fi",
    phone: "0403458899"
  },
  {
    id: uuid(),
    name: "Elisa Bestetti",
    email: "el@gmail.com",
    phone: "0451359911"
  },
  {
    id: uuid(),
    name: "Zora Zita",
    email: "zora.zita@gmail.com",
    phone: "0553336767"
  },
  {
    id: uuid(),
    name: "Marylin Bo",
    email: "mary@gmail.com",
    phone: "045777987"
  },
  {
    id: uuid(),
    name: "Sue Townsend",
    email: "sue@gmail.com",
    phone: "0455441234"
  },
  {
    id: uuid(),
    name: "Elena Ferrante",
    email: "elena@gmail.com",
    phone: "0451442234"
  },
  {
    id: uuid(),
    name: "Janice Daniels",
    email: "janice@gmail.com",
    phone: "0451552234"
  },
  {
    id: uuid(),
    name: "Danny Jo",
    email: "dajo@gmail.com",
    phone: "0456672234"
  },
  {
    id: uuid(),
    name: "Carlo Bo",
    email: "Bocarlo@gmail.com",
    phone: "0451557774"
  },
  {
    id: uuid(),
    name: "Antonio Garcia",
    email: "agarciac@tinyurl.com",
    phone: "0058951611"
  },
  {
    id: uuid(),
    name: "Todd Rogers",
    email: "trogersd@mlb.com",
    phone: "0431453158"
  },
  {
    id: uuid(),
    name: "Debra Reyes",
    email: "dreyese@discovery.com",
    phone: "0030451182"
  },
  {
    id: uuid(),
    name: "Janice Daniels",
    email: "jdanielsf@odnoklassniki.ru",
    phone: "0927456278"
  },
  {
    id: uuid(),
    name: "Kenneth Woods",
    email: "kwoodsg@weather.com",
    phone: "0610653289"
  },
  {
    id: uuid(),
    name: "Terry Henry",
    email: "thenryh@unicef.org",
    phone: "0532951373"
  },
  {
    id: uuid(),
    name: "Steven Stanley",
    email: "sstanleyi@xrea.com",
    phone: "0114659167"
  },
  {
    id: uuid(),
    name: "Terry Hart",
    email: "thartj@g.co",
    phone: "0812456155"
  },
  {
    id: uuid(),
    name: "Bobby Larson",
    email: "blarsonb@wordpress.com",
    phone: "0188752639"
  }
];



class  App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      participants: participants
    }

    this.handleAddParticipant = this.handleAddParticipant.bind(this);
    this.handleRemoveParticipant = this.handleRemoveParticipant.bind(this);
    this.handleSortColumn = this.handleSortColumn.bind(this);
    this.handleEditParticipant = this.handleEditParticipant.bind(this);

  }

  handleAddParticipant(name, email, phone) {
    this.setState({
      participants: [
        {
          "id": uuid(),
          "name": name,
          "email": email,
          "phone": phone
        },
        ...this.state.participants
      ]
    });
  }

  handleRemoveParticipant(id) {
    var filteredArray = this.state.participants.filter((el) => el.id !== id);
    this.setState({
      participants: filteredArray
    });
  }

  handleSortColumn(key, order) {
    let sortedArray = [];
    if(order === "↓") {
      sortedArray = this.state.participants.sort((a, b) => {let itemA = a[key].toUpperCase(); let itemB = b[key].toUpperCase();
      return itemA > itemB ? 1 : (itemA < itemB ? -1 : 0)});
    }
    if(order !== "↓") {
      sortedArray = this.state.participants.sort((a, b) => {let itemA = a[key].toUpperCase(); let itemB = b[key].toUpperCase();
      return itemA < itemB ? 1 : (itemA > itemB ? -1 : 0)});
    }
    this.setState({
      participants: sortedArray
    });
  }

  handleEditParticipant(id, name, email, phone) {
    let index = this.state.participants.findIndex((el) => el.id === id);
    const { participants } = this.state;
    participants[index].name = name;
    participants[index].email = email;
    participants[index].phone = phone;
    this.setState({
      participants: participants
    });
  }

  render() {
    return (
      <div>
        <div className="wrapper">
        <Header />
          <div className="container p-32">
            <h3 className="list-title">List of Participants</h3>
            <AddParticipant handleAddParticipant={this.handleAddParticipant}/>
            <ParticipantList participants={this.state.participants} handleRemoveParticipant={this.handleRemoveParticipant} handleSortColumn={this.handleSortColumn} handleEditParticipant={this.handleEditParticipant}/>
          </div>
      </div>
      <footer className="main-footer">
        <p className="credits">Made by Elisa Bestetti | elisa.bestetti @ iki.fi | elisabestetti.net | 045 1359911</p>
      </footer>
    </div>
    );
  }
}

export default App;
