import React from 'react';
import { Grid, Paper, Typography, makeStyles, FormHelperText } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";


const EpisodeCard = (props) => {

    const useStyles = makeStyles(theme => ({
        display: 'flex',
    })) 
        
    return (
        <div style={{ marginTop: 20, padding: 30 }} >
            <Grid container spacing={40} justify='center'>
                
                    <Grid item key={props.title}  >
                        <Card>
                            <CardActionArea>
                                
                            <img src={props.img} width='300' alt='characters' /> 
                                
                                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {props.title}
                  </Typography>
                  <Typography component="p">
                    <h1>{props.title}</h1> 
                    <h3> {props.season} </h3>                  
                    <div> {props.episode } </div>
                    <div> {props.series} </div>
                    
                
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
     
      </Grid>
    </div>
    )
}
export default EpisodeCard;