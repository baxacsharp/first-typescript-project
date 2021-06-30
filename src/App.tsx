import Home from './components/Home';
import { Component } from 'react';
import { useState,useEffect,ChangeEvent,FormEvent } from 'react';
import CardtRacks from './components/cardTracks';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//     {/* //   <header className="App-header"> */}
//         <Home />
//       {/* // </header> */}
//     </div>
//   );
// }
interface appStateInterface{
  searchInput: string
  resultsQuery: []
}
class App extends Component<{}, appStateInterface>{
   state:appStateInterface ={
      searchInput:'',
      resultsQuery:[]
    }
    onQyeryChange =(e:ChangeEvent<HTMLInputElement>)=>{
      this.setState({searchInput:e.target.value})
    }
    onHandleSubmit=async(e:FormEvent<HTMLFormElement>)=>{
      e.preventDefault()
      try {
         const response= await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${this.state.searchInput}`)
        const data =await response.json()
        this.setState({resultsQuery:data})
        console.log(this.state.resultsQuery)
      } catch (error) {
        console.log(error)
      }
    }
    // async componentDidMount () {
    //   try {
    //     const response= await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${this.state.searchInput}`)
    //     const data =await response.json()
    //     this.setState({resultsQuery:data})
    //   } catch (error) {
    //     console.log(error)
    //   }
    // }

    // const [resultsQuery,setResultsQuery] = useState
  render(){
  
    return(
      <div>
        <Home search={this.state.searchInput} results={this.state.resultsQuery} handleSubmit={this.onHandleSubmit} handleQuery={this.onQyeryChange} />
        <CardtRacks results={this.state.resultsQuery} />
      </div>
    )
  }
}
export default App;
