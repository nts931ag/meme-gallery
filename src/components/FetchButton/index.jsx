import React from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { Button } from "react-bootstrap";

const FetchButton = ({url, setMemes}) => {
    const fetchApi = async () => {
        const response = await axios.get(url)
        console.log(response.data.data.memes)
        setMemes(response.data.data.memes)
        return response.data.data.memes
    }

    const {isError, isLoading, refetch} = useQuery(['memes'], fetchApi)

    if (isLoading) {
        return (
          <div className="d-flex align-items-center justify-content-center m-5">
        <Button>
          Loading...
        </Button>{' '}
        </div>
      );
    }
  
    if (isError) return 'An error has occurred: ' + isError.message;
  
    return ( 
      <div className="d-flex align-items-center justify-content-center m-5">
        <Button onClick={() => refetch()}>Meme</Button>{' '}
      </div>
    )
}

export default FetchButton