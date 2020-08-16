import React from "react";
import { Spring } from "react-spring/renderprops";
import "../App.css";

export default function Component2() {
  return (
    <Spring
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}
      config={{ delay: 1000, duration: 1000 }}
    >
      {(props) => (
        <div style={props} class="container">
          <div
            style={{
              class: "header-color",
              color: "black",
              padding: "1.5rem",
            }}
          >
            <h4>
              These Foods would help you reduce <b>Shoulder</b> pain-
            </h4>
            <ul>
              <h6>
                Rich in Omega-3 Fatty Acids, fish oil provides many health
                benefits. One study shows fish oil can “reduce the intensity of
                joint symptoms, like morning stiffness, tenderness, swelling,
                and discomfort.”
              </h6>

              <h6>
                These crucial vitamins act as antioxidants, which help cleanse
                the body of toxins that cause inflammation and pain. Vitamin C
                is a natural detox, and Vitamin E creates an anti-inflammatory
                response may reduce Shoulder pain.
              </h6>

              <h6>
                ” Chondroitin may allow for increased blood flow, by heightening
                the permeability of the body’s tissues and cartilage.
              </h6>
            </ul>
          </div>
        </div>
      )}
    </Spring>
  );
}
