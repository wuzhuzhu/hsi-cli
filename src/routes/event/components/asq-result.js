import React from 'react'
import ResultPage from '../../../components/result-page'

export default function AsqRes() {
  return (
    <ResultPage
      title="提交成功"
      redirectTo="/"
      message={
        <div>
          <p>感谢您的耐心填写</p>
          <p>您的认可是我们最大的动力！</p>
        </div>
      }
    />
  )
}
