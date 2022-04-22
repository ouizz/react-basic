import React from 'react'
import DocumentTitle from 'react-document-title'

const Pagenotfound = () => {
  return (
    <>
        <div className='bg-denger'>
            <div className='d-flex flex-column align-items-center justify-content-center vh-100'>
                <DocumentTitle title={'Page not Found | Smart Stock'} />
                <h1 className='card p-3'>404 page not found</h1>
            </div>
        </div>
    </>
  )
}

export default Pagenotfound