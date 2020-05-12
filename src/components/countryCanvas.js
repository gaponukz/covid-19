import React, {Component} from 'react'

export default class Canvas extends Component { // 900 x 380
    render() {
        return (
            <div> 
                <canvas className="my-4 w-100" id={this.props.id} 
                width={this.props.width} height={this.props.height}></canvas>
            </div>
        )
    }
}