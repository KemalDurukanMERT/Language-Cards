import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import { useState } from "react";

const Language = ({name, img, options}) => {
    const [showImage, setShowImage] = useState(true);
    return (
        <Container
            type = "button"
            onClick={() => setShowImage(!showImage)}
        >
            {showImage && (
                <Container>
                    <Image src={img} width="70%"></Image>
                    <h3>{name}</h3>
                </Container>
            )}

            {!showImage && (
                <ol>
                    {options.map((item) => {
                        return <li>{item}</li>
                    })}
                </ol>
            )}
        </Container>
    )
}

export default Language;