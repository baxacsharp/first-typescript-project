import { ChangeEvent, Component, FormEvent } from "react";
import {Navbar,Nav,Button,Form,FormControl} from 'react-bootstrap'

interface HomeProps {
    search: string
    results:(string | number)[]
    handleSubmit: (e: FormEvent<HTMLFormElement>) => Promise<void>
    handleQuery: (e: ChangeEvent<HTMLInputElement>) => void
}
class Home extends Component<HomeProps> {

    render(){
        return(
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                
                    </Nav>
                    <Form inline onSubmit={this.props.handleSubmit}>
                    <FormControl 
                    type="text"
                    placeholder="Search"
                    className="mr-sm-2"
                    value ={this.props.search}
                    onChange={this.props.handleQuery}
                       />
                    
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
export default Home