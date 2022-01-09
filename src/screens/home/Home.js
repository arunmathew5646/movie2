import {Component} from "react";
import Header from "../../common/header/Header";
import './Home.css';
import './ImageListComponent.js';
import RegularImageListComponent from "./RegularImageList";
import moviesData from "../../common/moviesData";
import ImageListComponent from "./ImageListComponent";
import {
    Button,
    Card,
    CardContent,
    Checkbox,
    FormControl,
    InputLabel,
    ListItemIcon,
    ListItemText,
    MenuItem,
    Select,
    TextField,
    Typography,
    withStyles
} from "@material-ui/core";
import artists from "../../common/artists";
import genres from "../../common/genre";
import moment from "moment";

const styles = (theme) => ({
    cardContent: {
        margin: theme.spacing.unit,
        minWidth: 240,
        maxWidth: 240
    },
    filterHeading: {
        color: theme.palette.primary.light,
    }
});

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            upcomingMovies:moviesData,
            releasedMovies:moviesData,
            movieName:"",
            selectedArtists: [],
            selectedGenres: [],
            startDate:"",
            endDate:"",
        }
        this.movieNameHandler = this.movieNameHandler.bind(this);
        this.artistChangeHandler = this.artistChangeHandler.bind(this);
        this.genreChangeHandler = this.genreChangeHandler.bind(this);
        this.startDateHandler = this.startDateHandler.bind(this);
        this.endDateHandler = this.endDateHandler.bind(this);
    }

    artistChangeHandler(event) {
        this.setState({
            selectedArtists:event.target.value
        })
    }
    movieNameHandler(event) {
        this.setState({
            movieName:event.target.value
        })
    }
    genreChangeHandler(event) {
        this.setState({
            selectedGenres: event.target.value
        })
    }

    startDateHandler (event){
        this.setState({
            startDate:event.target.value
        })
    }

    endDateHandler(event){
        this.setState({
            endDate:event.target.value
        })
    }

    applyHandler() {
        var filters = {
            title: this.state.movieName,
            genres: this.state.selectedGenres,
            artists: this.state.selectedArtists,
            startDate: this.state.startDate,
            endDate: this.state.endDate
        }
        let filteredMovies = moviesData.filter(item => movieNameFilter(item))
                            .filter(item => genreNameFilter(item))
                            .filter(item => artistNameFilter(item))
                            .filter(item => startDateFilter(item))
                            .filter(item => endDateFilter(item));

         this.setState({
             releasedMovies: filteredMovies
         })
        
        function movieNameFilter(movieItem){
             if(filters["title"]===""){
                 return true;
             }
             else
                return movieItem["title"].includes(filters["title"]);
        }
        function genreNameFilter(movieItem){
            if(filters["genres"].length===0){
                return true;
            }
            else {

                return movieItem["genres"].some(element => filters["genres"].includes(element));
            }
        }
        function artistNameFilter(movieItem){

            if(filters["artists"].length===0){
                return true;
            }
            else
                return movieItem["artists"].map(e=> e.first_name+" "+e.last_name).
                some(element => filters["artists"].includes(element))
        }

        function startDateFilter(movieItem){
            if(filters["startDate"]===""){
                return true;
            }
            else {
                return moment(movieItem["release_date"]).isAfter(filters["startDate"]);
            }
        }

        function endDateFilter(movieItem){
            console.log(movieItem)
            if(filters["endDate"]===""){
                return true;
            }
            else {
                return moment(movieItem["release_date"]).isBefore(filters["endDate"]);
            }
        }
    }

    render() {
        const {classes, theme} = this.props;
        return (
            <div>
                <Header/>
                <span className="heading">Upcoming Movies</span>
                <ImageListComponent movies={this.state.upcomingMovies}/>
                <div className="flex-container">
                    <div className="left">
                        <RegularImageListComponent movies={this.state.releasedMovies}/>
                    </div>
                    <div className="right">
                    <Card style={ {width:"fit-content"}}>
                        <CardContent>
                            <Typography className={classes.filterHeading}>
                                FIND MOVIES BY:
                            </Typography>
                            <br/>
                            <Typography className={classes.cardContent}>
                            <FormControl fullWidth>
                                <TextField id="standard-basic" label="Movie Name" variant="standard" onChange={this.movieNameHandler}/>
                            </FormControl>
                            </Typography>
                            <br/>
                            <Typography className={classes.cardContent}>
                            <FormControl fullWidth>
                                <InputLabel>Genres</InputLabel>
                                <Select value={this.state.selectedGenres} renderValue={()=> this.state.selectedGenres.join(", ")} MenuProps={{
                                    getContentAnchorEl: null
                                }} onChange={this.genreChangeHandler}  multiple>
                                    {genres.map((ge) => (
                                        <MenuItem key={ge.id} value={ge.name}>
                                            <ListItemIcon>
                                                <Checkbox checked={this.state.selectedGenres.indexOf(ge.name) > -1} />
                                            </ListItemIcon>
                                            <ListItemText primary={ge.name} />
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                            </Typography>
                            <br/>
                            <Typography className={classes.cardContent}>
                            <FormControl fullWidth >
                                <InputLabel>Artists</InputLabel>
                                <Select multiple value={this.state.selectedArtists} renderValue={()=> this.state.selectedArtists.join(", ")} MenuProps={{
                                    getContentAnchorEl: null
                                }} onChange={this.artistChangeHandler}>
                                    {artists.map((ar) => (
                                        <MenuItem key={ar.id} value={ar.first_name +" "+ ar.last_name}>
                                            <ListItemIcon>
                                                <Checkbox checked={this.state.selectedArtists.indexOf(ar.first_name +" "+ar.last_name)>-1}></Checkbox>
                                            </ListItemIcon>
                                            <ListItemText primary={ar.first_name +" "+ar.last_name}/>
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                            </Typography>
                            <br/>
                            <Typography className={classes.cardContent}>
                            <FormControl fullWidth >

                                <TextField
                                    id="startDate"
                                    label="Release Date Start"
                                    type="date"
                                    onChange={this.startDateHandler}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </FormControl>
                            </Typography>
                            <br/>
                            <Typography className={classes.cardContent}>
                            <FormControl fullWidth>
                                <TextField
                                    id="endDate"
                                    label="Release Date End"
                                    type="date"
                                    onChange={this.endDateHandler}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </FormControl>
                            </Typography>
                            <br/>
                            <br/>
                            <Button variant="contained" color="primary" onClick={()=>this.applyHandler()} className={classes.cardContent}>APPLY</Button>
                        </CardContent>
                    </Card>
                    </div>
                </div>
            </div>
        )
    }
}


export default withStyles(styles, {withTheme: true})(Home);

