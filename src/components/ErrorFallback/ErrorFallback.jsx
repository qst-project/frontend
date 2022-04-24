import React from 'react';

export default ({error, resetErrorBoundary}) => {
  return (
    <div role="alert">
      <p>Something went wrong:</p>

      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  )
}
