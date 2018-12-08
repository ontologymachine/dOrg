import * as React from "react"
import {
  withStyles,
  Theme,
  WithStyles,
  createStyles,
  Grid,
  TextField,
} from "@material-ui/core"

interface Props extends WithStyles<typeof styles> {
  handleChange: (key: string) => (value: any) => void
  firstName: string
  lastName: string
  address: string
}

const FoundersForm: React.SFC<Props> = ({
  handleChange,
  firstName,
  lastName,
  address,
  classes,
}) => (
  <Grid container spacing={16}>
    <Grid item xs={6}>
      <Grid item xs={12}>
        <TextField
          className={classes.firstName}
          id="firstName"
          label="First Name"
          value={firstName}
          onChange={handleChange("firstName")}
          margin="normal"
          fullWidth
          required
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          className={classes.lastName}
          id="lastName"
          label="Last Name"
          value={lastName}
          onChange={handleChange("firstName")}
          margin="normal"
          fullWidth
          required
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          className={classes.address}
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
    firstName: {},
    lastName: {},
    address: {},
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
