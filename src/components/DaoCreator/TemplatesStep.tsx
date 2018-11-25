// TODO: https://github.com/dOrgTech/dOrg-dApp/issues/6
import * as React from "react"
import { connect } from "react-redux"
import {
  withStyles,
  Theme,
  WithStyles,
  createStyles,
  Card,
  Typography,
  IconButton,
  GridList,
  GridListTile,
} from "@material-ui/core"
import {
  LocalFloristOutlined as StartFreshIcon,
  RecentActorsOutlined as LiquidDemocracyIcon,
  BlurCircularOutlined as HolographicConsensusIcon,
  Info as InfoIcon,
} from "@material-ui/icons"

// TODO: temp
const tileData = [
  {
    title: "Start Fresh",
    content: StartFreshIcon,
    description: "Start fresh, build your own, stuff stuff and that...",
  },
  {
    title: "Holographic Consensus",
    content: HolographicConsensusIcon,
    description: "Holographic Consensus stuff stuff and that...",
  },
  {
    title: "Liquid Democracy",
    content: LiquidDemocracyIcon,
    description: "Liquid Democracy stuff stuff and that...",
  },
  {
    title: "foo",
    content: InfoIcon,
    description: "foo bar",
  },
  {
    title: "foo",
    content: InfoIcon,
    description: "foo bar",
  },
]

interface Props extends WithStyles<typeof styles> {}

const templatesStep: React.SFC<Props> = ({ classes }) => (
  <Card className={classes.card}>
    <Typography variant="h5" className={classes.headline} gutterBottom>
      Governance Templates:
    </Typography>
    <GridList cellHeight={180} className={classes.gridList}>
      {tileData.map(tile => (
        <GridListTile key={tile.title} className={classes.gridListTile}>
          {<tile.content className={classes.gridListTileIcon} />}
          <Typography variant="h6" className={classes.gridListTileTitle}>
            {tile.title}
          </Typography>
          <IconButton className={classes.gridListTileInfoIcon}>
            <InfoIcon />
          </IconButton>
        </GridListTile>
      ))}
    </GridList>
  </Card>
)

// TODO: grid of selectable things in scroll view
// TODO: below it have a SwipeableViews that shows the descriptions

// STYLE
const styles = (theme: Theme) =>
  createStyles({
    card: {},
    headline: {},
    gridList: {},
    gridListTile: {
      textAlign: "center",
    },
    gridListTileIcon: {
      width: "75%",
      height: "75%",
    },
    gridListTileTitle: {},
    gridListTileInfoIcon: {},
  })

const componentWithStyles = withStyles(styles)(templatesStep)

// STATE
const mapStateToProps = (state: any, ownProps: any) => {
  return {}
}

const mapDispatchToProps = (dispatch: any) => {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(componentWithStyles)
