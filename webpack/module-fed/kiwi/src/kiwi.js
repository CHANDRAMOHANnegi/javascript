import Heading from "./components/heading/heading.js";
import KiwiImage from "./components/kiwi-image/kiwi-image.js";

const heading = new Heading();
heading.render("kiwi");
const kiwiImage = new KiwiImage();
kiwiImage.render();

import("HelloWorldApp/HelloWorldButton")
  .then((HelloWorldButtonModule) => {
    const HelloWorldButton = HelloWorldButtonModule.default;

    const button = new HelloWorldButton();

    button.render();
  })
  .catch((err) => {
    console.log(err);
  });
