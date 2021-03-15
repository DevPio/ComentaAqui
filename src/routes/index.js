import {BrowserRouter as Router, Route} from 'react-router-dom';
import Comments from '../components/Comments'
import NovoComentario from '../components/NovoComentario';
import Header from '../components/Header'
import UserInfo from '../components/UserInfo'
function Routes({list}) {
    return (
        <>
        <Router>
            <Header></Header>
                <Route path='/' exact component={()=> <Comments commentsList={list}/>} />
                <Route path='/newComment' exact component={()=> <NovoComentario/>} />
                <Route path='/infoUser' exact component={()=> <UserInfo />}/>
        </Router>
        </>
    )
}

export default Routes;