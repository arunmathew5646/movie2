import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from "@material-ui/core/ImageListItem";
import {ImageListItemBar} from "@material-ui/core";
import moment from "moment";



export default function RegularImageListComponent(props) {


    return (
        <div>
            <ImageList cellHeight={350} cols={4} gap={40} >
                {props.movies.map((item) => (
                    <ImageListItem  key={item.id}  >
                        <img src={item.poster_url} alt={item.title} style={ {cursor:"pointer"}} />
                        <ImageListItemBar
                            title={item.title}
                            subtitle={<span>Release Date: {moment(item.release_date).format('ddd MMM Do yyyy')}</span>}
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </div>
    );
}