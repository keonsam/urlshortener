const Header = () => {
    return (
    <div>
     <header>
      <h1>Keon Samuel Url Shortener Microservice</h1>
     </header>
    </div>
  );
}

class Body extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      input: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    })
  }
  render() {
    return (
     <div>
        <main>
          <h3>How to use:</h3>
          <p>Please enter the url in the input field and the shorten url will appear to the right.</p>
          <h3> Example output </h3>
          <p>Enter the shorten url in the url search box at the end of this website url with a slash.</p>
          <p>url/34y</p>
          <form method="post" action="../form">
           <label htmlFor="Enter Url">Enter Url:</label><br/>
           <input name="str" type="text" onChange={this.handleChange} value={this.state.input}/>
           <button className="btn btn-primary" type="Submit">Submit</button>
          </form>
        </main>
     </div>
    );
  }
}

const Footer = () => {
  return (
   <div className="footer">
        <span>© Written & Coded by Keon Samuel</span>
        <div className="icons">
         <a href="https://www.linkedin.com/in/keon-samuel-371a6aab/" target="_blank"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a>
         <a href="https://www.freecodecamp.com/keonsam"><i className="fa fa-free-code-camp" aria-hidden="true" target="_blank"></i></a>
         <a href="https://plus.google.com/u/0/114820644259483346360"><i className="fa fa-google-plus" aria-hidden="true" target="_blank"></i>
</a>
         <a href="https://codepen.io/keonsamuel/">
         <i className="fa fa-codepen" aria-hidden="true" target="_blank"></i></a>
        </div>
   </div>
  );
}

const App = () =>{
  return (
   <div>
      <Header />
      <Body />
   </div>
  )
}
ReactDOM.render(<App />, document.getElementById('app'));
ReactDOM.render(<Footer />, document.getElementById('footer'));
