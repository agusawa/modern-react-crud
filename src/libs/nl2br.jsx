import React from 'react'

export default string => string.split('\n').map((item, key) => <React.Fragment key={key}>{item}<br /></React.Fragment>)
