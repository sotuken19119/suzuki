import React, { Component } from 'react'

const mydata = 'sampleApp';
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      content: '',
      name: '',
    }
    this.handleFormInputChanged = this.handleFormInputChanged.bind(this)
  }
 
  handleFormInputChanged(event) {
    this.setState({
      [event.target.name]: event.target.value,
    })
    //データの保存
    //第一 key これで出し入れする
    //第二　content 保存するデータ
    localStorage.setItem(mydata, JSON.stringify(this.state.content));
  }

  getItem(){
    //データの取得
    //keyでほしいじょうほうの取得
    
    let aa = JSON.parse(localStorage.getItem(mydata));
    this.setState({name: aa});
  }

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <div>サンプル</div>
        <textarea
          name="content"
          value={this.state.content}
          onChange={this.handleFormInputChanged}
          style={{
            width: '400px',
            height: '300px',
            fontSize: '15px',
          }}
        />
        <button onClick={()=>this.getItem()}>get</button>
        <div style={{ marginTop: '10px' }}>{this.state.content}</div>
        <div style={{ marginTop: '20px' }}>{this.state.name}</div>
      </div>
    )
  }
}
 
export default App
