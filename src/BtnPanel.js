import React, { Component } from 'react';
import Btn from './Btn'

class BtnPanel extends Component {
  render() {
    let btns = [
        {kid: 1, text: '时间流动', color:'#9D42E1'},
        {kid: 2, text: '新的世纪', color:'#9D42E1'},
        {kid: 3, text: '时间静止', color:'#9D42E1'},
        {kid: 4, text: '加速更替', color:'#26D0D0'},
        {kid: 5, text: '正常更替', color:'#26D0D0'},
        {kid: 6, text: '缓慢更替', color:'#26D0D0'}
    ]
    return (
        <div className="game_btns">
            {
                btns.map((btn) => {
                    return (
                        <Btn key={btn.kid} {...btn} />
                    )
                })
            }
        </div>       
    );
  }
}

export default BtnPanel;
