
import './App.css';
import SignUp from './Components/SignUp';
import { Container } from 'react-bootstrap';
import { AuthProvider } from './Context/AuthContext';
import Login from './Components/Login';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Dashboard from './Components/Dashboard';
import Update from './Components/Update';

function App() {
  return (
    <AuthProvider>
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh"}}>
      <div className="w-100" style={{maxWidth: '400px'}}>
 
<Router>
  <Switch>
    <Route path="/signup" component={SignUp} />
    <Route exact path="/" component={Dashboard} />
    <Route path="/login" component={Login} />
    <Route path="/update" component={Update} />
  </Switch>
</Router>
  </div>
    </Container>
    </AuthProvider>
  )
}

export default App;
