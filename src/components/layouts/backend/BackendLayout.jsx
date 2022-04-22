import React from 'react'
import DocumentTitle from 'react-document-title'
import Footer from '../../shared/backend/Footer'
import Navbar from '../../shared/backend/Navbar'
import Sidebar from '../../shared/backend/Sidebar'

const BackendLayout = ({children , title="Dashboard"}) => {
  return (
      <>
        <DocumentTitle title={title + " | Smart Stock"} />
        <div className='wrapper'>
            <Sidebar />
            <div className='main'>
                <Navbar />
                <main className='content'>
                    <div className='content-fluid p-0'>
                        {children}
                    </div>
                </main>
                <Footer />
            </div>
        </div>
     </>
  )
}

export default BackendLayout