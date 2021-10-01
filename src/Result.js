import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from './Card';
import './result.css';

function Result(props) {
    const [resultarray, setresult] = useState([]);
    const [hasload, setload] = useState(true);
    useEffect(() => {
        setload(false);
        try {
            setTimeout(() => {
                axios({
                    url: "https://itunes.apple.com/search?term=" + (props.query.split(" ").join("+")),
                    mode: 'no-cors',
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then(res => {
                    setresult(res.data.results);
                    setload(true);
                });
            }, 1000);
        } catch (error) {
            console.log(error);
        }

    }, [props.query]);

    return (
        <div className = "divstyle">
            {hasload === false ?
                <div><h1>{"Loading..."}</h1></div> :
                <div>
                    {(resultarray.length > 0) ?
                        <div>
                            {resultarray.map((data, index) => {
                                return (
                                    <div key={index}>

                                        <Card
                                            artistName={data.artistName} artistViewUrl={data.artistViewUrl}
                                            artworkUrl={data.artworkUrl100} collectionName={data.collectionName} collectionViewUrl={data.collectionViewUrl}
                                            previewUrl={data.previewUrl} releaseDate={data.releaseDate} trackName={data.trackName} trackViewUrl={data.trackViewUrl}
                                        />
                                    </div>

                                )
                            })}
                        </div> :
                        <div>
                            {"No data Present! Check for another artist."}
                        </div>
                    }
                </div>
            }
        </div>
    )
}

export default Result;
