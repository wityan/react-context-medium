export const dispatchAction = (disaptch, type, data) => disaptch({
    type, data
});

export const updateState = (state, updates) => ({
        ...state,
        ...updates
    });
