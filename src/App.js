import axios from 'axios';
import React from 'react';
import './App.css'
import Date from './components/Date';

class App extends React.Component{

  state = {quote:''};

  componentDidMount(){
      this.fetchQuote();
  }

  fetchQuote = () => {
    axios.get('https://api.adviceslip.com/advice').then((response) => {
      const {advice} = response.data.slip;
      this.setState({quote:advice});
      
    })
    .catch((err) =>{
      console.log(err);
    });
  }


  render(){
    const {quote} = this.state;
    return ( 
      <div className='app'>
        <div className='content-card'> 
          <div className='heading'>
            <h1>Hello Ayush!</h1>
            <h5><Date /></h5>
          </div>
            <h3>{quote}</h3>
        </div>
      </div>
    );
  }
}

export default App;