import React from 'react';
import './TrackList.css';
import { Track } from '../Track/Track';


export class TrackList extends React.Component {

    render () {
        return (
            <div className='TrackList'>
                {
                    this.props.tracks?.map((track) => {
                        console.log(this.props.tracks);
                        console.log(track, 'track');
                         return <Track track={track} key={track.id} />
                    })
                }
            </div>
        )
    }
}