import React,{useEffect,useState,useContext} from 'react';
import { FirebaseContext } from '../../Store/Context';
import { PostContext } from '../../Store/PostContext';

import './View.css';
function View() {

  const [userDetails, setUserDetails] = useState()
  const {postDetails} = useContext(PostContext)
  const {firebase} = useContext(FirebaseContext)
  useEffect(()=>{
    const {userId} = postDetails
    firebase.firestore().collection('users').where('id','==',userId).get().then((res)=>{
      res.forEach(doc => {
        setUserDetails(doc.data())
      })
    })
  },[postDetails,firebase])
  return (
    <div className="viewParentDiv">
     {postDetails && <div className="imageShowDiv">
        <img
          src={postDetails.url}
          alt=""
        />
      </div>}
      <div className="rightSection">
        {postDetails && <div className="productDetails">
          <p>&#x20B9; {postDetails.price} </p>
          <span>{postDetails.name}</span>
          <p>{postDetails.category}</p>
          <span>{postDetails.createdAt}</span>
        </div>}
        {userDetails && <div className="contactDetails">
          <p>Seller details</p>
          <p>N</p>
          <p>1234567890</p>
        </div>}
      </div>
    </div>
  );
}
export default View;
