import React,{ useContext } from 'react'

import 
{
    Container,
    Card,
    CardTitle,
    CardText,
    CardHeader,
    CardBody

}
from 'reactstrap'
import {dateConvert} from '../utils/date'


 function Comments({commentsList}) {

   
    
    
     
        return (
            <>
                <Container>
                  
                    {commentsList &&
                        commentsList.map((item,index)=> {
                           return Object.keys(item).map(list=>{
                               
                                return(
                                <Card style={{marginTop:'20px',marginBottom:'10px'}} key={item+list}  outline color="secondary">
                                    <CardHeader style={{margin:'0px'}}>
                                        <h6>Feito Por:</h6>
                                        <CardTitle>{commentsList[index][list].user.name}</CardTitle>
                                    </CardHeader>
                                    <CardBody>
                                       
                                        <h6>Comentário:</h6>
                                        <CardText>{commentsList[index][list].comments}</CardText>
                                    </CardBody>
                                    <CardBody>
                                       
                                        <h6>Criado em:</h6>
                                        <CardText>{dateConvert(commentsList[index][list].createdAt).day}</CardText>
                                    </CardBody>
                                    
                                </Card>
                                )
                            })
                            
                        })
                    }

                    
                </Container>
              
            </>
        )
     
}


export default Comments;