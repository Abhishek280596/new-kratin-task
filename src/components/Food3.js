import React from "react";
import { Spring } from "react-spring/renderprops";

import Footer from "./Footer";

export default function Component2() {
  return (
    <Spring
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}
      config={{ delay: 1500, duration: 1500 }}
    >
      {(props) => (
        <div style={props} class="container">
          <div
            style={{
              color: "black",
              padding: "1.5rem",
            }}
          >
            <h4>
              These Foods would help you reduce <b>Knee</b> pain-
            </h4>
            <ul>
              <h6>
                Tons of antioxidants, vitamins and minerals are crammed into
                each serving of berries, which may partially account for their
                unique ability to decrease inflammation.
              </h6>

              <h6>
                Well-known for its anti-inflammatory properties, olive oil may
                have a favorable effect on arthritis symptoms.
              </h6>
            </ul>
          </div>
        </div>
      )}
    </Spring>
  );
}
