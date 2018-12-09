import * as React from "react"

import { connect } from "react-redux"
import {
  withStyles,
  Theme,
  WithStyles,
  createStyles,
  Grid,
  TextField,
} from "@material-ui/core"

interface Props extends WithStyles<typeof styles> {
  handleChange: (newFounder: string) => (value: any) => void
  address: string
}

const FoundersForm: React.SFC<Props> = ({ handleChange, address, classes }) => (
  <Grid container spacing={16}>
    <Grid item xs={6}>
      <Grid item xs={12}>
        <TextField
          className={classes.address}
          onChange={handleChange(address)}
          id="address"
          label="Wallet Address"
          value={address}
          margin="normal"
          fullWidth
          required
        />
      </Grid>
    </Grid>
  </Grid>
)

// STYLE
const styles = ({  }: Theme) =>
  createStyles({
    grid: {
      margin: "auto",
    },
    address: {
      margin: "auto",
    },
  })

const componentWithStyles = withStyles(styles)(FoundersForm)

// STATE
const mapStateToProps = (state: any) => {
  return {}
}

const mapDispatchToProps = (dispatch: any) => {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(componentWithStyles)
