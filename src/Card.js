import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faItunes, faApple } from '@fortawesome/free-brands-svg-icons';
import { faArrowCircleDown, faCompactDisc } from '@fortawesome/free-solid-svg-icons';
import './card.css';

const Card = (props) => {

    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }

    const onclick = (event) => {
        const targetid = event.target.id;
        if (targetid === "artisturl")
            openInNewTab(props.artistViewUrl);
        else if (targetid === "collectionurl")
            openInNewTab(props.collectionViewUrl);
        else if (targetid === "previewurl")
            openInNewTab(props.previewUrl);
        else if (targetid === "collectionurl")
            openInNewTab(props.collectionViewUrl);
        else if (targetid === "trackviewurl")
            openInNewTab(props.trackViewUrl);
    }

    return (
        <div className= 'dib br3 pa3 ma2 bw2 shadow-5' id="carddiv">
            <div id="picturediv"><img src={props.artworkUrl} alt="trackPicture" id="trackimage" /></div>
            <div id="contentdiv">
                <div >
                    <h3>{"Artist : "} <span className="contentvalue"> {props.artistName}</span></h3>
                </div>
                <div >
                    <h3>{"Track : "} <span className="contentvalue"> {props.trackName}</span></h3>
                </div>
                <div >
                    <h3>{"collectionName : "}<span className="contentvalue">{props.collectionName}</span></h3>
                </div>
                <div>
                    <h3>{"Release Date : "}<span className="contentvalue"> {props.releaseDate.split("T")[0]}</span></h3>
                </div>
                <button onClick={onclick} id="moreartist">
                    <div id="artisturl" >
                        <span><FontAwesomeIcon icon={faApple} size="lg" /></span>
                        {" More of " + props.artistName}
                    </div></button>
            </div>
            <div id="btndiv">
                <button onClick={onclick} className="resultbtn">
                    <div id="collectionurl" >
                        <span><FontAwesomeIcon icon={faCompactDisc} size="lg" /></span>
                        {"  Collection"}
                    </div>
                </button>
                <button onClick={onclick} className="resultbtn">
                    <div id="previewurl" >
                        <span><FontAwesomeIcon icon={faArrowCircleDown} size="lg" /></span>
                        {" Preview"}
                    </div>
                </button>
                <button onClick={onclick} className="resultbtn">
                    <div id="trackviewurl" >
                        <span><FontAwesomeIcon icon={faItunes} size="lg" /></span>
                        {" Track"}
                    </div>
                </button>
            </div>
        </div>

    );
}

export default Card;