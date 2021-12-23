/*
 * @Description: 
 * @version: 
 * @Author: simpletoyou
 * @Date: 2021-12-23 14:08:22
 * @LastEditors: simpletoyou
 * @LastEditTime: 2021-12-23 14:22:52
 */
import React from "react";

function Test(props) {
  // es6 解构赋值
  const { title,changeTitle } = props

  return (
    <div>
      <h4>{title}</h4>
      <button onClick={()=>{changeTitle('Change the Title again')}}>Change title</button>
    </div>
  )
}

export default Test
