import React from "react";
import { withStyles } from "material-ui/styles";

import Divider from "material-ui/Divider";
import TextField from "material-ui/TextField";

const styles = theme => ({

  drawerHeader: {
    //...theme.toolbar,
     ...theme.mixins.toolbar,
     paddingLeft: theme.spacing.unit * 3,
     paddingRight: theme.spacing.unit * 3
   },
})
const Search = ({ classes }) =>(
  <div>
<div className={classes.drawerHeader}>
<TextField fullWidth margin="normal" placeholder="Search chats..." />
</div>
<Divider />
  </div>
)

export default withStyles(styles)(Search);
