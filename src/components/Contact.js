import React from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";
import "./Contact.css";
import Footer from "./Footer";

const Contact = () => {
  return (
    <>
      <div className="contact-body" class="color">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Abhishek A Rakhade</h2>
            <img
              src=" https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
              alt="avatar"
              style={{ height: "250px" }}
            />{" "}
            <p
              style={{
                width: "75%",
                margin: "auto",
                paddingTop: "1.5em",
                fontFamily: "oxygen",
                fontSize: "20px",
              }}
            >
              Our training is centered around the ACE Mover Method, our
              philosophy on facilitating behavior change to empower people to
              make healthier lifestyle choices.
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Us</h2>
            <hr />

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-phone-square" aria-hidden="true" />
                    +91-8830921563
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-envelope" aria-hidden="true" />
                    rakhade.abhishek@gmail.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-skype" aria-hidden="true" />
                    cid.e2dabc3284c043e7
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
        <Footer />
      </div>
    </>
  );
};

export default Contact;
