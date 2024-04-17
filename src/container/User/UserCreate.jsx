import React from 'react'
import Layout from '../../components/Layout'
import PageBar from '../../components/PageBar'
import MyForm from '../../components/MyForm'
const UserCreate = () => {
  return (
    <Layout>
      <div className="cities__main">
        {/* <PageBar page={page} handleOnClick={handleClickPageBar}/> */}
        <div className="cities__main__title">
          <h1>Create User</h1>
        </div>
        <MyForm/>
      </div>
    </Layout>
  )
}

export default UserCreate