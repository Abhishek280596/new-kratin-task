import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import Img from "./images/back.jpeg";
import "../App.css";
import Footer from "./Footer";
import "./Home.css";

const Home = () => {
  return (
    <div class="header-color">
      <div className="container">
        <div class="jumbotron" style={{ opacity: "0.3" }}>
          <h3>
            “Stretching your body and <br />
            mind is essential to avoid rigidity.”
          </h3>
        </div>
      </div>
      <div style={{ width: "100%", padding: "5%" }}>
        <CardGroup style={{ opacity: 0.7 }}>
          <Card id="c1">
            <Card.Img
              id="crd1"
              variant="top"
              src={Img}
              style={{ height: 350 }}
            />
            <Card.Body>
              <Card.Title>
                <h4>Back Pain</h4>
              </Card.Title>
              <Card.Text>
                <h6>
                  Lower back pain may be linked to the bony lumbar spine, discs
                  between the vertebrae, ligaments around the spine and discs,
                  spinal cord and nerves, lower back muscles, abdominal and
                  pelvic internal organs, and the skin around the lumbar area.
                </h6>
              </Card.Text>
              <br />
            </Card.Body>
          </Card>

          <Card id="c2">
            <Card.Img
              id="crd2"
              variant="top"
              src="https://orthosports.com/wp-content/uploads/2018/11/shoulder-big.jpg"
              style={{ height: 350 }}
            />
            <Card.Body>
              <Card.Title>
                <h4>Shoulder Pain</h4>
              </Card.Title>
              <Card.Text>
                <h6>
                  Soft tissue lesions are the most common cause of shoulder pain
                  in the elderly, including rotator cuff tendinitis or rupture,
                  subacromial impingement, frozen shoulder and acromioclavicular
                  joint osteoarthritis. These conditions are amenable to
                  treatment that in turn will improve patient quality of life.
                </h6>
              </Card.Text>
            </Card.Body>
          </Card>

          <Card id="c3">
            <Card.Img
              id="crd3"
              variant="top"
              src="https://i2.wp.com/wellnessdoctorrx.com/wp-content/uploads/2018/11/Knee-Pain-Cover-Image-1.jpg?fit=630%2C400&ssl=1"
              style={{ height: 350 }}
            />
            <Card.Body>
              <Card.Title>
                <h4>Knee Pain</h4>
              </Card.Title>
              <Card.Text>
                <h6>
                  Knee pain is a common complaint that affects people of all
                  ages. Knee pain may be the result of an injury, such as a
                  ruptured ligament or torn cartilage. Medical conditions —
                  including arthritis, gout and infections — also can cause knee
                  pain.
                </h6>
              </Card.Text>
              <br />
            </Card.Body>
          </Card>
        </CardGroup>
        <a href="/exercise" id="bt1" class="btn btn-primary">
          Know More..
        </a>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
