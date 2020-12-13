import React from 'react';
import './App.css'


class App extends React.Component {

  constructor(){
    super();
    this.state =  {
      fullName:"Abdoussalam boujemboura",
      bio:"Led by Creative Director and Designer Xavier Cussó, we help our clients stand out by combining first-class design & out of the box creativity with solid brand understanding, thoughtful UX, tasteful animation, technical innovation and optimal performance.",
      imgSrc:"/johnDoe.jpg",
      profession:"Blombier",
      show:false,
      count:0,
      intervall: null,
      timer:0
    }

  }
  hideShow = () => {
      this.setState({
        //count: this.state.count + 1;
        show: !this.state.show
      });
    };
  componentDidUpdate() {
    //console.log(this.state.show);
    //console.log(this.state.count);
  }
  componentDidMount() {
    console.log("Component did Mount()");
    // console.log(this.state.isVisible);
    // console.log(this.state.counter);
    this.setState({
      intervall: setInterval(
        () => this.setState({ timer: this.state.timer + 1 }),
        1000
      )
    });
  }

  render(){
    return (
      <div className="App">
        <button onClick={this.hideShow}>{this.state.show ? "Cacher Profil" : "Afficher Profil"}</button><br/>
        
        <span  style={{fontWeight:700, fontSize:70, color:"#61dafb"}}>{this.state.timer}</span>
        
        { this.state.show && 
        <header className="App-header" style={{display:'flex',flexDirection:'row'}}>
          <div>
          <img src={this.state.imgSrc} alt="jalel"/>
          <figcaption>Je suis {this.state.profession}</figcaption>
          </div>
          <div  style={{maxWidth:700, textAlign:"left",marginLeft:50}}>
          <img src='logoto.png' className="App-logo" alt="logo" />
          <h1>
            Je m'appel : {this.state.fullName}
          </h1>
          <p>
          {this.state.bio}<br/>
          </p>
          </div>
        </header>  }
        
      </div>
    );
  }
}

export default App;
