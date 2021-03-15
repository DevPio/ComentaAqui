import { createContext , useEffect,useState} from 'react'
import firebase from './firebase'

export const AuthContext = createContext()

const useAuth = ()=> {

    const [authUser, setauthUser] = useState(null)
    useEffect(()=>{

        firebase.auth().onAuthStateChanged(currentUser=> {
            if(currentUser){
                setauthUser(currentUser)
            }else{
                setauthUser(null)
            }
        })
    },[])
    


    return {
        authUser
    }

}

export const useCreateUser = ()=>{
    const [succesOrError, setsuccesOrError] = useState({
        success:'',
        error:''
    })

    const create = async dataUser => {
       
        try{
            const responseUser =  await firebase.auth().createUserWithEmailAndPassword(dataUser.email, dataUser.password)

            if(responseUser){


                setsuccesOrError({
                    success:true,
                    ...succesOrError
                    
                })
            }
            
        }catch(error){
            setsuccesOrError({
                ...succesOrError,
                error:true,
                
            })
        }
       
    }


    return {
        succesOrError,
        create
    }
}

export const AuthComponent = ({children}) => {
    
    let { authUser} = useAuth()

    let {succesOrError, create} = useCreateUser()

    return (
        <AuthContext.Provider value={{authUser, createUserFC:{
            succesOrError,
            create
        }}}>
           
            {children}
        </AuthContext.Provider>
    )
}

    



