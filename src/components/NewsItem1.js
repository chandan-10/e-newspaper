import React, { Component } from "react";
import newsLogo from './newsLogo.jpeg'

export default class Newsitem extends Component {
  
  render() {
    let {title,description,url,newsURL,author,time,source} = this.props;
    return (
      <div id="NewsItem" className="container mt-3 mb-3">
                <span className="badge badge-danger">{source}</span>
                

        <div className="card shadow"  >
          
        <img src={!url?newsLogo:url} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title"><strong>{title}</strong>.....</h5>
          <p className="card-text">{description}.....</p>
          <p className="card-text"><b>Author :</b> {author?author:"Unknown"}</p>
          <p className="card-text"><b>Last Updated :</b> {new Date(time).toGMTString()}</p>
          <a href={newsURL} target="__blank" className="btn btn-danger" id="readMore">ReadMore</a>
        </div>
      </div>
      </div>
    );
  }
}
