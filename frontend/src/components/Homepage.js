import './Homepage.scss';
import bgImg from './images/landingBg.jpg';
import { FormControl, Container, Row, Col, InputGroup } from 'react-bootstrap';
import { Search as SearchIcon } from 'react-bootstrap-icons';

export const Homepage = () => {
  return (
    <div
      className='landing-wrapper'
      style={{
        backgroundImage: `url(${bgImg})`
      }}
    >
      <Container fluid='true'>
        <Row className='spacer'></Row>
        <Row className='justify-content-center'>
          <Col sm='true'>
            <InputGroup>
              <InputGroup className='mb-3'>
                <FormControl
                  size='lg'
                  className='search'
                  placeholder='Where to?'
                  aria-label='Search'
                  aria-describedby='Search'
                />
                <InputGroup.Append>
                  <InputGroup.Text id='basic-addon2' className='search'>
                    <SearchIcon />
                  </InputGroup.Text>
                </InputGroup.Append>
              </InputGroup>
            </InputGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
