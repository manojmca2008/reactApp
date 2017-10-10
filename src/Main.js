import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Invoice from './components/invoice/Invoice';
import customerDetailForm from './components/invoice/customer-detail-form';
import addLogoForm from './components/invoice/add-logo-form';

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Switch>
      <Route path='/invoice' component={Invoice}/>
      <Route path='/create' component={customerDetailForm}/>
      <Route path='/add/photo' component={addLogoForm}/>
    </Switch>
  </main>
)

export default Main
