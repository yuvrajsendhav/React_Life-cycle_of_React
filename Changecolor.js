import React from "react"
export class Changecolor extends React.Component
{
    constructor()
    {
      super()
      this.state = {
        color: 'blue'
      }
    }
    First = (newColor) => {
      this.setState({
        color: newColor
      })
    }
    componentDidMount() 
    {
      this.timer = setTimeout(
        () => this.First('red'),1000*3)
    }
    componentDidUpdate()
    {
        this.timer = setTimeout(
        () => this.First('yellow'),4000);
    }
    componentWillUnmount() 
    {
      clearTimeout(this.timer)
    }
    render() {
      return (
        <div id="size" style={ { background: this.state.color} }>
          <h1>Changing Color</h1>
        </div>
      )
    }
  }