import AvailableItems from '../Layout/Layout/Availableitems';
import classes from './Store.module.css'

const Store=(props)=>{
    return<div className={classes.body}>
        <h1 className={classes.music}>Music Albums</h1>
        <AvailableItems/>
      
        </div>
        
    
}
export default Store;