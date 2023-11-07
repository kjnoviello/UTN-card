import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ('/cardImage.jpg')
import ('./Card.css')

function CardItem() {
  return (
    <Card style={{ width: '20rem' }} className='card'>
      <Card.Body>
        <Card.Img variant="top" src="/cardImage.jpg" className='cardImg'/>
      </Card.Body>
      <Card.Body>
        <Card.Title><h2><strong>Notebook Xiaomi</strong></h2></Card.Title>
        <Card.Text className='text'>
          <i> Xiaomi Mi NoteBook 14: un ligero portátil con cuerpo de aluminio y procesador Intel de 10ª generación desde menos de 500 euros.</i>
        </Card.Text>
        <Button variant="primary" className='text'>Comprar</Button>
      </Card.Body>
    </Card>
  );
}

export default CardItem;