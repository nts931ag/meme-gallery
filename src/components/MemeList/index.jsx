import React from "react";
import PropTypes from 'prop-types'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Card } from "react-bootstrap";

MemeList.propTypes = {
    memes: PropTypes.array,
};

MemeList.defaultProps = {
    memes: [],
};   

function MemeList(props){
    const {memes} = props; 
    const arrayMeme = Array.from({memes}.memes)
    
    const arrayChunk = (arr, n) => {
        const array = arr.slice();
        const chunks = [];
        while (array.length) chunks.push(array.splice(0, n));
        return chunks;
      };

    return (
        <Container>
            {arrayChunk(arrayMeme, 3).map((row, i) => (
                <Row key={i} className="my-4">
                {row.map((col, i) => (
                    <Col key={i} xs={12} sm={8} md={6} lg={4}>
                        <Card>
                            <Card.Img src={col.url} alt={col.name}/>
                            <Card.Body>
                                <Card.Title  style={{
                                    borderStyle: "none",
                                    textAlign: "center",
                                    }}>{col.name}
                                </Card.Title> 
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
                </Row>
            ))}
        </Container>
    )
}

export default MemeList;