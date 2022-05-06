import React, { useState, useEffect } from "react";
import { Button, Col, Container, Form, Modal, Row } from "react-bootstrap";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import { IoClose } from "react-icons/io5";

const CategoryItem = ({ category }) => {
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const handleCheck = () => setIsSwitchOn(!isSwitchOn);

  const { register, setValue } = useFormContext();

  useEffect(() => {
    const preferences = localStorage.getItem("preferences");
    if (preferences !== null) {
      const categoryValue = JSON.parse(preferences)[category];
      setValue(category, categoryValue);
    }
  }, []);

  return (
    <Form.Switch
      {...register(category)}
      id={category}
      label={category}
      name={category}
      checked={isSwitchOn}
      onChange={handleCheck}
    />
  );
};

const CategoriesModal = ({ show, handleClose }) => {
  const categories = [
    { id: 1, type: "basic", name: "HTML" },
    { id: 2, type: "basic", name: "Javascript" },
    { id: 3, type: "basic", name: "General" },
    { id: 4, type: "basic", name: "CSS" },
    { id: 5, type: "premium", name: "Frontend Trends" },
    { id: 6, type: "premium", name: "React" },
    { id: 7, type: "premium", name: "Accesibility" },
  ];
  const onSubmit = (data) => {
    localStorage.setItem("preferences", JSON.stringify(data));
    handleClose();
  };

  const methods = useForm();
  return (
    <Modal show={show} onHide={handleClose} animation={false}>
      <Button className="button-modal" onClick={handleClose}>
        <IoClose
          onClick={handleClose}
          style={{ cursor: "pointer", zIndex: 1 }}
        />
      </Button>
      <Modal.Body className="m-4">
        <h2>Select your favorite topics</h2>
        <hr />
        <FormProvider {...methods}>
          <Form onSubmit={methods.handleSubmit(onSubmit)}>
            <Container className="px-0">
              <h5>
                <b>Basic</b>
              </h5>
              <Row className="mb-3">
                {categories
                  .filter((category) => category.type === "basic")
                  .map((category) => (
                    <Col key={category.id}>
                      <CategoryItem category={category.name} />
                    </Col>
                  ))}
              </Row>
              <h5>
                <b>Premium</b>
              </h5>
              <Row className="mb-3">
                {categories
                  .filter((category) => category.type === "premium")
                  .map((category) => (
                    <Col key={category.id}>
                      <CategoryItem category={category.name} />
                    </Col>
                  ))}
              </Row>
            </Container>
            <Button className="snack-button" type="submit">
              Confirmar
            </Button>
          </Form>
        </FormProvider>
      </Modal.Body>
    </Modal>
  );
};

export default CategoriesModal;
