/*
import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import {
    Checkbox,
    createTheme,
    FormControl,
    FormGroup,
    InputLabel,
    ListItemIcon,
    ListItemText,
    MenuItem,
    Select
} from "@material-ui/core";
import genres from '../../common/genre.js';
import artists from '../../common/artists.js';


const theme= createTheme({
    spacing:10,
});

const useStyles = makeStyles({
    root: {

    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        width:theme.spacing(5),
       // height:theme.spacing(1),
        //margin:theme.spacing(1),
        color:theme.palette.primary.light,
    },
    pos: {
        marginBottom: 12,
    },
});

export default function SimpleCard() {
    const classes = useStyles();
    const [selectedGenre, setGenreSelected] = useState([]);
    const [selectedArtists, setArtistsSelected] = useState([]);
    const handleGenreChange = (event) => {
        const value = event.target.value;
        setGenreSelected(value);
    };
    const handleArtistsChange = (event) => {
        const value = event.target.value;
        setArtistsSelected(value);
    };
    return (
        <Card className={classes.root}>
            <CardContent>
                <FormGroup>
                

                    <FormControl>
                        <InputLabel id="genres-label">Genres</InputLabel>
                        <Select
                            labelId="genres-label"
                            multiple
                            value={selectedGenre}
                            onChange={handleGenreChange}
                            renderValue={(selected) => selected.join(", ")}
                        >

                            {genres.map((option) => (

                                <MenuItem key={option.name} value={option.name}>

                                    <ListItemIcon>
                                        <Checkbox checked={selectedGenre.indexOf(option.name)>-1} />
                                    </ListItemIcon>
                                    <ListItemText primary={option.name} />
                                </MenuItem>
                            ))};
                        </Select>
                        <InputLabel id="artists-label">Artists</InputLabel>
                        <Select
                            labelId="artists-label"
                            multiple
                            value={selectedArtists}
                            onChange={handleArtistsChange}
                            renderValue={(selected) => selected.join(", ")}
                        >

                            {artists.map((option) => (

                                <MenuItem key={option.id} value={option.first_name} {option.last_name}>

                                    <ListItemIcon>
                                        <Checkbox checked={selectedArtists.indexOf(option.first_name)>-1} />
                                    </ListItemIcon>
                                    <ListItemText primary={option.first_name+ " " +option.last_name} />
                                </MenuItem>
                            ))};
                        </Select>
                    </FormControl>
                </FormGroup>
            </CardContent>
            <CardActions>
                <Button size="small">APPLY</Button>
            </CardActions>
        </Card>
    );
}
*/
