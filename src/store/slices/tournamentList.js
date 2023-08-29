// third-party
import { createSlice } from '@reduxjs/toolkit';

// project imports
import axios from 'utils/axios';
import { dispatch } from '../index';

// ----------------------------------------------------------------------

const initialState = {
    error: null,
    data: [],
    gameType: [],
    tournamentType: [],
    detailId: {},
    totalCount: ''
};

const slice = createSlice({
    name: 'tournamentList',
    initialState,
    reducers: {
        hasError(state, action) {
            state.error = action.payload;
        },

        getDataCreate(state, action) {
            state.data = action.payload;
        },
        getDataCount(state, action) {
            state.totalCount = action.payload;
        },

        getGameType(state, action) {
            state.gameType = action.payload;
        },
        getTournamnetType(state, action) {
            state.tournamentType = action.payload;
            console.log('state', state.tournamentType);
        },
        getDetailId(state, action) {
            state.detailId = action.payload;
        }
    }
});

// Reducer
export default slice.reducer;

// ----------------------------------------------------------------------

export function getDataCreateSuccess(pageNum, rowsPerPage, filter) {
    return async () => {
        try {
            const response = await axios.get(
                `/tournaments/getList?page_num=${pageNum}&rows_per_page=${rowsPerPage}&buy_in_filter=${filter}`,
                // {
                //     page_num: pageNum,
                //     rows_per_page: rowsPerPage,
                //     buy_in_filter: filter
                // },
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            );
            dispatch(slice.actions.getDataCreate(response.data.data));
            dispatch(slice.actions.getDataCount(response.data.data.tournaments.length));
        } catch (error) {
            dispatch(slice.actions.hasError(error));
        }
    };
}

export function getGameTypeSuccess() {
    return async () => {
        try {
            const response = await axios.get('/game/type/getlist');
            dispatch(slice.actions.getGameType(response.data.data));
            console.log(response.data.data);
        } catch (error) {
            dispatch(slice.actions.hasError(error));
        }
    };
}

export function getTournamentTypeSuccess(pageNum = 1, rowsPerPage = 10, filter = 'all') {
    return async () => {
        try {
            const response = await axios.get(
                `/tournaments/getList?page_num=${pageNum}&rows_per_page=${rowsPerPage}&buy_in_filter=${filter}`,
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            );
            dispatch(slice.actions.getTournamnetType(response.data.data));
        } catch (error) {
            dispatch(slice.actions.hasError(error));
        }
    };
}

export function getDetailIdSuccess(value) {
    dispatch(slice.actions.getDetailId(value));
}
