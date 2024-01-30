import React from "react";
import "./style.css";

// https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Positioning#sticky_positioning

export default function page() {
  return (
    <>
      <h1>The position property</h1>

      <h2>position: static;</h2>
      <p>
        The Parent1 element has position: static, and will remain in the natural
        flow of the page. It will NOT act as anchor point for the absolutely
        positioned Child1 element:
      </p>
      <div id="parent1">
        {/*
        commented sticky won't work because
        This is because the sticky item’s container (or parent element) is the only area in which it can stick,
        the sticky item can only float over sibling elements. 
        In other words, your sticky item cannot be an only child.
        */}
        {/* <div>
          <div className="sticky">I am sticky!</div>
        </div> */}
        <div className="sticky">I am sticky!</div>
        Parent1: position: static.
        <div id="child1">
          Child1: position: absolute, right: 15px, top: 70px
        </div>
      </div>

      <h2>position: relative;</h2>

      <p>
        The Parent2 element has position: relative, and will remain in the
        natural flow of the page. It will also act as anchor point for the
        absolutely positioned Child2 element:
      </p>

      <div id="parent2">
        Parent2: position: relative.
        <div id="child2">
          Child2: position: absolute, right: 15px, top: 70px
        </div>
      </div>

      <h2>position: absolute;</h2>
      <p>
        The Parent3 element has position: absolute, and will NOT remain in the
        natural flow of the page. It will position itself according to the
        closest positioned ancestor. It will also act as anchor point for the
        absolutely positioned Child3 element:
      </p>
      <div id="parent3">
        Parent3: position: absolute, top: 750px, right: 15px.
        <div id="child3">
          Child3: position: absolute, right: 15px, top: 70px
        </div>
      </div>

      <h2>position: fixed;</h2>
      <p>
        The Parent4 element has position: fixed, and will NOT remain in the
        natural flow of the page. It will position itself according to the
        viewport. It will also act as anchor point for the absolutely positioned
        Child4 element:
      </p>
      <div id="parent4">
        Parent4: position: fixed, bottom: 0, left: 0, right: 0.
        <div id="child4">
          Child4: position: absolute, right: 15px, top: 70px
        </div>
      </div>
    </>
  );
}
