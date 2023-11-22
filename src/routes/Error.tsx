import React from 'react'
import { useRouteError, isRouteErrorResponse } from 'react-router-dom'
import './Error.scss'

function Error() {
    const error = useRouteError();
    console.error(error);

    if (isRouteErrorResponse(error)) {
        return (
          <div className='error'>
            <h1>Oops!</h1>
            <h2>{error.status}</h2>
            <p>{error.statusText}</p>
            {error.data?.message && <p>{error.data.message}</p>}
          </div>
        );
      } else {
        return <div>Oops</div>;
      }
}

export default Error