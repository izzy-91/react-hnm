import React, { useState } from "react";
import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";
import Dropdown from "react-bootstrap/Dropdown";

const ProductDetail = () => {
    let { id } = useParams();
    const [product, setProduct] = useState(null);
    const getProductDetail = async () => {
        let url = `https://my-json-server.typicode.com/izzy-91/react-hnm/products/${id}`;
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
        setProduct(data);
    };
    useEffect(() => {
        getProductDetail();
    }, []);
    return (
        <Container>
            <Row>
                <Col className="product-img">
                    <img src={product?.img} />
                </Col>
                <Col>
                    <div>{product?.title}</div>
                    <div>{product?.price}</div>

                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Dropdown Button
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
            </Row>
        </Container>
    );
};

export default ProductDetail;
