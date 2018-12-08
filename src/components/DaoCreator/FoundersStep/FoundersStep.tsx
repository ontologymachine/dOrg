import * as React from "react"
import {
  withStyles,
  Typography,
  Theme,
  WithStyles,
  createStyles,
  Card,
  CardHeader,
  CardActions,
  Button,
  CardContent,
  ListSubheader,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from "@material-ui/core"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import AddIcon from "@material-ui/icons/Add"
import * as blockies from "ethereum-blockies-png"
import FoundersForm from "./FoundersForm"

type Founder = {
  firstName: string
  lastName: string
  title: string
  address: string
}

type State = {
  founders: Array<Founder>
  creator: string
}

interface Props extends WithStyles<typeof styles> {}

// Founder type { address, name, etc }
// founders[], add to the list when + is used
// Founder.handleChange changes data inside

const ListWrapper = (members: Array<string>) => {
  return (
    <>
      {members.map(addr => {
        const dataURL = blockies.createDataURL({ seed: addr })
        return (
          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <img src={dataURL} />
              <Typography>{addr}</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <FoundersForm />
            </ExpansionPanelDetails>
          </ExpansionPanel>
        )
      })}
    </>
  )
}

/**
 * TODO:
 * - Add state, events, and actions to add addressses to the members array
 * - Wire 'Next' navigation to DAOCreationWizard
 */
class FoundersStep extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      founders: [],
      creator: "",
    }
  }

  render() {
    const { classes } = this.props
    const p1 =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus etlacinia mauris. Vestibulum non leo lobortis, ultrices metus et, pulvinar metus. Maecenas sit amet laoreet leo, semper dapibus ipsum.Morbi suscipit velit id urna aliquet tempor. Sed quis urna semper nibhvehicula efficitur. Quisque purus neque, bibendum quis gravida a,tempus id metus. Sed sed erat mi. Nam posuere, sapien quis consequattempus, purus leo rutrum metus, sit amet lacinia enim enim ac augue.Vivamus sit amet orci vel nunc iaculis sodales sit amet nec neque.Nunc in purus porta, aliquet eros eu, pretium turpis. Donec fringilla,est a mattis porttitor, lorem diam fringilla tellus, ut feugiat estest maximus lorem."
    const p2 =
      "Praesent vestibulum orci ac lorem pharetra, ornare aliquam lacualiquam. Fusce eu purus sapien. Etiam lorem eros, tristique sed nullsodales, faucibus maximus eros. Donec vitae turpis sit amet enigravida semper vitae at erat. Integer scelerisque vel dui a bibendum.Nullam ut placerat enim, ut porttitor odio. Nullam id aliquet justo.Etiam urna ligula, sagittis quis nunc pellentesque, efficitudignissim lorem. Phasellus et mollis nulla. Nulla ut nulla non doloporta sagittis sit amet at nibh. Etiam suscipit est non lorem accumsahendrerit. Sed nec sapien vitae ipsum elementum feugiat nec quis nisi.Aliquam erat volutpat. Ut ut ante commodo, faucibus nisl consequat,convallis diam. In pharetra justo non lectus vulputate, eget commodante tempor. Suspendisse auctor quam a ultrices auctor."
    return (
      <>
        <Card className={classes.card}>
          <ListSubheader>
            Creator&#39;s address: 0xafe8b8f2ef2ac6cb4d263c1a05486a7c5beb27a4
          </ListSubheader>
          {ListWrapper(members)}
          <Button
            className={classes.addButton}
            variant="fab"
            color="primary"
            aria-label="Add"
          >
            <AddIcon />
          </Button>
          <CardHeader className={classes.subheader} title="Staking Agreement" />
          <CardContent>
            <Typography>
              {p1}
              <br />
              <br />
              {p2}
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant="outlined" href="" target="_blank">
              Next
            </Button>
          </CardActions>
        </Card>
      </>
    )
  }
}

// STYLE
const styles = ({  }: Theme) =>
  createStyles({
    header: {
      marginTop: 100,
      textAlign: "center",
    },
    card: {
      maxWidth: 700,
      margin: "auto",
      marginTop: 100,
    },
    addButton: {
      margin: 16,
      float: "right",
    },
    subheader: {
      margin: "auto",
      marginTop: 80,
    },
  })

export default withStyles(styles)(FoundersStep)
