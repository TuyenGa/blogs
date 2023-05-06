import { React, useState, useEffect } from 'react'
import styled from 'styled-components'
const HorizontalBar = styled.div`
  color: #fff;
  top: 0;
  left: 0;
  z-index: 99;
  position: fixed;
  text-align: center;
  padding: 2px 0 2px 0;
  background: #1e90ff; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #ffff66, #1e90ff); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #ffff66,
    #1e90ff
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`
function ReadingIndicator() {
  const [indicator, setIndicator] = useState(0)
  const scroller = () => {
    var element = document.documentElement,
      top = element.scrollTop || document.body.scrollTop,
      height = element.scrollHeight || document.body.scrollHeight
    var calculate = (top / (height - element.clientHeight)) * 100
    setIndicator(calculate)
  }
  useEffect(() => {
    window.addEventListener('scroll', scroller)
    return () => window.removeEventListener('scroll', scroller)
  }, [indicator])
  return <HorizontalBar style={{ width: indicator + '%' }} />
}
export default ReadingIndicator
