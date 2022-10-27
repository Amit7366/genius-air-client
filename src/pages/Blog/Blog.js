import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";

const Blog = () => {
  return (
    <Container>
      <Row>
        <Col md="6" className="mx-auto">
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>What is cors?</Accordion.Header>
              <Accordion.Body>
                <p>
                  Cross-origin resource sharing (CORS) is a browser mechanism
                  which enables controlled access to resources located outside
                  of a given domain. It extends and adds flexibility to the
                  same-origin policy (SOP). However, it also provides potential
                  for cross-domain attacks, if a website's CORS policy is poorly
                  configured and implemented. CORS is not a protection against
                  cross-origin attacks such as cross-site request forgery
                  (CSRF).
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                Why are you using firebase? What other options do you have to
                implement authentication?
              </Accordion.Header>
              <Accordion.Body>
                <p>
                  Google Firebase offers many features that pitch it as the
                  go-to backend development tool for web and mobile apps. It
                  reduces development workload and time. And it's a perfect
                  prototyping tool. Firebase is simple, lightweight, friendly,
                  and industrially recognized.
                </p>
                <p>
                  Firebase concept is simple. When you build a client-side app
                  with JavaScript or any of its frameworks, for instance, Google
                  Firebase can turn this into a serverless app in no time. It
                  also removes the need to manage databases yourself, as it does
                  that for you.
                </p>
                <p>
                  Therefore, implementing Firebase means plugging a ready-made
                  backend into your client code to make it dynamic. Ultimately,
                  it eliminates the need to write backend code from scratch and
                  gives you a fully functional one instead.
                </p>

                <p>
                  Firebase is a less technical and time-saving alternative to
                  writing full-fledged backend code for dynamic apps. You might
                  also want to consider leveraging this tool if you eventually
                  wish to host and manage your app in the cloud. Being
                  serverless, Firebase removes the need to worry about the
                  technicalities of cloud server configuration.
                </p>

                <p>
                  <b>
                    Other options: We have email,password based authentication
                    using our own database. Like: MongoDB,MYSQL
                  </b>
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                What is Node? How does Node work?
              </Accordion.Header>
              <Accordion.Body>
                <p>
                  Node.js is an open-source, cross-platform, back-end JavaScript
                  runtime environment that runs on a JavaScript Engine and
                  executes JavaScript code outside a web browser, which was
                  designed to build scalable network applications.
                </p>
                <p>Node.js basically works on two concept</p>
                <ul>
                  <li>Asynchronous</li>
                  <li>Non-blocking I/O</li>
                </ul>
                <p>
                  Non-blocking I/o: Non-blocking i/o means working with multiple
                  requests without blocking the thread for a single request. I/O
                  basically interacts with external systems such as files,
                  databases. Node.js is not used for CPU-intensive work means
                  for calculations, video processing because a single thread
                  cannot handle the CPU works.
                </p>
                <p>
                  Asynchronous: Asynchronous is executing a callback function.
                  The moment we get the response from the other server or
                  database it will execute a callback function. Callback
                  functions are called as soon as some work is finished and this
                  is because the node.js uses an event-driven architecture. The
                  single thread doesn’t work with the request instead it sends
                  the request to another system which resolves the request and
                  it is accessible for another request.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>
                How does the private route work?
              </Accordion.Header>
              <Accordion.Body>
                <p>
                  The private route component is similar to the public route,
                  the only change is that redirect URL and authenticate
                  condition. If the user is not authenticated he will be
                  redirected to the login page and the user can only access the
                  authenticated routes If he is authenticated (Logged in).
                  Public and Private routes will also restrict accessing the
                  previously visited routes using the browser back button after
                  logout.
                </p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
};

export default Blog;
<h2>Blog</h2>;
