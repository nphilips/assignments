import React, { Component } from 'react';

class PostProvider extends Component {
    constructor(){
        super()
        this.state={

        }
    }
    render() {
        return (
            <div>
                <PostContext.Provider>
                    {this.props.children}
                </PostContext.Provider>
            </div>
        );
    }
}

export default PostProvider;

export const withPost = C => props=> (
    <PostContext.Consumer>
        {value => <C {...props} {...value}/>}
    </PostContext.Consumer>
)