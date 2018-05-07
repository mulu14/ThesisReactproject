import React from 'react'
import Card, { CardContent } from 'material-ui/Card';
import List, { ListItem } from 'material-ui/List';
import Typography from 'material-ui/Typography';

const ListData = (props) =>{
    return(
        <div> 
         {
             <List>
                {
                    props.skills.map(skill =>{
                       return <ListItem key={skill._id}> {skill.title} </ListItem>
                    })
                }
             </List>
             
         }
        </div>

    )
}
const SkillsList =(props)=>{
    return(
        <div> 
            {
                <Card> 
                <CardContent>
                 <Typography color="textSecondary" component="h1">
                    Skills
                 </Typography>
                 <ListData  skills = {props.skills}/>
                </CardContent>
                </Card>
            }
    
                  
        </div>

    )
}

export default SkillsList