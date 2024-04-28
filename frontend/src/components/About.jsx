import React from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import "./style.css"; // Import CSS file

const About = () => {
  return (
    <div >
      <Container>
        <Row>
          <Col md={6}>
            <h1 className="heading">Who We Are</h1> {/* Heading for "Who We Are" section */}
            <p className="about-text"> {/* Text for "Who We Are" section */}
              At Pizza Palace, we're more than just a pizza shop. We're a passionate team of food lovers dedicated to crafting the perfect pizza experience for our customers. From hand-selected ingredients to artisanal recipes, every slice tells a story of quality and taste. Our mission is to bring people together over great food and create memories that last a lifetime.
            </p>
          </Col>
          <Col md={6}>
            <h1 className="heading">Our Team</h1> {/* Heading for "Our Team" section */}
            <p className="about-text"> {/* Text for "Our Team" section */}
              Our team is made up of passionate individuals who share a love for great food and hospitality. From our chefs who create mouthwatering pizzas to our friendly staff who provide top-notch service, everyone plays a vital role in ensuring your experience at Pizza Palace is nothing short of excellent.
            </p>
          </Col>
        </Row>

        <Row>
          <Col md={12}>
            <h1 className="heading">Our Speciality</h1> {/* Heading for "Our Speciality" section */}
            <p className="about-text"> {/* Text for "Our Speciality" section */}
              Our speciality lies in our commitment to quality and innovation. We offer a diverse menu of handcrafted pizzas, each made with the freshest ingredients and bursting with flavor. From classic Margheritas to gourmet creations, there's something for everyone to enjoy. But it's not just about the pizzas – we also take pride in our selection of sides, salads, and desserts, all designed to complement your meal and elevate your dining experience.
            </p>
          </Col>
        </Row>

        <Row>
          <Col md={12}>
            <h1 className="heading">Our Values</h1> {/* Heading for "Our Values" section */}
            <Table bordered striped responsive> {/* Table for displaying values */}
              <thead>
                <tr>
                  <th className="table-heading">Quality</th> {/* Table heading for Quality */}
                  <th className="table-heading">Innovation</th> {/* Table heading for Innovation */}
                  <th className="table-heading">Community</th> {/* Table heading for Community */}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="about-text"> {/* Text for Quality */}
                    We are committed to using the freshest ingredients and maintaining the highest standards of quality in everything we do. Our pizzas are handcrafted with care and attention to detail to ensure every bite is a delight.
                  </td>
                  <td className="about-text"> {/* Text for Innovation */}
                    Innovation is at the heart of what we do. We're constantly exploring new flavors, ingredients, and cooking techniques to push the boundaries of pizza-making and offer unique and exciting options for our customers.
                  </td>
                  <td className="about-text"> {/* Text for Community */}
                    Community is important to us. We believe in giving back and supporting local initiatives that make a positive impact. Whether it's through fundraisers, sponsorships, or partnerships with local businesses, we're dedicated to making a difference in our community.
                  </td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
