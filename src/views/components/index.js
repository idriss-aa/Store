import React, { Fragment, useState, useEffect } from 'react';
import { Navbar  } from '../../components'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { CartPage } from './Cart'
import { Home } from './Home'
import '../../styles/App.css'
import { list } from '../../data'
import { Checkout } from './Checkout';
import UserContextProviderfrom from '../../lib/UserProfileContext';
import { Confirm } from './Confirm';

const App = (props) => {
  const { items, onSaveCart } = props
  const [category, setCategory] = useState(0)
  const [isFiltering, setFiltering] = useState(false)
  const [filtered, setFiltered] = useState(false)
  const [count, setCount] = useState(1);
  const loadCategory = i => {setCategory(i)}
  const filterResults = input => {
    let fullList = list.flat()
    let results = fullList.filter(item => {
      const name = item.name.toLowerCase()
      const term = input.toLowerCase()
      return name.indexOf(term) > -1
    })
    setFiltered(results)
  }
  useEffect(()=> {
    onSaveCart(items)
  }, [items])



  return (
    <Fragment>
      <Router>
       <UserContextProviderfrom>
      <Navbar filter={filterResults} setFiltering={setFiltering} count={count}/>
      
          {/* Routes */}
          <Route exact path="/" component={() => <Home 
                                                      category={category} 
                                                      loadCategory={loadCategory} 
                                                      count={count} 
                                                      list={list}
                                                      isFiltering={isFiltering}
                                                      filtered={filtered}/>
                                                    }/>
          <Route path="/cart" component={CartPage}/>
          <Route path="/checkout" component={Checkout} />
          <Route path="/delivery" component={Confirm} />
        </UserContextProviderfrom>
       </Router>
    </Fragment>
  );
}
export default App;
