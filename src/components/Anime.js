import { Card, Col, Container, Row, Image } from 'react-bootstrap';
import bnhImage from '../assets/images/anime/bnh.jpg';
import snkImage from '../assets/images/anime/snk.jpg';
import jujutsukaisenImage from '../assets/images/anime/jjk.jpg';
import robinhoodImage from '../assets/images/superhero/robinhood.jpg';
import spidermanImage from '../assets/images/superhero/spiderman-cover.jpg';
import supermanImage from '../assets/images/superhero/superman.jpg';

const Anime = () => {
  return (
    <div>
      <Container>
        <br />
        <h1 className="text-white">Anime Series</h1>
        <br />
        <Row>
          <Col md={4} className="movieWrapper" id="anime">
            <Card className="movieImage">
              <Image src={bnhImage} alt="Dune Movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-2 text-white">
                  <Card.Title className="text-center">Boku No Hero Academia</Card.Title>
                  <Card.Text className="text-left">This is a wider card with supporting.</Card.Text>
                  <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={snkImage} alt="Dune Movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-2 text-white">
                  <Card.Title className="text-center">Shingeki No Kyojin</Card.Title>
                  <Card.Text className="text-left">This is a wider card with supporting.</Card.Text>
                  <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={jujutsukaisenImage} alt="Dune Movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-2 text-white">
                  <Card.Title className="text-center">Jujutsu Kaisen</Card.Title>
                  <Card.Text className="text-left">This is a wider card with supporting.</Card.Text>
                  <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={robinhoodImage} alt="Dune Movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-2 text-white">
                  <Card.Title className="text-center">Dune</Card.Title>
                  <Card.Text className="text-left">This is a wider card with supporting.</Card.Text>
                  <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={spidermanImage} alt="Dune Movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-2 text-white">
                  <Card.Title className="text-center">Dune</Card.Title>
                  <Card.Text className="text-left">This is a wider card with supporting.</Card.Text>
                  <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={supermanImage} alt="Dune Movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-2 text-white">
                  <Card.Title className="text-center">Dune</Card.Title>
                  <Card.Text className="text-left">This is a wider card with supporting.</Card.Text>
                  <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Anime;
