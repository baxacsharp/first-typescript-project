import { ChangeEvent, Component, FormEvent } from "react";
import{Card,Button} from 'react-bootstrap'
 interface cardTrackProps {
    results: [
        id: number,
        title:string,
        album:{
            id:number,
            cover_medium:string,
            title:string
        },
        artist:{
            name:string
        }
    ]
}
const cardtRacks = ({results}:cardTrackProps)=> {
return(
    <>
    {results && results.length > 0 && results.map((result)=>(
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={result.album.cover_medium} />
            <Card.Body>
                <Card.Title>{result.title}</Card.Title>
                <Card.Text>
               {result.album.title}
                </Card.Text>
                <Card.Text>
               {result.artist.name}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    ))}
    </>
)
}
export default  cardtRacks