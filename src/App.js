import React, { Component } from 'react';
import './App.css';
import NavBar1 from './components/NavBar1';
import NewsBox1 from './components/NewsBox1';
import {BrowserRouter , Routes,Route} from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'
import Weather from './Weather';


class App extends Component {
  apiKey = process.env.REACT_APP_NEWS_APIKEY
  state ={
    progress:0
  }
  setProgress =(progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (
     <div id='main'>
       <LoadingBar
        height={5}
        shadow="true"
        background='3'
        color='white'
        progress={this.state.progress}
        onLoaderFinished={() => this.setProgress(0)}
      />
      <NavBar1/>
      <BrowserRouter>
        <Routes>
          <Route index element ={<NewsBox1 setProgress={this.setProgress} category="general" apiKey={this.apiKey} country="in"/>}/>
          <Route path="/sports" element ={<NewsBox1 setProgress={this.setProgress} key="sports" apiKey={this.apiKey} category="sports" country="in"/>}/>
          <Route path="/business" element ={<NewsBox1 setProgress={this.setProgress} key="business" apiKey={this.apiKey} category="business" country="in"/>}/>
          <Route path="/entertainment" element ={<NewsBox1 setProgress={this.setProgress} key="entertainment" apiKey={this.apiKey} category="entertainment" country="in"/>}/>
          <Route path="/science" element ={<NewsBox1 setProgress={this.setProgress} key="science" apiKey={this.apiKey} category="science" country="in"/>}/>
          <Route path="/health" element ={<NewsBox1 setProgress={this.setProgress} key="health" apiKey={this.apiKey} category="health" country="in"/>}/>
          <Route path="/technology" element ={<NewsBox1 setProgress={this.setProgress} key="technology" apiKey={this.apiKey} category="technology" country="in"/>}/>
          <Route path="/general" element ={<NewsBox1 setProgress={this.setProgress} key="general" apiKey={this.apiKey} category="general" country="in"/>}/>

          <Route path="/weather" element ={<Weather setProgress={this.setProgress}/>}/>
          
        </Routes>
      </BrowserRouter>
   
     </div>
    );
  }
}

export default App;
