import React from "react";
import Pdf from "react-to-pdf";

const BLog = () => {
    const ref = React.createRef()
  return (
    <>
      <div ref={ref} className="flex flex-col">
        <ol>
          <div className="mx-10">
            <li>
              1.Tell us the differences between uncontrolled and controlled
              components.
            </li>
            <p>
              Ans :In React, controlled components refer to components that have
              their state and behavior controlled by the parent component. These
              components rely on props passed down from the parent component to
              update their state and behavior. Uncontrolled components refer to
              components that manage their own state internally. They use a ref
              to access the DOM element's current value and update the state
              accordingly.
            </p>
          </div>
          <div className="mx-10 my-10">
            <li>2.How to validate React props using PropTypes</li>
            <p>
              Ans :Props and PropTypes are important mechanisms for passing
              read-only attributes between React components. We can use React
              props, short for properties, to send data from one component to
              another. If a component receives the wrong type of props, it can
              cause bugs and unexpected errors in your app.You can validate it
              by define your props. if you dont define the props then it will no
              render and properly and it will behave unexpectedly. so you have
              to validate React props using propstypes by define the props .
            </p>
          </div>
          <div className="mx-10 my-10">
            <li>3.Tell us the difference between nodejs and express js.</li>
            <p>
              Ans : NodeJS is the package, which provides the JavaScript
              run-time environment, whereas Express is a framework that sits on
              top of NodeJS and helps us to handle requests and
              responses.Node.js for building back-end services like APIs like
              Web App or Mobile App. It’s used in production by large companies
              such as Paypal, Uber, Netflix, Walmart and so on. Express is a
              small framework that sits on top of Node.js’s web server
              functionality to simplify its APIs and add helpful new features.
              It makes it easier to organize your application’s functionality
              with middle ware and routing. It adds helpful utilities to
              Node.js’s HTTP objects. It facilitates the rendering of dynamic
              HTTP objects.
            </p>
          </div>
          <div className="mx-10">
            <li>
              4.What is a custom hook, and why will you create a custom hook?
            </li>
            <p>
              Ans :Custom React JS hooks offer reusability as when a custom hook
              is created, it can be reused easily, which makes the code cleaner
              and reduces the time to write the code. It also enhances the
              rendering speed of the code as a custom hook does not need to be
              rendered again and again while rendering the whole code.
            </p>
          </div>
        </ol>
      </div>
      <Pdf targetRef={ref} filename="blog.pdf">
        {({toPdf}) => (
            <button className="border px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 text-white" onClick={toPdf}>Download Blog</button>
        )}
    </Pdf>

    </>
  );
};

export default BLog;
