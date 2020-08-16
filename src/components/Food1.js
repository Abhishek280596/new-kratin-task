import React from "react";
import { Spring } from "react-spring/renderprops";
import "../App.css";

export default function Component1() {
  return (
    <Spring
      from={{ opacity: 0, marginTop: 100 }}
      to={{ opacity: 1, marginTop: 0 }}
    >
      {(props) => (
        <div style={props} class="container">
          <div
            style={{
              // class: "header-color",
              color: "black",
              padding: "1.5rem",
            }}
          >
            <h4>
              These Foods would help you reduce <b>Back</b> pain-
            </h4>
            <ul>
              <h6>
                Kale, spinach, and broccoli are all list-toppers for an
                anti-inflammatory diet with back-pain-fighting properties.
              </h6>

              <h6>
                All nuts are powerful anti-inflammatory properties. From walnuts
                and pecans to cashews and almonds, nuts are an easy way to
                include foods that help with back pain in your diet.
              </h6>

              <h6>
                The powerful compound present in red grapes, resveratrol, has
                gained popularity thanks to its antioxidant properties. But,
                resveratrol can also help block enzymes that contribute to
                tissue degeneration, which can lead to cartilage damage, and
                subsequently lead to back pain.
              </h6>
            </ul>
          </div>
        </div>
      )}
    </Spring>
  );
}
