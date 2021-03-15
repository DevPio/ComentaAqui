import React,{ useState, useContext} from 'react'
import {Container ,Form, FormGroup, Label, Input , Button } from 'reactstrap';
import {useDataBasePush} from '../Hooks/useDataBase'
import firebase from '../firebase';
import {AuthContext} from '../auth'
function NovoComentario() {
    
    const [textAreaValue, settextAreaValue] = useState('')
    const [save, status] = useDataBasePush('comentarios')

    const auth = useContext(AuthContext);

    let displayName = ""
    let email = ""
    let id = ""
    if (auth.authUser) {
        displayName = auth.authUser.displayName
        id = auth.authUser.uid
        email = auth.authUser.email.split('@')[0]
       
        
    }
    
   

    const senData = event => {
        event.preventDefault()
        if(textAreaValue){
            save({
                comments:textAreaValue,
                createdAt:firebase.database.ServerValue.TIMESTAMP,
                user:{
                    id:id,
                    name: displayName || email
                }
                
            })
        }
    }

    

    if (auth.authUser) {
        
        if(!auth.authUser.email){
            
            return null
        }
    }

    return (
        <Container style={{marginTop:'40px'}}>
          
            <Form onSubmit={senData} >
            <FormGroup>
                <Label >Novo Comentário</Label>
                <Input 
                    type='textarea' 
                    value={textAreaValue} 
                    onChange={(event)=> settextAreaValue(event.target.value)}
                    invalid={!textAreaValue} 
                
                />
            </FormGroup>
                <Button >Enviar</Button>
            </Form>
        </Container>
    )
}


export default NovoComentario;