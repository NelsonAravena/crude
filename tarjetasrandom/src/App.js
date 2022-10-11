import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table, Button, Container, Modal, ModalBody, ModalHeader, FormGroup, ModalFooter} from 'reactstrap';

const data = [
  {id: 1, personaje: "Maria", juego: "Silent hill 2"},
  {id: 1, personaje: "James", juego: "Silent hill 2"},
  {id: 1, personaje: "Harry", juego: "Silent hill 1"},
  {id: 1, personaje: "Heather", juego: "Silent hill 3"}

]

console.log(data)

class App extends React.Component{
state = {
  data: data,
  form:{
    id:'',
    personaje:'',
    juego:'',
  },
  modalinsertar : false,
};

handleChange = e =>{
this.setState({
  form:{
    ...this.state.form,
    [e.target.name]: e.target.value,
  }
})
}

mostrarmodalinsertar = () =>{
  this.setState({modalinsertar: true})
}

cerrarmodalinsertar = () =>{
  this.setState({modalinsertar: false})
}

  render (){
    return(
      <> 
      <Container>
      <br />
      <button color='primary' onClick={this.mostrarmodalinsertar} >insertar nuevo personaje</button>
      <br /><br />
    {/*-----------CREACION DE LA TABLA----------*/}
      <Table>
        <thead><tr><th>id</th>
        <th>personaje</th>
        <th>juego</th>
        <th>Acciones</th></tr></thead>
        <tbody>
          {this.state.data.map((elemento)=>(
            <tr>
              <td>{elemento.id}</td>
              <td>{elemento.personaje}</td>
              <td>{elemento.juego}</td>
              <td><Button color = "primary">Editar</Button>{"  "} o
              <Button color = "danger">Eliminar</Button></td>
            </tr>
          ))}
        </tbody>
      </Table>
      </Container>

      
{/*--------------CREACION VENTANA DE INSERTACION DE NUEVO ITEM-----------*/}

      <Modal isOpen={this.state.modalinsertar}>
        <ModalHeader>
          <div>
            <h1>Insertar registro</h1>
          </div>
        </ModalHeader>

        <ModalBody>
          <FormGroup>
            <label>Id</label>
            <input className='form-control' readOnly type = "text" value={this.state.data.length+1}/>
          </FormGroup>

          <FormGroup>
            <label>Personaje</label>
            <input className='form-control' name ="personajes" type="text" onChange={this.handleChange} />
          </FormGroup>

          <FormGroup>
            <label>Juego</label>
            <input className='form-control' name ="personajes" type="text" onChange={this.handleChange}/>
          </FormGroup>
        </ModalBody>

        <ModalFooter>
          <Button color ="primary">insertar</Button>
          <Button color ="danger" onClick={this.cerrarmodalinsertar}>cancelar</Button>
        </ModalFooter>
      </Modal>
      </>
    )
  }

}


export default App;
