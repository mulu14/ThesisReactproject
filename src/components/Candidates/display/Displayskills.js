import React from 'react'
import List, { ListItem } from 'material-ui/List';
import Card, {CardContent } from 'material-ui/Card'
import Typography from 'material-ui/Typography';




const ListData = (props) =>{
    return(
        <div> 
         {
             props.topskills.map(skill =>{
                  return <List key={skill._id}>
                    <ListItem> Job title:    {skill.title}</ListItem>
                    <ListItem> Experiance : {skill.experience}</ListItem>
                    </List>
                    })
         }
        </div>

    )
}
const Displayskills =(props)=>{
    return(
        <div> 
            {
                <Card> 
                <CardContent>
                 <Typography component="h1"> Top Skills </Typography>
                 <ListData topskills = {props.topskills}/>
                </CardContent>
                </Card>
            }
    
            
        </div>

    )
}

export default Displayskills
