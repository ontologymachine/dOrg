import { Dispatch } from "redux"
import * as Actions from "./internal"
import { newNotificationInfo } from "./notifications"
import * as Arc from "../../lib/integrations/daoStack/arc"
import { AppState } from "../../AppState"

export default interface DaoCreatorActions {
  nextStep(): (dispatch: Dispatch) => Promise<void>
  prevStep(): (dispatch: Dispatch) => Promise<void>
  setName(name: string): (dispatch: Dispatch) => Promise<void>
  setTokenName(tokenName: string): (dispatch: Dispatch) => Promise<void>
  setTokenSymbol(tokenSymbol: string): (dispatch: Dispatch) => Promise<void>
  addFounder(founder: Arc.Founder): (dispatch: Dispatch) => Promise<void>
  addScheme(scheme: Arc.Scheme): (dispatch: Dispatch) => Promise<void>
  remScheme(scheme: Arc.Scheme): (dispatch: Dispatch) => Promise<void>
  setVotingMachine(
    votingMachine: Arc.VotingMachineConfiguration
  ): (dispatch: Dispatch) => Promise<void>
  createDao(): (dispatch: Dispatch, getState: () => AppState) => Promise<string>
  setStepIsValide(
    isValide: boolean
  ): (dispatch: Dispatch, getState: () => AppState) => Promise<void>
}

export function nextStep(): (dispatch: Dispatch) => Promise<void> {
  return (dispatch: Dispatch) => {
    dispatch(Actions.daoCreateNextStep())
    return Promise.resolve()
  }
}

export function prevStep(): (dispatch: Dispatch) => Promise<void> {
  return (dispatch: Dispatch) => {
    dispatch(Actions.daoCreatePrevStep())
    return Promise.resolve()
  }
}

export function setName(name: string): (dispatch: Dispatch) => Promise<void> {
  return (dispatch: Dispatch) => {
    dispatch(Actions.daoCreateSetName(name))
    return Promise.resolve()
  }
}

export function setTokenName(
  tokenName: string
): (dispatch: Dispatch) => Promise<void> {
  return (dispatch: Dispatch) => {
    dispatch(Actions.daoCreateSetToken(tokenName))
    return Promise.resolve()
  }
}

export function setTokenSymbol(
  tokenSymbol: string
): (dispatch: Dispatch) => Promise<void> {
  return (dispatch: Dispatch) => {
    dispatch(Actions.daoCreateSetTokenSym(tokenSymbol))
    return Promise.resolve()
  }
}

export function addFounder(
  founder: Arc.Founder
): (dispatch: Dispatch) => Promise<void> {
  return (dispatch: Dispatch) => {
    dispatch(Actions.daoCreateAddFounder(founder))
    return Promise.resolve()
  }
}

export function addScheme(
  scheme: Arc.Scheme
): (dispatch: Dispatch) => Promise<void> {
  return (dispatch: Dispatch) => {
    dispatch(Actions.daoCreateAddScheme(scheme))
    return Promise.resolve()
  }
}

export function remScheme(
  scheme: Arc.Scheme
): (dispatch: Dispatch) => Promise<void> {
  return (dispatch: Dispatch) => {
    dispatch(Actions.daoCreateRemScheme(scheme))
    return Promise.resolve()
  }
}

export function setVotingMachine(
  votingMachineConfiguration: Arc.VotingMachineConfiguration
): (dispatch: Dispatch) => Promise<void> {
  return (dispatch: Dispatch) => {
    dispatch(Actions.daoCreateAddVoteMachine(votingMachineConfiguration))
    return Promise.resolve()
  }
}

export function createDao(): (
  dispatch: Dispatch,
  getState: () => AppState
) => Promise<string> {
  return async (dispatch: Dispatch, getState: () => AppState) => {
    dispatch(
      Actions.waitingAnimationOpen({
        type: "transaction",
        message: "To create the DAO, please sign the upcoming transaction",
      })
    )
    const {
      naming,
      founders,
      schemes,
      votingMachineConfiguration,
    } = getState().daoCreator

    try {
      const dao = await Arc.createDao(
        naming,
        founders,
        schemes,
        votingMachineConfiguration
      )
      dispatch(Actions.daoCreateSetDeployedDao(dao))
      dispatch(Actions.daoCreateNextStep())
      dispatch(Actions.waitingAnimationClose())
      return Promise.resolve("Success!")
    } catch (e) {
      dispatch(Actions.waitingAnimationClose())
      dispatch(
        Actions.notificationError("Failed to create DAO. Error: " + e.message)
      )
      return Promise.resolve(e.message)
    }
  }
}

export function setStepIsValide(
  isValide: boolean
): (dispatch: Dispatch, getState: () => AppState) => Promise<void> {
  return (dispatch: Dispatch, getState: () => AppState) => {
    dispatch(
      Actions.daoCreateSetStepValidation({
        step: getState().daoCreator.step,
        isValide,
      })
    )
    return Promise.resolve()
  }
}
