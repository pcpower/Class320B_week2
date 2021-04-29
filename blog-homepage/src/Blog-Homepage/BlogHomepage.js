import React, { Component } from 'react';
import "./Blog.css";
import { BlogData } from './BlogData'


class BlogHomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Blogs: [
                ''
            ]
        };
    }

    

    render() {
        
        return (
            <>
            <header className="header">
                <h2>For you</h2>
            </header>
        
            <div className="blog-container">
                {BlogData.map((BlogData, key) => {
                    return (
                        <div key={key}>

                            
                          
                            <img src={BlogData.image} />
                                <h5>
                                {BlogData.title} {BlogData.description}
                                
                                </h5>
                                        <a href={BlogData.link}>Read More</a>
                                <h5>
                                    <img src={BlogData.author.image}/>                            
                                </h5>
                            <h3>
                                {BlogData.author.name}
                                
                            </h3>                             
                        </div>

                    );
                })}
                
            </div>
        </>
        )
    }
}

export default BlogHomePage