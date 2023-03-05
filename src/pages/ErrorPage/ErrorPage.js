import React from 'react';
import ErrorPhoto from '../../assets/img/error.jpg';

const ErrorPage = () => {
  return (
    <section className='section-error-page'>
        <img src={ErrorPhoto} alt="error" />
    </section>
  )
}

export default ErrorPage