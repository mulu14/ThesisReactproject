import React from 'react'
import List, { ListItem } from 'material-ui/List';
import Card, {CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';




const ListData = (props) =>{
    return(
        <div> 
         {
             props.benefits.map(benefit =>{
                  return <List key={benefit._id}>
                    <ListItem>{benefit.title}</ListItem>
                    </List>
                    })
         }
        </div>

    )
}
const BenefitList =(props)=>{
    return(
        <div> 
            {
                <Card> 
                <CardContent>
                <Typography component="h1"> Benefit</Typography>
                 <ListData benefits = {props.benefits}/>
                </CardContent>
                </Card>
            }
    
            
        </div>

    )
}

export default BenefitList
