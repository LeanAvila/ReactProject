import { GET_CITIES, DELETE_CITY, ADD_CITY } from '../actions/types'

//const defaultState = [{"_id":"5dbb56be1c9d440000002777","city":"London","country":"UK"},{"_id":"5dbb56d31c9d440000002779","city":"Berlin","country":"Germany"},{"_id":"5dbb56ef1c9d44000000277b","city":"Madrid","country":"Spain"},{"_id":"5dbb574c1c9d440000002781","city":"Rome","country":"Italy"},{"_id":"5dbb576c1c9d440000002782","city":"Paris","country":"France"},{"_id":"5dbb57881c9d440000002785","city":"Bucharest","country":"Romania"},{"_id":"5dbb57a21c9d440000002786","city":"Budapest","country":"Hungary"},{"_id":"5dbb57ba1c9d440000002787","city":"Hamburg","country":"Germany"},{"_id":"5dbb57d21c9d440000002788","city":"Warsaw","country":"Poland"},{"_id":"5dbb57e61c9d440000002789","city":"Belgrade","country":"Serbia"},{"_id":"5dbb580a1c9d44000000278a","city":"Vienna","country":"Austria"},{"_id":"5dbb581a1c9d44000000278b","city":"Milan","country":"Italy"},{"_id":"5dbb58311c9d44000000278c","city":"Munich","country":"Germany"},{"_id":"5dbb58461c9d44000000278f","city":"Prague","country":"Czech Republic"},{"_id":"5dbb58861c9d440000002790","city":"Sofia","country":"Bulgaria"},{"_id":"5dbb58cf1c9d440000002791","city":"Napoli","country":"Italy"},{"_id":"5dbb58e71c9d440000002794","city":"Stockholm","country":"Sweden"},{"_id":"5dbb58fe1c9d440000002795","city":"Helsinki","country":"Finland"},{"_id":"5dbb59141c9d440000002796","city":"Copenhagen","country":"Denmark"},{"_id":"5dbb592d1c9d440000002799","city":"Oslo","country":"Norway"}]




export default function (state = [], action) {

    switch (action.type){
        case GET_CITIES: 
        return [...state, action.payload.cities]

        default: 
        return state
    }

}