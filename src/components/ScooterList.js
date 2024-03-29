import { Link } from 'react-router-dom';
// import Button from 'react-bootstrap/Button';
import { Stack } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup';



const ScooterList = ({scooters, onScooterClick}) => {


  return (
    <Container className='scooter-container'>
      <Row>
      <h2 className="p-3 mb-2 bg-info bg-gradient text-light bg-opacity-50">Scooters</h2>
      </Row>
      <Row>
      <ListGroup className='list-group' as="ul">
        {scooters.map(scooter => (
          <ListGroup.Item action variant="info" as="li" key={scooter.id}>
            <Stack direction='horizontal' gap={2}>
            <Link className='link-info mx-2' to={`/scooters/${scooter.id}`} onClick={() => onScooterClick(scooter.id)}>
                <h5>{scooter.model}</h5>
                <h5>{scooter.charge_percent}</h5>
                </Link>
                </Stack>
          </ListGroup.Item>
        ))}
      </ListGroup>
      </Row>
      
        {/* <Link to="/scooters/add">
            <Button variant="light"
                    className="bg-info text-dark rounded-4 bg-opacity-50" 
                    id="addNewButton"
                    size="lg">Add a New Surf scooter</Button></Link>
       */}
    </Container>
    
    
  );
}

export default ScooterList;
