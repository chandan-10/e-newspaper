import React, { Component } from "react";
import NewsItem1 from "./NewsItem1";
import Spinner1 from "./Spinner1";
import PropTypes from 'prop-types'


export default class Newsbox extends Component {
 
  static defaultProps = {
    category : 'general',
    country : 'in'
  }

  static propTypes = {
    category : PropTypes.string,
    country : PropTypes.string,
  }

  constructor() {
    super();
    this.state = {
      articles: [],
      page:1,
      totalResults:0,
      loading:false
    };
  }
  
  async componentDidMount(){
    this.props.setProgress(10)
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=18`
    this.props.setProgress(20)
    this.setState({loading:true})
    let data = await fetch(url)

    let parsedData = await data.json()
    this.props.setProgress(100)

    console.log(parsedData)
    this.setState({articles : parsedData.articles,totalResults:parsedData.totalResults,loading:false})

    // this.updateNews()
  }
  handlePrevClick=async()=>{
    this.props.setProgress(10)
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page-1}&pageSize=18`
    this.props.setProgress(20)
    this.setState({loading:true})
    let data = await fetch(url)
    let parsedData = await data.json()
    this.props.setProgress(100)
    console.log(parsedData)
    this.setState({page:this.state.page-1,articles : parsedData.articles,loading:false})
    
  }
  handleNextClick=async()=>{
    this.props.setProgress(10)
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page+1}&pageSize=18`
    this.props.setProgress(20)
    this.setState({loading:true})
    let data = await fetch(url)
    let parsedData = await data.json()
    this.props.setProgress(100)
    console.log(parsedData)
    this.setState({page:this.state.page+1,articles : parsedData.articles,loading:false})
    
    
  }
  render() {
    return (
      [
      <div
        className="container"
        id="NewsBox"
        style={{ backgroundcolor: "black" ,marginTop:"60px"}}
      >
        <strong behavior="" direction=""><div id="headline">        
          <h1 className="text-center my-4">Top {this.props.category} Head-Lines</h1>
       </div>
        </strong>
        {this.state.loading && <Spinner1/>}
        <div className="row " id="rowDiv">
          {!this.state.loading && this.state.articles.map((element) => {
            return (
              
              <div className="col-md-4" return key={element.url}>
                
                <NewsItem1
                  title={element.title?element.title.slice(0, 30):""}
                  description={element.description?element.description.slice(0, 45):""}
                  url={element.urlToImage}
                  newsURL={element.url}
                  author={element.author}
                  time={element.publishedAt}
                  source={element.source.name}
                />
              </div>
            );
          })}
        </div>
        {!this.state.loading && <div className="container d-flex justify-content-between mb-4">
        <button disabled={this.state.page<=1}type="button" class="btn btn-primary " onClick={this.handlePrevClick}>Previous</button>
        <button disabled={this.state.page+1 >Math.ceil(this.state.totalResults/18)} type="button" class="btn btn-primary" onClick={this.handleNextClick}>Next</button>

        </div>}
      </div>]
    );
  }
}
