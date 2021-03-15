import {useState, useEffect} from 'react';

import firebase from '../firebase';


export const useDataBase = endpoint =>{
//   firebase.auth().createUserWithEmailAndPassword('luccaspio890@gmail.com','123456')
// .then(user=>{

//   firebase.auth().onAuthStateChanged(user=>{
//     console.log(JSON.stringify(user))
//   })

// })


    const [data, setData] = useState(null)
    useEffect(()=>{
      const ref = firebase.database().ref(endpoint)
  
      ref.on('value', snap =>{
        
  
        const dataTransf = Object.keys(snap.val()).map(item=>{
          let itemSelected = snap.val()
          return {
            [item]:itemSelected[item]
          }
        })
  
        
        setData(dataTransf)
      })
      
      return ()=>  {
        ref.off()
      }
  
    },[endpoint])


    return {
        data
    }

}



export const useDataBasePush = endpoint => {

    const [status, setStatus] = useState(null)

    const save = data => {

        const ref = firebase.database().ref(endpoint)

        ref.push(data,error =>{

            if(error){
                setStatus('ERROR')
            }else{
                setStatus('SUCCESS')

            }

        })

    }

    return [
        save,
        status
    ]
        
    
}

export const useUpdateFire = ()=> {
  const [user, setUser]= useState(null)

  const userInfo =  firebase.auth().currentUser
  const display = async name => {
    try{
      const d = await  userInfo.updateProfile({
        displayName:name
      })
      console.log(d)
      setUser(d)
    }catch(error){
      setUser(error)
    }

  }

  return {user,display}

  
}