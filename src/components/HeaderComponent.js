import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  Jumbotron,
  Nav,
  NavbarToggler,
  Collapse,
  NavItem,
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import { NavLink } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggleNav = this.toggleNav.bind(this);
    this.state = {
      isNavOpen: false,
      isModalOpen: false,
    };

    this.toggleModal = this.toggleModal.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

  handleLogin(event) {
    this.toggleModal();
    alert(
      "Full Names : " +
        this.fullname.value +
        " | Username: " +
        this.username.value +
        " | Password: " +
        this.password.value +
        " | Remember: " +
        this.remember.checked
    );
    event.preventDefault();
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <Navbar dark expand="md">
            <div className="container">
              <NavbarToggler onClick={this.toggleNav} />

              <Collapse isOpen={this.state.isNavOpen} navbar>
                <Nav navbar>
                  <NavItem>
                    <NavLink className="nav-link" to="/home">
                      <span className="fa fa-home fa-lg"></span> Home
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="nav-link" to="/aboutus">
                      About Us
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="nav-link" to="/menu">
                      Menu
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="nav-link" to="/contactus">
                      Contact Us
                    </NavLink>
                  </NavItem>
                </Nav>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <Button
                      outline
                      onClick={this.toggleModal}
                      style={{ backgroundColor: "#dedede" }}
                    >
                      <span className="fa fa-sign-in fa-md"></span> Register Now
                    </Button>
                  </NavItem>
                </Nav>
              </Collapse>
            </div>
          </Navbar>
          <Jumbotron>
            <div className="container">
              <div className="row row-header">
                <div className="col-12 col-sm-6">
                  <h1>The Spici Restaurant</h1>
                  <p>
                    A spice is a seed, fruit, root, bark, or other plant
                    substance primarily used for flavoring or coloring food.
                    Spices are distinguished from herbs, which are the leaves,
                    flowers, or stems of plants used for flavoring or as a
                    garnish!
                  </p>
                </div>
              </div>
            </div>
          </Jumbotron>
          <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
            <ModalHeader toggle={this.toggleModal}>
              Register to order food
            </ModalHeader>
            <ModalBody>
              <Form onSubmit={this.handleLogin}>
                <FormGroup>
                  <Label htmlFor="fullname">Full Names</Label>
                  <Input
                    type="text"
                    id="fullname"
                    name="fullname"
                    innerRef={(input) => (this.fullname = input)}
                  />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="username">Username</Label>
                  <Input
                    type="text"
                    id="username"
                    name="username"
                    innerRef={(input) => (this.username = input)}
                  />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="password">Password</Label>
                  <Input
                    type="password"
                    id="password"
                    name="password"
                    innerRef={(input) => (this.password = input)}
                  />
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input
                      type="checkbox"
                      name="remember"
                      innerRef={(input) => (this.remember = input)}
                    />
                    Remember me
                  </Label>
                </FormGroup>
                <Button type="submit" value="submit" color="success">
                  Login
                </Button>
              </Form>
            </ModalBody>
          </Modal>
        </div>
      </React.Fragment>
    );
  }
}

export default Header;
