import React, { useState } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText, Button, Collapse, Alert } from 'reactstrap';
import LoadComments from './LoadComments';

const DishDetails = ({ dish, toggleModal }) => {  // 12. dish as params...
  const [isOpen, setIsOpen] = useState(false);

  const toggleComments = (e) => {
    e.stopPropagation();  // Prevents the event from closing the modal
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Card className="my-2">
        <CardImg
          alt={dish.name}
          src={dish.image}
          style={{ height: '100%' }}
          top
          width="100%"
        />
        <CardBody style={{ textAlign: 'left' }}>
          <CardTitle tag="h5">
            {dish.name}
          </CardTitle>
          <CardText>
            {dish.description}
          </CardText>
          <CardText>
            <strong>Price: </strong>{dish.price}<strong>৳</strong>
          </CardText>

          <hr />

          <div>
            <Button
              color="primary"
              onClick={toggleComments}  // Calls toggleComments instead of closing the modal
              style={{
                marginBottom: '1rem'
              }}
            >
              Comments
            </Button>
            <Collapse isOpen={isOpen}>
              <Alert
                color="info"
                style={{
                  maxHeight: '200px', // Adjust the max height
                  overflowY: 'auto',  // Enable scrolling if content exceeds the height
                  width: '100%',      // Make it full width of the modal content
                }}
              >
                <LoadComments comments={dish.comments} /> {/* STEPPPPPPPPPPPP 13 */}
              </Alert>
            </Collapse>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

export default DishDetails;
