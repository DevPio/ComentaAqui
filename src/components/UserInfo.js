import React,{useContext, useState} from 'react'
import {AuthContext} from '../auth'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import 
{
    Container,
    Form,
    FormGroup,
    Label,
    Input,
    FormText,
    Button
}
from 'reactstrap'
import {useUpdateFire} from '../Hooks/useDataBase'
toast.configure()
 function UserInfo() {
     const auth = useContext(AuthContext)
     const [edit, setEdit] = useState(true)
     const [displayName, setDisplayName] = useState('')
    const { user ,display }  = useUpdateFire()

   
     const editUser = async event =>{
        event.preventDefault()

        if(displayName){
          try {
            await display(displayName)
            toast.success("Nome alterado com sucesso",{position:toast.POSITION.TOP_LEFT})
          }
           catch(error){

           }
        }
        
     }
     const warning = ()=> {

        if(!auth.authUser.displayName){
            return (
                <FormText >Seu nome de Usuário ainda nao esta definido, clique em editar para definir o seu nome.</FormText>
            )
        }

        return null
     }

    return (
        <Container style={{marginTop:'40px'}}>
            <Form>
                <FormGroup>
                    <Label>E-mail</Label>
                    <Input type="email" value={auth.authUser ? auth.authUser.email : ''} disabled={true} />
                </FormGroup>

                <FormGroup>
                    <Label>Nome</Label>
                    <Input type="text" 
                    value={!edit ? displayName : auth.authUser ? auth.authUser.displayName :''} 
                    disabled={edit} 
                    onChange={event=> setDisplayName(event.target.value)}
                    
                    />
                    {auth.authUser &&
                    warning()
                    }
                </FormGroup>

                    <Button onClick={editUser} style={{marginRight:'4px'}}>Atualizar</Button>
                    <Button onClick={()=>setEdit(!edit)}>{edit ? 'Editar' : 'Editando'}</Button>
            </Form>
        </Container>
    )
}


export default UserInfo;