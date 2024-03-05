function Square(params) {
  return (
    <div className="square" onClick={params.click}>{params.value}</div>
  )
}

export default Square;