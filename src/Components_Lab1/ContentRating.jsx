import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
  constructor() {
    super();
    this.state = {
        likes: 0,
        dislikes: 0,
        totalRatings: 0,
      handleLike:() => {
        this.setState((prevState) => ({
            likes: prevState.likes + 1,
            totalRatings: prevState.totalRatings + 1
          }));
      },
      handleDislike:() => {
        this.setState((prevState) => ({
            dislikes: prevState.dislikes + 1,
            totalRatings: prevState.totalRatings + 1
          }));
      }
      };
  }
  render() {
    return (
     <>
     <h1>Text Content Rating</h1>
     <div className='content-rating'>
        <p>Natural language processing (NLP) is the processing of natural language information by a computer. 
            The study of NLP, a subfield of computer science, 
            is generally associated with artificial intelligence. 
            NLP is related to information retrieval, knowledge representation, 
            computational linguistics, and more broadly with linguistics.
            Major processing tasks in an NLP system include: speech recognition, 
            text classification, natural language understanding, and natural language generation.
            <a href='https://en.wikipedia.org/wiki/Natural_language_processing'>Sourced from Wikipedia</a>
            </p>

        <div className='rating-buttons'>
        <button className="like-button" onClick={this.state.handleLike}>
            Like ({this.state.likes})
          </button>
          <button className="dislike-button" onClick={this.state.handleDislike}>
            Dislike ({this.state.dislikes})
          </button>
          <p>Total Ratings: {this.state.totalRatings}</p>
        </div>

     </div>
     </>
    );
  }
}

export default ContentRating;